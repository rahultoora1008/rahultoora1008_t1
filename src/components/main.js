import React, { Component } from 'react';
import '../styles/main.css';

class Main extends Component {
	render() {
		return (
			<div className="container main-section">
				<div className="text">
					<h1>
						<span>Hi, </span>
						<span>my name is,</span>
						<span className="myName">Rahul</span>
						<span>I'm a learning<span className="devLandscape">Developer</span></span>
						<span className="devPortrait">Developer</span>
					</h1>
					<p>MongoDB / Express / NodeJS / React / ...</p>
					<a href="#resume">Resume</a>
				</div>
				<div className="main-section-img" />
			</div>
		);
	}
}

export default Main;
