import React, { Component } from 'react'
import styled from 'styled-components'

export const StyledFooter = styled.header`
  background-color: blue;
  padding: 20px;
`

class Footer extends Component {
  render() {
    return (
      <StyledFooter>
        <p>FOOTER</p>
      </StyledFooter>
    )
  }
}

Footer.defaultProp = {
}

export default Footer
