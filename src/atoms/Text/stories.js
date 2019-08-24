import React from 'react'
import { storiesOf } from '@storybook/react'

import Headings from './Headings'
import Paragraph from './Paragraph'

const data = {
  title: 'Heading exemple text',
}

storiesOf('Atoms/Text')
  .add('Headings', () => <Headings {...data} />)
  .add('Paragraph', () => <Paragraph {...data} />)
