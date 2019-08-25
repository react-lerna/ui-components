import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledParagraph = styled.p`
  color: purple;
`

class Paragraph extends Component {
  render() {
    const { title } = this.props
    return (
      <StyledParagraph>
        {title}
      </StyledParagraph>
    )
  }
}

Paragraph.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Paragraph
