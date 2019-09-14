import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const StyledLink = styled.a`
  display: block;
  color: ${props => !props.color && props.theme.colors.secondary.dark};
`

class Link extends Component {
  render() {
    const { label, url, isExternal } = this.props
    return (
      <StyledLink {...this.props} target={isExternal && '_blank'} href={url}>
        {label}
      </StyledLink>
    )
  }
}

Link.propTypes = {
  label: PropTypes.string,
  secondary: PropTypes.bool,
  url: PropTypes.string,
  isExternal: PropTypes.bool,
}

Link.defaultProps = {
  secondary: false,
  url: '#',
}

export default Link
