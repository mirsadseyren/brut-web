import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

//BRUT LOGO
function Banner() {
  return (
    <Container>
      <div class="container">
      <Header>
        <HeaderText>
          <a href='#'>BRUT</a>
        </HeaderText>
        <Fade left cascade> 
          <HeaderSpring>
            BRUT
          </HeaderSpring>
          <HeaderSpring>
            BRUT
          </HeaderSpring>
          <HeaderSpring>
            BRUT
          </HeaderSpring>
          <HeaderSpring>
            BRUT
          </HeaderSpring>
        </Fade>
      </Header>
      </div>


    </Container>
  )
}

export default Banner

const Container = styled.div({})
const Header = styled.div``
const HeaderText = styled.div`
font-size: 70px;
`

const HeaderSpring = styled.div({
  fontSize: "70px",
  WebkitTextStroke: "1px white",
  outlineWidth:'5px',
  color: 'transparent',
  marginTop: "-40px"
  
})