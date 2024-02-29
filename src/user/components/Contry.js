import React, { Component } from 'react'

export default class Contry extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      name: "India",
      timezone: "GMT + 5:30"
    }
  }

  Contrychng = () => {
  console.log("abc");
    this.setState ({  
      name: "USA",
      timezone: "GMT -8"
    })
  }


  render() {
    return (
      <>
      <p>Contry</p>
      <h1>My Contry is {this.state.name}</h1>
      <h1>My timezone is {this.state.timezone} </h1>
      <button onClick={this.Contrychng}>Contrychng</button>
      </>
      
    )
  }
}
