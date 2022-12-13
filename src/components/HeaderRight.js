import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

function HeaderRight() {
  return (
    
    <Container>
        <Fade right>
        <div class="container text-center">
            <Header>
                PHILOSOPHY
            </Header>
            <Text>
            You need to be logged into GitHub to be able to download GitHub Actions artifacts.

            Nightly builds are built automatically every time a

            To download the latest nightly build, go to the GitHub Actions tab, enter the last run of workflow "Video2X Nightly Build, and download the artifacts generated from the run.

            </Text>
        </div>
        </Fade>
    </Container>
  )
}

export default HeaderRight

const Container = styled.div({
    marginTop:'30px',
    padding:'30px',
    color: 'white',
    right:0,
    height:'max',
    width:'max',
    backgroundColor:'rgba(255,255,255,0.1)'
})
const Header = styled.div({
    color:'white',
    paddingBottom:'10px',
    fontSize:'20px'
})
const Text = styled.div({
    textTransform: 'full-width',
    fontWeight: 'lighter'
})