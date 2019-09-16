import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Atoms, Molecules, Organisms, Templates } from '../../index'

class ComponentRenderer extends Component {
  render() {
    const components = { ...Atoms, ...Molecules, ...Organisms, ...Templates }
    const { componentType, props, componentChildren } = this.props
    console.log(componentChildren)
    return (
      <Fragment>
        {React.createElement(
          components[componentType],
          {...props},
          componentChildren && componentChildren.map(childComponent => {
            return <ComponentRenderer {...childComponent}/>
          })
        )}
      </Fragment>
    )
  }
}

ComponentRenderer.propTypes = {}

export default ComponentRenderer
