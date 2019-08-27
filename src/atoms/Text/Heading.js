import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { fontSize } from 'styled-system'

const StyledHeading = styled.h5`
  ${fontSize}
  color: ${props => props.theme.colors.grey.main};
`

const Heading = ({ level, title }) => (
  <StyledHeading as={`h${level}`}>
    {title}
  </StyledHeading>
)

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  level:  PropTypes.oneOf(1, 2, 3, 4, 5),
  variant: PropTypes.string,
}

Heading.defaultTypes = {
  level: 5,
  variant: 'primary',
}

export default Heading
