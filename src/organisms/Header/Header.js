import React, { Component } from 'react'
import styled from 'styled-components'

import MainMenu from '../../molecules/MainMenu'

export const StyledHeader = styled.header`
  background-color: red;
  padding: 20px;
  display: flex;
  justify-content: space-between;
`

class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <MainMenu/>
        <p>HEADER LOGO</p>
        <p>LOGIN/LOGOUT/ACCOUNT</p>
      </StyledHeader>
    )
  }
}

Header.defaultProp = {
}

export default Header
