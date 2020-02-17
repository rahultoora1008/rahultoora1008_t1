import React, { Component } from 'react';
import '../styles/about.css';

class About extends Component {
	render() {
		return (
			<div className="container about" id="about">
				<h1>About</h1>
				<div className="about-info">
					<p>Hi, my name's Rahul Toora. I'm a Full Stack Developer.</p>
					<br />
					<p>Self taught in most of the current web technologies and passionate about learning new.</p>
					<br />
					<p>
						Nothing much to say except that, don't forget to checkout some of the{' '}
						<span className="projects">Projects</span>
					</p>
				</div>
			</div>
		);
	}
}

export default About;
