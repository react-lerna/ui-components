import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import Button from '.'

storiesOf('Atoms|Button', module)
  .add('Primary', () => (
    <Button fontSize={[2, 3, 4]}>
      Button
    </Button>
  ))
  .add('Secondary', () => <Button secondary>Secondary Button</Button>)
  .add('Disabled', () => <Button disabled>Disabled Button</Button>)
  .add('Mix', () => (
    <Fragment>
      <Button color="#fff">Primary Button with white text color</Button>
      <Button secondary color="primary.dark">
        Secondary Button with primary text color
      </Button>
    </Fragment>
  ))
