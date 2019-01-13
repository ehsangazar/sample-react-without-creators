import React from 'react'
import styled from 'styled-components'

const H3Styled = styled.h3`
  font-size: 14px;
  margin:0;
`

const H3 = ({children, ...props}) => <H3Styled {...props}>{children}</H3Styled>

export default H3