'use strict'
import React, { Component, PropTypes } from 'react'

export class OptionalString extends Component {
  static get propTypes () {
    return {
      empty: PropTypes.string,
      value: PropTypes.any
    }
  }

  static get defaultProps () {
    return {
      empty: 'empty',
      value: false
    }
  }

  render () {
    if (this.props.value) {
      return <span>{this.props.value}</span>
    }

    return <span className='text-muted'>({this.props.empty})</span>
  }
}

export const ChildrenType = PropTypes.oneOfType([
  PropTypes.node,
  PropTypes.arrayOf(PropTypes.node)
])

export const FalsyType = PropTypes.oneOf([false, null, undefined, 0, ''])
