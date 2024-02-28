import React, { Component } from 'react';

class App extends Component {
  a = "Me I Hlep You Sir ??";
  b = 10 * 10;
  render() {
    return (
      <div>
        Hello  {this.a}<br></br>
        Multiply {this.b}
      </div>
    );
  }
}

export default App;