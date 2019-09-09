import { configure, addDecorator } from '@storybook/react'
import { withThemesProvider } from 'storybook-addon-styled-component-theme'
import { jsxDecorator } from 'storybook-addon-jsx'
import centered from '@storybook/addon-centered'
import { withKnobs } from '@storybook/addon-knobs'

import mainTheme from '../src/theme'
import alternativeTheme from '../src/theme-alt'

const theme = require.context('../src', true, /theme.stories\.js$/)
const atoms = require.context('../src/atoms', true, /stories\.js$/)
const molecules = require.context('../src/molecules', true, /stories\.js$/)
const organisms = require.context('../src/organisms', true, /stories\.js$/)

const reqs = [
  theme,
  atoms,
  molecules,
  organisms,
]

function loadStories() {
  reqs.map(req => req.keys().forEach(filename => req(filename)))
}

configure(loadStories, module)

const themes = [ mainTheme, alternativeTheme ]
addDecorator(withThemesProvider(themes))
addDecorator(jsxDecorator)
addDecorator(centered)
addDecorator(withKnobs)
