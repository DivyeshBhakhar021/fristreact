import React, { Component } from 'react'
import CityFun from './CityFun';

export default class City extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            city: 'ahmedabad',
            timezone: 'UTC+5:30'
        }
    }

    citychnag = () =>{
        console.log("abc");
        this.setState ({  
            city: "mumbai",
            timezone: "Uc+5:"
          })
    }

  render() {
    return (
      <>
      <p>City</p>
      <h1>My City Name is {this.props.countryName === "India" ? "Dehlie" : "New york"}</h1>
      <h1>My Time Zone is {this.state.timezone} </h1>
      {/* <h1>abc{this.props.countryName}</h1> */}

      <button onClick={this.citychnag}>Contry City</button>

    
      </>
    )
  }
}
