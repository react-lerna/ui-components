import React, { Component } from 'react'
import styled from 'styled-components'

// import Atoms from '../../atoms'
const menuLinks = [
  {
    label: 'Home',
    url: '.',
  },
  {
    label: 'About',
    url: 'about',
  },
  {
    label: 'Contacts',
    url: 'contacts',
  },
]

export const StyledMainMenu = styled.div`
  background-color: ${props => props.theme.colors.primary.bgAlt};
`

class MainMenu extends Component {
  render() {
    return (
      <StyledMainMenu>
        { menuLinks.map(link => <a href={link.url}>{link.label}</a>) }
      </StyledMainMenu>
    )
  }
}

MainMenu.defaultProp = {
}

export default MainMenu
