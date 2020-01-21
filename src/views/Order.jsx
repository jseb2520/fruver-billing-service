import React, {useState} from 'react';
import clsx from 'clsx';
import moment from 'moment';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/styles';
import {
	Card,
	CardActions,
	CardHeader,
	CardContent,
	Button,
	Divider,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Tooltip,
	TableSortLabel,
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import mockData from '../data/data';
import StatusBullet from '../components/StatusBullet';
import SearchInput from '../components/SearchInput';
import HeaderLinks from '../components/Header/HeaderLinks.js';
import Header from '../components/Header/Header.js';

const useStyles = makeStyles((theme) => ({
	root: {
		margin: theme.spacing(2),
	},
	row: {
		height: '42px',
		display: 'flex',
		alignItems: 'center',
		marginTop: theme.spacing(15),
	},
	content: {
		padding: 0,
	},
	inner: {
		minWidth: 800,
	},
	statusContainer: {
		display: 'flex',
		alignItems: 'center',
	},
	status: {
		marginRight: theme.spacing(1),
	},
	actions: {
		justifyContent: 'flex-end',
	},
	searchInput: {
		margin: theme.spacing(2),
	},
}));

const statusColors = {
	delivered: 'success',
	pending: 'info',
	refunded: 'danger',
};
const dashboardRoutes = [];

const LatestOrders = (props) => {
	const {className, ...rest} = props;

	const classes = useStyles();

	const [orders] = useState(mockData);

	return (
		<>
			<Header
				color='success'
				routes={dashboardRoutes}
				brand='Fruver Alejandro'
				rightLinks={<HeaderLinks buttonText='Servicios' />}
				fixed
				{...rest}
			/>
			<div className={classes.row}>
				<SearchInput
					className={classes.searchInput}
					placeholder='Buscar producto'
				/>
			</div>
			<Card {...rest} className={clsx(classes.root, className)}>
				<CardHeader
					action={
						<Button color='primary' size='small' variant='outlined'>
							Agregar producto
						</Button>
					}
					title='Productos agregados'
				/>
				<Divider />
				<CardContent className={classes.content}>
					<div className={classes.inner}>
						<Table>
							<TableHead>
								<TableRow>
									<TableCell>ID</TableCell>
									<TableCell>Nombre</TableCell>
									<TableCell sortDirection='desc'>
										<Tooltip enterDelay={300} title='Sort'>
											<TableSortLabel active direction='desc'>
												Cantidad
											</TableSortLabel>
										</Tooltip>
									</TableCell>
									<TableCell>Estado</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{orders.map((order) => (
									<TableRow hover key={order.id}>
										<TableCell>{order.ref}</TableCell>
										<TableCell>{order.customer.name}</TableCell>
										<TableCell>
											{moment(order.createdAt).format('DD/MM/YYYY')}
										</TableCell>
										<TableCell>
											<div className={classes.statusContainer}>
												<StatusBullet
													className={classes.status}
													color={statusColors[order.status]}
													size='sm'
												/>
												{order.status}
											</div>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</div>
				</CardContent>
				<Divider />
				<CardActions className={classes.actions}>
					<Button color='primary' size='small' variant='text'>
						View all <ArrowRightIcon />
					</Button>
				</CardActions>
			</Card>
		</>
	);
};

LatestOrders.propTypes = {
	className: PropTypes.string,
};

export default LatestOrders;
