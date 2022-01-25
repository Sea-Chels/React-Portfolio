import React from 'react';

import ThreeDimentional_Room from './Images/3D-Room.png'
import ChelsId from "./Images/Chel-ID.png"
import BWSkull from './Images/BW-Skull.png'
import PeopleArt from './Images/People-Art.png'
import FantasyArt from './Images/Fantasy-Artwork.png'
import ProjectOne from './Images/Project-1-img.png'
import WeekTwo from './Images/Week-2-img.png'
import DailyPlanner from './Images/Daily-Scheduler.png'
import EmployeeManager from './Images/Employee-Management.png'

const Main_Page = () => {
  return <div>
            <header id="header">
                <h1> CHELBY </h1>
            </header>
            <nav>
                <ul id="navbar">
                    <li><a href="#artwork">Art Work</a></li>
                    <li><a href="#my-github">Web Development</a></li>
                    <li><a href="#contact">Contact Me</a></li>
                </ul>
            </nav>
            <main>
                <img src={ChelsId} alt="drawing of the artist with her plants"/>
                <h2 id="bio-title">BIOGRAPHY</h2>
                <p className="bio">Chelby, a native Californian and Maryland transplant, 
                    lives in the Pacific NorthWest. She is an artist who is learning 
                    many different mediums of art. She is always seeking to
                    improve her work and her trades. 
                </p>
                <img src=""/>
            </main>
            <section id="art-work-section"> 
                <h3 id="artwork">ARTWORK</h3>
                <p className="instructions">Hover over the images to see the titles. Click the images below to see more art!</p>
                
                <div className="img-container art-top">
                    <a href="https://chels-art.com/">
                        <img src={FantasyArt} alt="illustration of a forest monster and a dragon" className="img" />
                        <div className="middle">
                            <div className="text">Fantasy Artwork</div>
                        </div>
                    </a>
                </div>
                <div className="img-container art-top">
                    <a href="https://chels-art.com/bw">
                        <img src={BWSkull} alt="charcoal drawing of a deer skull" className="img" />
                        <div className="middle">
                            <div className="text">Black and white Artwork</div>
                        </div>
                    </a>
                </div>
                <div className="img-container art-bottom">
                    <a href="https://chels-art.com/3d-work">
                        <img src={ThreeDimentional_Room} alt="3D render of a modern mountain witch room" className="img" />
                        <div className="middle">
                            <div className="text">3D Artwork</div>
                        </div>
                    </a>
                </div>
                <div className="img-container art-bottom">
                    <a href="https://chels-art.com/">
                        <img src={PeopleArt} alt="illustration of a scientist and a person surrounded by plants" className="img" />
                        <div className="middle">
                            <div className="text">People Artwork</div>
                        </div>
                    </a>
                </div>
                
            </section>
            <section id="github-section">
                <h3 id="my-github">WEB DEVELOPMENT</h3>
                <p className="instructions">Hover over the images to see the titles. Click any of the images below to see more work!</p>
                <div id="main-github">
                    <div className="img-container">
                    <a href="https://github.com/Sea-Chels/Project-1-Personal-Repo">
                        <img id= "git-head" src={ProjectOne} alt="image of a website and README file" className="img" />
                        <div className="middle">
                            <div className="text"><a href="https://sea-chels.github.io/Project-1-Personal-Repo/">Project 1: Tu Le Crees</a></div>
                        </div>
                    </a>
                    </div> 
                </div>  
            <div>
                <div className="img-container">
                    <a href="https://github.com/Sea-Chels/Week-2-Portfolio">
                        <img src={WeekTwo} alt="image of authors illustration of herself" className="img" />
                        <div className="middle">
                            <div className="text"><a href="https://sea-chels.github.io/Week-2-Portfolio/">Advanced CSS Practice</a></div>
                        </div>
                    </a>
                </div>
                <div className="img-container">
                    <a href="https://github.com/Sea-Chels/Daily-Planner">
                        <img src={DailyPlanner} alt="Placeholder image for future projects" className="img" />
                        <div className="middle">
                            <div className="text"><a href="https://sea-chels.github.io/Daily-Planner/" alt="calendar image">Calendar App</a></div>
                        </div>
                    </a>
                </div>
                <div className="img-container">
                    <a href="https://github.com/Sea-Chels/Team-Profile-Generator/">
                        <img src={EmployeeManager} alt="Placeholder image for future projects" className="img" />
                        <div className="middle">
                            <div className="text">Team Profile Generator</div>
                        </div>
                    </a>
                </div>
            </div>
            </section>
            <section id='contact-me-section'>
                <h3 id="contact">CONTACT ME</h3>
                <ul>
                    <li id='linkedin'><a href="https://www.linkedin.com/in/chelby-sallady-9b5bbb148/">Linkedin</a></li>
                    <li><a id="email" href="mailto:example.email@gmail.com">Email</a></li>
                    <li id="instagram"><a href="https://www.instagram.com/seachels_downunder/?hl=en">Instagram</a></li>
                    <li><a id="myGithub" href="https://github.com/Sea-Chels/">GitHub</a></li>
                    <li><a id="resume" href="https://my.indeed.com/p/chelbys-ssmcb7s">Resume</a></li>
                </ul>
            </section>
            <footer>
                <a id="footer" href="#header"> Back to Top ⬆</a>
                <p> This is my copyright area</p>
            </footer>
  </div>;
};

export default Main_Page;
