import React, { Component } from 'react'
import styled from 'styled-components'

import { Button, Heading, Paragraph } from '../../atoms'

export const StyledCard = styled.div`
  border: 1px solid black;
  padding: 8px;
`

class ProductCard extends Component {
  render() {
    const { title, price, currency } = this.props
    return (
      <StyledCard>
        <Heading title={title} level={3} />
        <Paragraph text={currency + ' ' + price} />
        <Button label={'Add to cart'} />
      </StyledCard>
    )
  }
}

ProductCard.defaultProp = {
}

export default ProductCard
