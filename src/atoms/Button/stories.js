import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, text } from '@storybook/addon-knobs'
import centered from '@storybook/addon-centered/react'

import { Button, Link } from '.'
import markdownNotes from './README.md'


storiesOf('Atoms|Buttons', module)
  .addDecorator(centered)
  .add('Button', () => (
    <Button
      label={text('Label', 'Sample Label')}
      color={text('Color', '')}
      secondary={boolean('Secondary', false)}
      disabled={boolean('Disabled', false)}
    />
  ), {
    notes: { markdown: markdownNotes },
  })
  .add('Link', () => (
    <Link
      label={text('Label', 'Sample Label')}
      url={text('url', 'https://google.com')}
      isExternal={boolean('External Link', true)}
      color={text('Color', '')}
      secondary={boolean('Secondary', false)}
      disabled={boolean('Disabled', false)}
    />
  ))
