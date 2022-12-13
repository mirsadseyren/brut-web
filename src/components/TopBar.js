import React from 'react'
import styled from 'styled-components'

function TopBar() {
  return (
    <Container>
        <div class="container">
            <div class ="row">
                <div></div>
                <div class="col-3 text-left">
                        <div class="archivo">
                            <a href='#'>BRUT</a>
                        </div>
                </div>
                <div class="col-6 text-center">
                    <Cross>
                        <a href='#'>⸸</a>
                    </Cross>
                </div>
                <div class="col-1 text-center d-none d-md-block">
                    Github
                </div>
                <div class="col-1 text-center d-none d-md-block">
                    Youtube
                </div>
                <div class="col-1 text-center d-none d-md-block">
                    Instagram
                </div>
                <div class="col-1 d-md-none text-right">
                    <Button></Button>
                
                </div>
            </div>

        </div>
    </Container>
  )
}

export default TopBar

const Container = styled.div({
    height: 'fixed',
    padding:'10px',
    width: '100%',
    position: 'fixed',
    backgroundColor:'black',
    zIndex: '1',
    color: 'white'
})
const Cross = styled.div({
    color:'#c80000',
    borderColor:'#c80000'
})

const Button = styled.button({
    height:'15px',
    width:'30px',
    background: 'black',
    fontSize:'10px',
    borderColor:'red',
    borderRadius:'5px',
    borderStyle:'solid',
    position: 'absolute',
    right:'10px',
    top: '15px'
})