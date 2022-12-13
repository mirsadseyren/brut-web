import React from 'react'
import styled from 'styled-components'
import Banner from './Banner'
import HeaderCard from './HeaderCard'
import HeaderRight from './HeaderRight'


function Header() {
  return (
    <Container>
      <div class="archivo">
      <div class="container">
        <div class="row">
          <div class="col-sm-3">
              <Banner/>
          </div>
          <div class="col-sm-6">
              <HeaderCard/>
          </div>
          <div class="col-sm-3">
              <HeaderRight/>
          </div>
        </div>
      </div>
      
    </div>
  </Container>
  )
}

export default Header

const Container = styled.div `
margin-top:20px;
  width: 100%;
  height: 100vh;
`