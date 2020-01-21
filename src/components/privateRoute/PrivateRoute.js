import React, {useContext} from 'react';
import {Route, Redirect} from 'react-router-dom';
import UserContext from '../../context/user-context';
import AdminLayout from '../../layouts/Admin/Admin';

const PrivateRoute = ({restricted, ...rest}) => {
  const user = useContext(UserContext);
	return (
		<Route
			{...rest}
			render={(props) =>
				user.loggedIn && restricted ? (
					<AdminLayout {...props} />
				) : (
					<Redirect to='/sign-in' />
				)
			}
		/>
	);
};

export default PrivateRoute;
