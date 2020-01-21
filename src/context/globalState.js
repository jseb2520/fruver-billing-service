import React, {useState} from 'react';
import UserContext, {initialUserState as initialUser} from './user-context';

export default function GlobalState(props) {
	const [userState, setUserState] = useState(initialUser);

	const userLoggedIn = (user) => {
		setUserState({
			...userState,
			loggedIn: true,
			_id: user._id,
			username: user.username,
			name: user.name,
		});
	};

	const userLoggedOut = () => {
		setUserState({
			...userState,
			loggedIn: false,
			_id: '',
			name: '',
			email: '',
			img: '',
		});
	};

	return (
		<UserContext.Provider
			value={{
				loggedIn: userState.loggedIn,
				_id: userState._id,
				name: userState.name,
				email: userState.email,
				img: userState.img,
				phone: userState.phone,
				userLoggedIn,
				userLoggedOut,
			}}
		>
			{props.children}
		</UserContext.Provider>
	);
}
