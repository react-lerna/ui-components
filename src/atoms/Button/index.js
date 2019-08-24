import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledButton = styled.button`
  display: inline-block;
  color: purple;
`

class Button extends Component {
  render() {
    const { title } = this.props
    return (
      <StyledButton>
        {title}
      </StyledButton>
    )
  }
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
}

Button.defaultProps = {
}

export default Button
