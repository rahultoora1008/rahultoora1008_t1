import React, { Component } from 'react';
import '../styles/main.css';

class Main extends Component {
	render() {
		return (
			<div className="container main-section">
				<div className="text">
					<h1>
						<div>Hi,</div>
						<div>
							I'm <span className="myName">Rahul</span>
						</div>
						<div>a learningDeveloper</div>
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
