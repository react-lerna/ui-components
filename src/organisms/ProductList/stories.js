import React from 'react'
import { storiesOf } from '@storybook/react'
import ProductList from '.'

const mock = {
  products: [
    {
      title: 'Westpack Backpack 1',
      price: '79',
      currency: '€',
      images: {
        cover: 'http://via.placeholder.com/200x300',
        gallery: ['http://via.placeholder.com/800x600', 'https://placebear.com/800/600', 'https://picsum.photos/800/600'],
      },
    },
    {
      title: 'Westpack Backpack 2',
      price: '79',
      currency: '€',
      images: {
        cover: 'http://via.placeholder.com/200x300',
        gallery: ['http://via.placeholder.com/800x600', 'https://placebear.com/800/600', 'https://picsum.photos/800/600'],
      },
    },
    {
      title: 'Westpack Backpack 3',
      price: '79',
      currency: '€',
      images: {
        cover: 'http://via.placeholder.com/200x300',
        gallery: ['http://via.placeholder.com/800x600', 'https://placebear.com/800/600', 'https://picsum.photos/800/600'],
      },
    },
  ],
}

storiesOf('Organisms|Product List', module).add('Primary', () => <ProductList {...mock} />)
