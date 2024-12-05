import React from "react";
import { useTelegram } from "../hooks/useTelegram";

function Header() {
	const { user, onClose } = useTelegram();

	return (
		<nav className="green darken-1 nav-extended">
			<div className="container">
				<div className="nav-wrapper">
					<button onClick={onClose}>Close</button>
					<h1>first_name: {user?.first_name}</h1>
					<h1>last_name: {user?.last_name}</h1>
					<h2>username: {user?.username}</h2>
					<h3>id: {user?.id}</h3>
					<h6>is_bot?:{user?.is_bot}</h6>
				</div>
			</div>
		</nav>
	);
}

export { Header };
