import React from 'react'
import styled from 'styled-components'

const SPANStyled = styled.span`
  font-size: 12px;
  color: #ababab;
`

const SPAN = ({children, ...props}) => <SPANStyled {...props}>{children}</SPANStyled>

export default SPAN