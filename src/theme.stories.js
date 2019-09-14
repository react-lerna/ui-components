import React  from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import centered from '@storybook/addon-centered/react'

const TwoColumns = styled.div`
  display: flex;
`
const ColorBox = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid black;
  background-color: ${props => (props.color && props.variation && props.theme.colors[props.color][props.variation])};
  display: flex;
`

storiesOf('Design System', module)
  .addDecorator(centered)
  .add('Colors', () => (
  <TwoColumns>
    <div>
      <h1>variations</h1>
      <ColorBox>dark</ColorBox>
      <ColorBox>main</ColorBox>
      <ColorBox>light</ColorBox>
    </div>
    <div>
      <h1>primary</h1>
      <ColorBox color={'primary'} variation={'dark'} />
      <ColorBox color={'primary'} variation={'main'} />
      <ColorBox color={'primary'} variation={'light'} />
    </div>
    <div>
      <h1>secondary</h1>
      <ColorBox color={'secondary'} variation={'dark'} />
      <ColorBox color={'secondary'} variation={'main'} />
      <ColorBox color={'secondary'} variation={'light'} />
    </div>
  </TwoColumns>
))
