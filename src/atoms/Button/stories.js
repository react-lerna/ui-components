import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import Button from '.'

const mock1 = {
  title: 'Button',
  fontSize: [2, 3, 4],
}
const mock2 = {
  title: 'Secondary Button',
  secondary: true,
}
const mock3 = {
  title: 'Disabled Button',
  disabled: true,
}
const mock4 = {
  title: 'Primary Button with white text color',
  color: '#fff',
}
const mock5 = {
  title: 'Secondary Button with primary text color',
  secondary: true,
  color: 'primary.dark',
}

storiesOf('Atoms|Button', module)
  .add('Primary', () => <Button {...mock1} />)
  .add('Secondary', () => <Button {...mock2} />)
  .add('Disabled', () => <Button {...mock3} />)
  .add('Mix', () => (
    <Fragment>
      <Button {...mock4} />
      <Button {...mock5} />
    </Fragment>
  ))
