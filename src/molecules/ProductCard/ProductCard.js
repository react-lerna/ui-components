import React, { Component } from 'react'
import styled from 'styled-components'

import Atoms from '../../atoms'

export const StyledCard = styled.div`
  border: 1px solid black;
  padding: 8px;
`

class ProductCard extends Component {
  render() {
    const { title, price, currency } = this.props
    return (
      <StyledCard>
        <Atoms.Text.Heading title={title} level={3} />
        <Atoms.Text.Paragraph text={currency + ' ' + price} />
        <Atoms.Button label={'Add to cart'} />
      </StyledCard>
    )
  }
}

ProductCard.defaultProp = {
}

export default ProductCard
