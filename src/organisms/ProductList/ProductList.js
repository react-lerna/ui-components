import React, { Component } from 'react'
import styled from 'styled-components'

import ProductCard from '../../molecules/ProductCard'

export const StyledList = styled.div`
  width: 100%;
  display: flex;
`

class ProductList extends Component {
  render() {
    const { products } = this.props
    return (
      <StyledList>
        {products.map(product => <ProductCard {...product} />)}
      </StyledList>
    )
  }
}

ProductList.defaultProp = {
}

export default ProductList
