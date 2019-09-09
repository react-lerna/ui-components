import React from 'react'
import 'jest-styled-components'

import { renderWithTheme } from '../../utils/renderWithTheme'
import Button from './Button'

const mock = {
  label: 'Secondary Button with primary text color',
  secondary: true,
  color: 'primary.dark',
}

test('Button display correctly', () => {
  let tree = renderWithTheme(<Button {...mock} />).toJSON()
  expect(tree).toMatchSnapshot()
})
