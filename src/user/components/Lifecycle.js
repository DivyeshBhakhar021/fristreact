import React, { Component } from 'react'
import LifecycleCounter from './LifecycleCounter'
export default class Lifecycle extends Component {
   
    constructor(props) {
        console.log("Constructor Called");
        super(props);
        this.state ={
            count:0
        }
        
    }
 

    incremnet(){
        this.setState({count:this.state.count +1})
    }
    
  render() {
    console.log("inside render");
    return (
      <>
      <div>Lifecycle</div>
      <p>{this.state.count}</p>
        <button onClick={()=>{this.incremnet()}}>Click ME</button>
        <LifecycleCounter  number={this.state.count}/>
      </>
    )
  }
}




// export default class Lifecycle extends Component {
   
//     constructor(props) {
//         console.log("Constructor Called");
//         super(props);
//         this.state ={
//             name:"hello"
//         }
        
//     }

//     static getDerivedStateFromProps(props , state){
//         console.log("getDerivedStateFromProps");
//         // console.log("props",props);
//         // console.log("state",state);
//         return null;
//     }

//     componentDidMount(){
//         console.log("inside component");
//         this.setState({
//             name:"abc"
//         })
//     }
    
//   render() {
//     console.log("inside render");
//     return (
//       <>
//       <div>Lifecycle</div>
//       <p>my name is {this.state.name}</p>
//       </>
//     )
//   }
// }