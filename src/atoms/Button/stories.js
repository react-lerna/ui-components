import React from 'react'
import { storiesOf } from '@storybook/react'

import Button from '.'

const data = {
  title: 'Button exemple text',
}

storiesOf('Atoms').add('Button', () => <Button {...data} />)
