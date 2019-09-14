import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { width, color, space } from 'styled-system'

export const StyledButton = styled.button`
  ${width};
  ${color};
  ${space};
  display: block;
  border-radius: 10px;
  border: 1px solid ${props => props.theme.colors.primary.main};
  padding: 6px 12px;
  color: ${props => !props.color && props.theme.colors.secondary.dark};
  background-color: transparent;
  ${props =>
  !props.secondary &&
  css`
    background-color: ${props => props.theme.colors.primary.main};
  `}
  ${props =>
  !props.disabled ?
    css`
      &:hover {
        background-color: ${props => props.theme.colors.primary.light};
      },
    `
    :
    css`
      background-color: ${props => props.theme.colors.grey.light};
      border-color: ${props => props.theme.colors.grey.main};
    `
  }
`

class Button extends Component {
  render() {
    return <StyledButton {...this.props}>{this.props.label}</StyledButton>
  }
}

Button.defaultProp = {
  secondary: false,
}

export default Button
