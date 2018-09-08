import React from 'react';
import ProjectImage from './ProjectImage';
import Heroes from '../images/Heros.png';
import '../App.css';

const ProjectsContainer = () => {
    return (
        <div>
            <ProjectImage heading={'Heros'} sub={'Built with HTML, CSS and Bootstrap'} img={Heroes} />
        </div>
    )
}

export default ProjectsContainer;