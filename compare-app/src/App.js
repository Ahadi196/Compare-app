import React from 'react';
import './App.css';



class App extends React.Component {
  constructor(){
    super();
    this.state ={
      timesClick: 0
    }
    this.incrementCounter = this.incrementCounter.bind(this);
  }
  incrementCounter(){


    console.log('Adding one to the Clicker')
    this.setState({
      timesClick: this.state.timesClick+1
    })
  }

  render() {
    return(
      <div className="App">
      <button onClick ={this.incrementCounter}>Click me!</button>
      <div>Times Clicked: {this.state.timesClick}</div>
    </div>
    )
    
};
}

export default App;
