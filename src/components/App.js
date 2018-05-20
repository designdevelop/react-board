import React, { Component } from 'react';
import '../css/login.css';
import '../css/reset.css';
import '../css/responsive.css';
import Frame from './main_frame.js';



class App extends Component {
  render() {
    return (
      <div className="App">
      	<Frame children={this.props.children}/>
      </div>
    );
  }
}

export default App;
