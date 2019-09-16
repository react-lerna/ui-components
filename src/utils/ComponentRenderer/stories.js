import React from 'react'
import { storiesOf } from '@storybook/react'

import { ComponentRenderer } from '.'
// import markdownNotes from './README.md'

const mock = {
  componentType: 'Grid',
  props: {
    columns: 2
  },
  componentChildren: [
    {
      componentType: 'Button',
      props: {
        label: 'inner button 1',
      },
    },
    {
      componentType: 'Grid',
      props: {
        columns: 1
      },
      componentChildren: [
        {
          componentType: 'Button',
          props: {
            label: 'inner button 2',
            secondary: true,
          },
        },
        {
          componentType: 'Button',
          props: {
            label: 'inner button 3',
          },
        },
      ],
    },
  ],
}

storiesOf('Utils', module)
  .add('Component Renderer', () => (
    <ComponentRenderer {...mock} />
  ))
