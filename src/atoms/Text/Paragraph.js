import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { fontSize } from 'styled-system'

const StyledText= styled.p`
  ${fontSize}
  color: ${props => props.theme.colors.grey.main};
`

const types = {
  default: {
    tag: "p",
    size: 2,
  },
  quote: {
    tag: "q",
    size: 2,
  },
  small: {
    tag: "small",
    size: 1,
  },
}

 const Paragraph = ({ type = 'default', text }) => (
  <StyledText as={ types[type].tag } fontSize={types[type].size}>
    {text}
  </StyledText>
)

Paragraph.propTypes = {
  text: PropTypes.string.isRequired,
  type:  PropTypes.oneOf(['default', 'quote', 'small']),
  variant: PropTypes.string,
}

Paragraph.defaultProps = {
  type: 'default',
  variant: 'primary',
}

export default Paragraph
