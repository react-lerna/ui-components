import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledHeading = styled.h1`
  color: blue;
`

class Headings extends Component {
  render() {
    const { title } = this.props
    return (
      <StyledHeading>
        {title}
      </StyledHeading>
    )
  }
}

Headings.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Headings
