import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, text } from '@storybook/addon-knobs'

import Button from '.'
import markdownNotes from './README.md'

const customMock1 = {
  label: 'Primary Button with white text color',
  color: '#fff',
}
const customMock2 = {
  label: 'Secondary Button with primary text color',
  secondary: true,
  color: 'primary.dark',
}

storiesOf('Atoms|Button', module)
  .add('As Button', () => (
    <Button
      label={text('Label', 'Sample Label')}
      color={text('Color', '')}
      secondary={boolean('Secondary', false)}
      disabled={boolean('Disabled', false)}
    />
  ), {
    notes: { markdown: markdownNotes },
  })
  .add('Mix', () => (
    <Fragment>
      <Button {...customMock1} />
      <Button {...customMock2} />
    </Fragment>
  ))
