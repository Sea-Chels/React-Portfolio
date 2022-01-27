import React from 'react';
import ArtCard from './ProjectCard'
import ArtData from './db/Artdb.json'

const ArtworkSection = () => {
  return(<section id="art-work-section"> 
  <h3 id="artwork">ARTWORK</h3>
  <p className="instructions">Hover over the images to see the titles. Click the images below to see more art!</p>
  <section id='card-grid'> 
      {ArtData.map((eachobj, index)=>(
          <ArtCard key={index} ArtData={eachobj}></ArtCard>))}
  </section> 
</section>)
};

export default ArtworkSection;
