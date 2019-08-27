import React from 'react'
import { storiesOf } from '@storybook/react'

import Heading from './Heading'
import Paragraph from './Paragraph'

const Heading1Data = {
  level: 1,
  title: 'Heading exemple text',
}
const Heading2Data = {
  level: 2,
  title: 'Heading exemple text',
}
const Heading3Data = {
  level: 3,
  title: 'Heading exemple text',
}
const Heading4Data = {
  level: 4,
  title: 'Heading exemple text',
}
const Heading5Data = {
  level: 5,
  title: 'Heading exemple text',
}

const ParagraphData = {
  text: 'Paragraph exemple',
}
const QuoteData = {
  text: 'Quote exemple',
  type: 'quote',
}
const SmallTextData = {
  text: 'Small text exemple',
  type: 'small',
}

storiesOf('Atoms|Text')
  .add('Heading 1', () => <Heading {...Heading1Data} />)
  .add('Heading 2', () => <Heading {...Heading2Data} />)
  .add('Heading 3', () => <Heading {...Heading3Data} />)
  .add('Heading 4', () => <Heading {...Heading4Data} />)
  .add('Heading 5', () => <Heading {...Heading5Data} />)
  .add('Paragraph', () => <Paragraph {...ParagraphData} />)
  .add('Quote', () => <Paragraph {...QuoteData} />)
  .add('Small', () => <Paragraph {...SmallTextData} />)
