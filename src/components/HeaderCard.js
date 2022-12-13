import React from 'react'
import styled from 'styled-components'
import eyeImage from '../../src/pics/fur.webp'
import Fade from 'react-reveal/Fade'

function HeaderCard() {
  return (
    
    <div class="container text-center">
        <Fade big cascade>
        <Body>
        <img src={eyeImage} class="img-fluid" alt='hey'></img>
            <BodyHeader>
                Whaddup
            </BodyHeader>
            <div class="container">
                <BodyText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                </BodyText>
            </div>
        </Body>
        </Fade>
    </div>
  )
}

export default HeaderCard

const Body = styled.div ({
    marginTop: '30px',
    backgroundColor: '#c80000',
    color: 'white',
    maxWidth: '600px'
})

const BodyHeader = styled.div({
    textTransform: 'uppercase',
    fontSize: '30px',
    fontWeight: '20px'
    
    
})
const BodyText = styled.div({
    textTransform: 'full-width',
    fontWeight: 'lighter'


})