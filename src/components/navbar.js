import React, { Component } from 'react';
import '../styles/navbar.css';

class Navbar extends Component {
	render() {
		return (
			<div className="container navbar">
				<header>
					<div className="logo">
						<h1>
							<a>RT</a>
						</h1>
					</div>
					<ul className="nav-links">
						<li>
							<a href="#about">About</a>
						</li>
						<li>
							<a href="#skills">Skills</a>
						</li>
						<li>
							<a href="#projects">Projects</a>
						</li>
						<li>
							<a href="#contact">Contact</a>
						</li>
					</ul>
					<div className="navbar-hamburger">
						<div className="line1" />
						<div className="line2" />
						<div className="line3" />
					</div>
				</header>
			</div>
		);
	}
}

export default Navbar;
