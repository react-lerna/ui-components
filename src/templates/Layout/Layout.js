import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Header from '../../organisms/Header'
import Footer from '../../organisms/Footer'

export const StyledLayout = styled.div`
  width: 100%;
`

class Layout extends Component {
  render() {
    const { children } = this.props
    return (
      <StyledLayout>
        <Header/>
        {children}
        <Footer/>
      </StyledLayout>
    )
  }
}

Layout.propTypes = {
  content: PropTypes.shape(),
}
Layout.defaultProp = {
  content: {},
}

export default Layout
