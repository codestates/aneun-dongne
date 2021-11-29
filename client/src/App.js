import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hello : '',
    }
  }

  componentDidMount() {
    this._getHello();
  }

  _getHello = async() => {
    const res = await axios.get("/api");
    this.setState({ hello : res.data.hello })
  }

  render() {
    return(
      <div className='App'>
        <h3><u> {this.state.hello} </u> Hi! </h3>
      </div>
    )
  }
}

export default App;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
