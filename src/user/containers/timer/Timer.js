import React, { Component } from 'react'
import stlye from './Timer.module.css'

export default class Timer extends Component {
    //1 .it is used to intialize state value or binding methos
    constructor(props) {
        console.log("Constructor Called");
        super(props);

        this.state = {
            time: new Date(),
        }
    }


    tick = () =>{
        console.log("tick");
        this.setState({ 
            time: new Date()
         })
    }

    //3 it is called after mounting it is mostly uswd to get data froms sevrer
    componentDidMount = () => {
        console.log("3 ,component Did Mount");
        this.timeRef = setInterval(this.tick,1000)
    }


    //4  it is called before the component is mounted and un

    componentDidUpdate =  (prevProps, prevState) => {
        if(this.state.time !== prevState.time){
            console.log("4 componentDidUpdate");
        }
    }

    //5  It is called just before removing the component from DOM
    componentWillUnmount = () =>{
        console.log("5, componentWillUnmount");
        clearInterval(this.timeRef);
    }

    //2 it used disapy JSX inDOM it is called whem any state or props are chaned
    render() {
        console.log("2 render");
        return (
            <div >
                <h2>Timer</h2>
                <h3>{this.state.time.toLocaleTimeString()}</h3>
            </div>
        )
    }
}
