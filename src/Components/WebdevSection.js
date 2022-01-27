import React from 'react';
import WebDevData from './db/WebDevdb.json'
import WebCard from './WebDevCard'

const WebdevSection = () => {
  return <section id="github-section">
  <h3 id="my-github">WEB DEVELOPMENT</h3>
  <p className="instructions">Hover over the images to see the titles. Click any of the images below to see more work!</p>
  <section id='card-grid'> 
      {WebDevData.map((eachobj, index)=>(
          <WebCard key={index} WebDevData={eachobj}></WebCard>))}
  </section> 
</section>;
};

export default WebdevSection;
