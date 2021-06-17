import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import "./App.css";
import Container from '@material-ui/core/Container';

//Components
import Navigation from "./components/navbar";
import Footer from "./components/footer";
//Pages
import Home from "./page/Home";
import About from "./page/About";
function App() {
  return (
    <div>
    <Router>
    <Navigation />
     <Container className="App">
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      </Switch>
      <Footer />
     </Container>
    </Router>
    </div>
  );
}

export default App;
