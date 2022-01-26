import React from 'react';


const ProjectCard = (props) => {
  return <div className='img-container'>
                    <a href={props.WebDevData.WebLink}>
                        <img src={props.WebDevData.Source} alt={props.WebDevData.Alt} className="img"/>
                        <div className="middle">
                            <div className="text">{props.WebDevData.Name}</div>
                        </div>
                    </a>
        </div>
};

export default ProjectCard;
