import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Content } from './components/content';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Read } from './components/read';
import { Create } from './components/create';
import { Edit } from './components/edit';
 {/* import controls for router-dom*/ }

class App extends Component {
  render() {
    {/* function changed to the class, render method added */ }
    return (
      <Router>
        <div className="App">

          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
          </Navbar>

          <br />
          <Switch>

            <Route path='/' component={Content} exact />
            <Route path='/create' component={Create} exact /> {/* exact matches exact path */}
            <Route path='/read' component={Read} />
            <Route path='/edit/:id' component={Edit}></Route> {/* added edit component */}
          </Switch>


        </div>
      </Router>
    );
  }
}

export default App;
