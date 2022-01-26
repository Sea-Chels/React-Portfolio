import React from 'react';
import ArtCard from './ProjectCard'
import ArtData from './db/Artdb.json'
import WebDevData from './db/WebDevdb.json'
import WebCard from './WebDevCard'
import ChelsId from "./Images/Chel-ID.png"
import Footer from "./Footer"


const Main_Page = () => {
  return <div>
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
                <section id='card-grid'> 
                    {ArtData.map((eachobj, index)=>(
                        <ArtCard key={index} ArtData={eachobj}></ArtCard>))}
                </section> 
            </section>
            <section id="github-section">
                <h3 id="my-github">WEB DEVELOPMENT</h3>
                <p className="instructions">Hover over the images to see the titles. Click any of the images below to see more work!</p>
                <section id='card-grid'> 
                    {WebDevData.map((eachobj, index)=>(
                        <WebCard key={index} WebDevData={eachobj}></WebCard>))}
                </section> 
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
            <Footer/>
  </div>;
};

export default Main_Page;
