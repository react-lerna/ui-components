import React from 'react'
import { storiesOf } from '@storybook/react'
import ProductCard from '.'

const mock1 = {
  title: 'Westpack Backpack',
  price: '79',
  currency: '€',
  images: {
    cover: 'http://via.placeholder.com/200x300',
    gallery: [
      'http://via.placeholder.com/800x600',
      'https://placebear.com/800/600',
      'https://picsum.photos/800/600',
    ],
  },
}

storiesOf('Molecules|Product Card', module)
  .add('Primary', () => <ProductCard {...mock1} />)
