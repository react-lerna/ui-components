import { configure, addDecorator } from '@storybook/react'
import { withThemesProvider } from 'storybook-addon-styled-component-theme'
import { jsxDecorator } from 'storybook-addon-jsx'
import centered from '@storybook/addon-centered'

import mainTheme from '../src/theme'
import alternativeTheme from '../src/theme-alt'

const req = require.context('../src', true, /stories\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)

const themes = [ mainTheme, alternativeTheme ]
addDecorator(withThemesProvider(themes))
addDecorator(jsxDecorator)
addDecorator(centered)
