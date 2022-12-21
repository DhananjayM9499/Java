// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Old Monk <code>is greater than</code> everyone
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
/***************************************************************************************** */ //clock function

import React, { Component } from "react";
import Clock from "./Clock/Clock";
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="clock">
          <Clock />
        </div>
      </div>
    );
  }
}
export default App;
