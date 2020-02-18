import React, { Component } from 'react';
import styles from './rahultoora1008.css';
import Navbar from './components/navbar';
import Main from './components/main';
import About from './components/about';

class App extends Component {
	render() {
		return (
			<div>
				<hr />
				<hr className="hr2"/>
				<div className="vl" />
				<Navbar />
				<Main />
				{/* <About /> */}
			</div>
		);
	}
}

export default App;
