import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const SingleColumn = styled.div`
  width: 100%;
  border: 1px solid red;
`
export const DualColumn = styled.div`
  width: 100%;
  border: 1px solid blue;
  display: flex;
  & > div {
    width: 50%;
  }
`

class Grid extends Component {
  render() {
    const { children, columns } = this.props
    let wrapper
    switch (columns) {
      case 1:
        wrapper = <SingleColumn>{children}</SingleColumn>
        break;
      case 2:
        wrapper = <DualColumn><div>{children[0]}</div><div>{children[1]}</div></DualColumn>
        break;
    }
    return wrapper
  }
}

Grid.propTypes = {
}
Grid.defaultProp = {
}

export default Grid
