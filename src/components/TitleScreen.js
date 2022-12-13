import React from 'react'
import styled from 'styled-components'
import backgroundImage from '../../src/pics/giphy-downsized-large.gif'
import { Fade } from 'react-reveal'

function TitleScreen() {
  return (
    <Container backgroundImage = {backgroundImage}>
        <div class="container text-center">
            <Title>
                <div class="archivo">
                    <Fade cascade big>
                        <a href="#">BRUT</a>
                    </Fade>
                </div>
                <Fade cascade big>
                <SubText>
                    House Party Thriller Night
                </SubText>
                </Fade>
            </Title>
        </div>
    </Container>
  )
}

export default TitleScreen

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: grey;
    background-size: cover;
    background-position: center;
    background-repeat: not-repeat;
    background-image: ${props => `url(".${props.backgroundImage}")`};

    display: flex;
    flex-direction: column;

    justify-content: space-between;
    align-items: center;
`
const Title = styled.div({
    color: 'white',
    fontSize: '100px',
    paddingTop: '35vh',

})
const SubText = styled.div({
    fontSize: '40px',
    textTransform: 'full-width',
    color: 'rgba(255,255,255,0.7)'
})