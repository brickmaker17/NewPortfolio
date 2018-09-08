import React from 'react'
import styled from 'styled-components';

const Image = styled.img`
    grid-area: proj;
    width: 200px;
    height: 200px;
`

const ProjectImage = props => {
    return (
        <div>
            <Image src={props.img} alt=""/>
        </div>
    )
}

export default ProjectImage;