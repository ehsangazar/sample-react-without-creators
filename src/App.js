import React from 'react'
import ReactDOM from 'react-dom'
import styled, { createGlobalStyle } from 'styled-components'

import {
  Logo 
} from 'Components'
import { NextToJump } from 'Containers'

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    width: 100%;
  }
  body {
    font-family: Roboto, Arial, Helvetica, sans-serif;
    font-size: 14px;
    padding: 0;
    margin: 0;
  }
`

const AppStyled = styled.div`
  background-color: #eeeeee;
  min-height: 100vh;
`
const HeaderStyled = styled.div`
  background-color: #eeeeee;
  border-bottom: 1px #dddddd solid;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  height: 80px;
  padding: 5px 20px;;
`
const LogoSectionStyled = styled.div`
  display: flex;
  align-items: center;
  svg {
    height: 70px;
    color: #8935c0;
  }
`

const App = () => (
  <AppStyled>
    <GlobalStyle />
    <HeaderStyled>
      <LogoSectionStyled>
        <Logo />
      </LogoSectionStyled>
    </HeaderStyled>
    <NextToJump />
  </AppStyled>
)

ReactDOM.render(
  <App />, 
  document.getElementById('App')
)