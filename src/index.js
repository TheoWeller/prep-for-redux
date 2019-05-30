import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './logo.svg';
import './App.css';

//moved description method to Header

//moved state to App
//moved increment to App
//moved decrement to app

//pass increment & decrement to Counter as callbacks
//pass state to Header & render

class App extends Component {
  state = { count: 0 };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    console.log("STATE", this.state.count);
    return (
      <div className="App">
        <Header state={this.state}/>
        <Counter increment={this.increment} decrement={this.decrement} count={this.state.count}/>
      </div>
    );
  }
}

class Header extends Component {
  renderDescription = (state) => {
    const remainder = state.count % 5;
    const upToNext = 5 - remainder;
    return `The current count is less than ${state.count + upToNext}`;
  };

  render() {
    console.log("COUNTER PROPS", this.props);
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">{this.renderDescription(this.props.state)}</h1>
      </header>
    );
  }
}

class Counter extends Component {

  render() {
    return (
      <div className="Counter">
        <h1>{this.props.count}</h1>
        <button onClick={this.props.decrement}> - </button>
        <button onClick={this.props.increment}> + </button>
        <h3></h3>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
