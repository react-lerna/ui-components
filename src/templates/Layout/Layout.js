import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Header from '../../organisms/Header'

export const StyledLayout = styled.div`
  width: 100%;
`

class Content extends React.Component {
  render() {
    return <h1>CONTENT PLACEHOLDER</h1>
  }
}
class Footer extends React.Component {
  render() {
    return <h1>FOOTER PLACEHOLDER</h1>
  }
}

class Layout extends Component {
  render() {
    const { content } = this.props
    return (
      <StyledLayout>
        <Header/>
        <Content children={content}/>
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
