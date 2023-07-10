// import './App.css';
// import Index from './pages/home/index'
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Index></Index>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react';
// import { HashRouter as Router, Link, Route } from 'react-router-dom';
import Layout from '../src/components/Layout'
import './App.css';


// function Home() {
//   return (
//     <div>
//       <h2>Home</h2>
//     </div>
//   )
// }

// const About = () => (
//   <div>
//     <svg data-testid="DeleteIcon"></svg>
//     <h2>About</h2>
//   </div>
// )

// const Product = () => (
//   <div>
//     <h2>Product</h2>
//   </div>
// )

class App extends Component {
  render() {
    return (
      // <Router>
      //   <div className="App">
      //     <Link to="/">Home</Link>
      //     <Link to="/About">About</Link>
      //     <Link to="/Product">Product</Link>
      //     <hr />
      //     <Route path="/" exact component={Home}></Route>
      //     <Route path="/about" component={About}></Route>
      //     <Route path="/product" component={Product}></Route>
      //   </div>
      // </Router>
      <Layout></Layout>
    );
  }
}

export default App;