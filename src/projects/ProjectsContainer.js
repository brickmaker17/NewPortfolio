import React from 'react';
import ProjectImage from './ProjectImage';
import Heroes from '../images/Heros.png';
import '../App.css';

const ProjectsContainer = () => {
    return (
        <ProjectImage img={Heroes} />
    )
}

export default ProjectsContainer;