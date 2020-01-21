import React, {useState, useContext} from 'react';
import {withRouter} from 'react-router-dom';

// Externals
import PropTypes from 'prop-types';
import compose from 'recompose/compose';

// Material helpers
import {withStyles} from '@material-ui/core';

// Material components
import {
	Grid,
	Button,
	IconButton,
	CircularProgress,
	TextField,
	Typography,
} from '@material-ui/core';

// Material icons
import {ArrowBack as ArrowBackIcon} from '@material-ui/icons';

// Component styles
import styles from './styles';

import UserContext from '../../context/user-context';
import {Formik} from 'formik';
import * as Yup from 'yup';

const userValidationSchema = Yup.object().shape({
	username: Yup.string()
		.required('Obligatorio'),
	password: Yup.string().required('Obligatorio'),
});

const SignIn = (props) => {
	const {userLoggedIn} = useContext(UserContext);

	const [isLoading, setIsLoading] = useState(false);
	const {history} = props;

	const handleBack = () => {
		history.goBack();
	};

	const handleSignIn = async (values) => {
		setIsLoading(true);
		userLoggedIn({
			name: 'Lorena',
			username: 'admin',
			_id: 101,
		})
		history.push('/admin/pedidos')

		// Auth.login({username: values.username, password: values.password})
		// 	.then((user) => {
		// 		console.log('user :', user);
		// 		userLoggedIn({
		// 			name: user.user.name,
		// 			username: user.user.username,
		// 			img: user.user.img,
		// 			phone: user.user.phone,
		// 			_id: user.user._id,
		// 		});
		// 		setIsLoading(false);
		// 		history.push('/dashboard');
		// 	})
		// 	.catch(() => {
		// 		setIsLoading(false);
		// 	});
	};

	const {classes} = props;

	return (
		<Formik
			onSubmit={handleSignIn}
			validationSchema={userValidationSchema}
			initialValues={{
				username: '',
				password: '',
			}}
		>
			{(formikProps) => {
				const {
					values,
					touched,
					errors,
					handleChange,
					handleBlur,
					handleSubmit,
				} = formikProps;

				return (
					<div className={classes.root}>
						<Grid className={classes.grid} container>
							<Grid className={classes.quoteWrapper} item lg={5}>
								<div className={classes.quote}>
									<div className={classes.quoteInner}>
										<Typography className={classes.quoteText} variant='h1'>
											Hella narwhal Cosby sweater McSweeney's, salvia kitsch
											before they sold out High Life.
										</Typography>
									</div>
								</div>
							</Grid>
							<Grid className={classes.content} item lg={7} xs={12}>
								<div className={classes.content}>
									<div className={classes.contentHeader}>
										<IconButton
											className={classes.backButton}
											onClick={handleBack}
										>
											<ArrowBackIcon />
										</IconButton>
									</div>
									<div className={classes.contentBody}>
										<form className={classes.form} onSubmit={handleSubmit}>
											<Typography className={classes.title} variant='h2'>
												Ingresar al panel de administrador
											</Typography>
											<div className={classes.fields}>
												<TextField
													className={classes.textField}
													label='Nombre de usuario'
													name='username'
													onChange={handleChange}
													onBlur={handleBlur}
													type='text'
													helperText={touched.username && errors.username}
													error={!!(touched.username && errors.username)}
													value={values.username}
													variant='outlined'
												/>
												<TextField
													className={classes.textField}
													label='Contraseña'
													name='password'
													onChange={handleChange}
													onBlur={handleBlur}
													type='password'
													helperText={touched.password && errors.password}
													error={!!(touched.password && errors.password)}
													value={values.password}
													variant='outlined'
												/>
											</div>

											<Button
												className={classes.signInButton}
												color='primary'
												type='submit'
												size='large'
												variant='contained'
											>
												Ingresar
											</Button>
											{isLoading ? (
												<CircularProgress className={classes.progress} />
											) : null}
										</form>
									</div>
								</div>
							</Grid>
						</Grid>
					</div>
				);
			}}
		</Formik>
	);
};

SignIn.propTypes = {
	className: PropTypes.string,
	classes: PropTypes.object.isRequired,
	history: PropTypes.object.isRequired,
};

export default compose(withStyles(styles), withRouter)(SignIn);
