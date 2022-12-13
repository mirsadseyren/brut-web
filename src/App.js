import React from 'react'
import Header from './components/Header'
import TitleScreen from './components/TitleScreen'
import styled from 'styled-components'
import TopBar from './components/TopBar'



function App() {
  return (
    <Container>
      <TopBar/>
      <TitleScreen/>
      <Header/>
    </Container>
  )
}

export default App

const Container = styled.div`

`