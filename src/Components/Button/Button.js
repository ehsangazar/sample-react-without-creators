import React from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.button`
  color: #8935c0;
  width: 50px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.active ? '#8935c0' : '#fffff'}
  font-size: 12px;
  color: ${props => props.active ? '#ffffff' : '#8935c0'};
  border-radius: 4px;
  border: 2px solid #8935c0;
  :hover {
    background-color: ${props => props.active ? '#8935c0' : '#ebedf5'};
  }
  cursor: pointer;
`

const Button = ({children, ...props}) => <ButtonStyled {...props}>{children}</ButtonStyled>

export default Button