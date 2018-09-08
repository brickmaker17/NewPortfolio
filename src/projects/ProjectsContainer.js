import React from 'react';
import ProjectImage from './ProjectImage';
import Heroes from '../images/Heros.png';
import '../App.css';

const ProjectsContainer = () => {
    return (
        <div>
            <ProjectImage img={Heroes} />
        </div>
    )
}

export default ProjectsContainer;