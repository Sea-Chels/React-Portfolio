import React from 'react';


const ProjectCard = (props) => {
  return <div className={props.ArtData.DivClass}>
                    <a href={props.ArtData.WebLink}>
                        <img src={props.ArtData.Source} alt={props.ArtData.Alt} className="img"/>
                        <div className="middle">
                            <div className="text">{props.ArtData.Name}</div>
                        </div>
                    </a>
        </div>
};

export default ProjectCard;
