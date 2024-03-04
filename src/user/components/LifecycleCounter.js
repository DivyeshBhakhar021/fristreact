import React, { Component } from 'react'

export default class LifecycleCounter extends Component {

    componentDidUpdate(props,state){
        if(props.number !== this.props.number){
            console.log("component Update",props.number);
        }
    }
  render() {
    return (
      <>
      <div>LifecycleCounter</div>
      <h1>{this.props.count}</h1>
      </>
    )
  }
}
