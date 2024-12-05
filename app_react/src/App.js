import "./App.css";
import React, { useEffect } from "react";
import { Header } from "./componets/Header";

const tg = window.Telegram.WebApp;

function App() {
	useEffect(() => {
		tg.ready();
	}, []);

	const onClose = () => {
		tg.close();
	};

	return (
		<div className="App">
			<Header onClose={onClose} />
			<Header onClose={onClose} />
			<Header onClose={onClose} />
		</div>
	);
}

export default App;
