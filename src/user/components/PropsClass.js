import React, { Component } from 'react'

export default class PropsClass extends Component {
  render() {
    return (
      <p>PropsClass {this.props.data}</p>
    )
  }
}
