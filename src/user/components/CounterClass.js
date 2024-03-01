import React, { Component } from 'react'

export default class CounterClass extends Component {
    constructor(props) {
        super(props)
        this.state ={
            count:0
        
        }
    }
   
    countpuls = () =>{
        this.setState({ count: this.state.count + 1 });
    }

    countremvo = () =>{
        this.setState({ count: this.state.count - 1 });
    }

  render() {
    return (
        <>
      <div>CounterClass</div>
      <h1>Counter:-{this.state.count}</h1>
      <button onClick={this.countpuls} disabled={this.state.count < 5 ? false : true}>+</button>
      <button onClick={this.countremvo} disabled={this.state.count > 0 ? false : true} >-</button>
        </>


    )
  }
}
