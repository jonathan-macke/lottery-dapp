import logo from './logo.svg';
import './App.css';
import Table from './Table'
import React from 'react';


const characters = [
  {
    name: 'Charlie',
    job: 'Janitor',
  },
  {
    name: 'Mac',
    job: 'Bouncer',
  },
  {
    name: 'Dee',
    job: 'Aspring actress',
  },
  {
    name: 'Dennis',
    job: 'Bartender',
  },
]


class ClockClass extends React.Component {

  constructor(props){
    super(props)
    this.state  = {date: new Date()}
  }

  render() {
    return(<div>It is {this.state.date.toLocaleTimeString()}</div>)
  }

  componentDidMount(){
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick(){
   this.setState( {date: new Date()});
  }
}


function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React

          
        </a>

        <Clock date={new Date()} />
        <ClockClass />
      </header>
    </div>
  );
}

export default App;
