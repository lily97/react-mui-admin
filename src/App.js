// import './App.css';
// import Home from './views/home'
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
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Layout from '../src/components/Layout'
import './App.css';



const Home = () => {
  return (
    <div>
      <h2>Home</h2>
    </div>
  )
}

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Product = () => (
  <div>
    <h2>Product</h2>
  </div>
)


console.log(Home);
class App extends Component {
  render() {
    return (
      // <BrowserRouter>
      //   <div className="App">
      //     <Link to="/">Home</Link>
      //     <Link to="/About">About</Link>
      //     <Link to="/Product">Product</Link>
      //     <hr />
      //     <Route path="/" exact component={Home}></Route>
      //     <Route path="/about" component={About}></Route>
      //     <Route path="/product" component={Product}></Route>
      //   </div>
      // </BrowserRouter>
      <Layout></Layout>
    );
  }
}

export default App;