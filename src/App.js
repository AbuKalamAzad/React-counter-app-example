import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      {
        id: 1,
        value: 0
      },
      {
        id: 2,
        value: 0
      },
      {
        id: 3,
        value: 0
      },
      {
        id: 4,
        value: 0
      }
    ]
  };

  constructor(props) {
    super(props);
    console.log("constructor()", this.props);
  }

  handeleDelete = counterId => {
    console.log("event handler called", counterId);
    const counters = this.state.counters.filter(
      counter => counter.id !== counterId
    );
    this.setState({ counters: counters });
  };

  handleReset = () => {
    
    const countReset = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters: countReset });
  };

  componentDidMount() {
    console.log("didMount()");
  }

  componentDidUpdate(prevProps,prevState){
    console.log('prevstate',prevState)
    console.log('prevProps',prevProps)
  }
  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  render() {
    console.log("render()");
    return (
      <div className="App">
        <NavBar
          totalcounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <div className="container">
          <Counters
            counters={this.state.counters}
            onIncrement={this.handleIncrement}
            onReset={this.handleReset}
            onDelete={this.handeleDelete}
          />
        </div>
      </div>
    );
  }
}

export default App;
