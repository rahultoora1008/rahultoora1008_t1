import React, { Component } from 'react';
import './rahultoora1008.css';

class App extends Component {
	render() {
		const navSlide = () => {
			const hamburger = document.querySelector('hamburger');
			const nav = document.querySelector('nav-links');

			hamburger.addEventListener('click', () => {
				nav.classList.toggle('nav-vertical');
			});
		};
		return (
			<div>
				<div className="container navbar">
					<header>
						<div className="logo">
							<h1>RT</h1>
						</div>
						<nav>
							<ul>
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
						</nav>
					</header>
				</div>
				<div className="container main-section">
					<div className="text">
						<h1>
							<span>H</span>
							<span className="m-left">i</span>
							<span className="m-left">,</span>
							<br />
							<span>I</span>
							<span className="m-left">'</span>
							<span className="m-left">m</span>
							&nbsp;
							<span className="name">R</span>
							<span className="m-left name">a</span>
							<span className="m-left name">h</span>
							<span className="m-left name">u</span>
							<span className="m-left name">l</span>
							<span className="m-left">,</span>
							<br />
							<span>W</span>
							<span className="m-left">e</span>
							<span className="m-left">b</span>
							&nbsp;
							<span>D</span>
							<span className="m-left">e</span>
							<span className="m-left">v</span>
							<span className="m-left">e</span>
							<span className="m-left">l</span>
							<span className="m-left">o</span>
							<span className="m-left">p</span>
							<span className="m-left">e</span>
							<span className="m-left">r</span>
							<span className="m-left">.</span>
						</h1>
						<p>MongoDB / Express / NodeJS / React / ...</p>
						<a href="#resume">Resume</a>
					</div>
					<div className="main-section-img" />
				</div>
				<div className="container about" id="about">
					<h1>About</h1>
					<div className="about-info">
						<p>Hi, my name's Rahul Toora. I'm a Full Stack Developer</p>
						<br />
						<p>Self Taught in Most of the Current Technologies and Passionate about learning new.</p>
						<br />
						<p>Nothing much to say except that, don't forget to check some of the Projects</p>
					</div>
				</div>
				{/* <div class="container skills" id="skills">
              <h1>Skills</h1>
          </div>
          <div class="container projects" id="projects">
              <h1>Projects</h1>
          </div>
          <div class="container contact" id="contact">
              <h1>Contact</h1>
              <form>
                  <input type="text" name="name" placeholder="Full Name"  />
                  <input type="email" placeholder="Email" />
                  <textarea name="message" cols="30" rows="10" placeholder="Message"></textarea>
              </form>
          </div>
          <footer>
              <hr />
              <p>2020 Copyright. All Rights Reserved</p>
          </footer> */}
			</div>
		);
	}
}

export default App;
