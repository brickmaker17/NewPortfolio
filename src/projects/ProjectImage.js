import React from 'react'
import styled from 'styled-components';

const Image = styled.img`
    width: 200px;
    height: 200px;
`
const Wrapper = styled.div`
    grid-area: proj;
    display: grid;
    justify-content: center;
    width: 28%;
`

const ProjectImage = props => {
    return (
        <Wrapper>
            <h1>{props.heading}</h1>
            <h5>{props.sub}</h5>
            <Image src={props.img} alt=""/>
        </Wrapper>
    )
}

export default ProjectImage;