import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Departments from './components/Departments';
import DepartmentForm from './components/DepartmentForm';
import DepartmentView from './components/DepartmentView';
import ItemForm from "./components/ItemForm"
import Navbar from './components/Navbar';
import NoMatch from './components/NoMatch';
import { Switch, Route, } from 'react-router-dom';
import { Container, } from 'semantic-ui-react';

const App = () => (
  <>
  <Navbar />
  <Container>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/departments" component={Departments} />
      <Route exact path='/departments/new' component={DepartmentForm} />
      <Route exact path="/departments/:id" component={DepartmentView} />
      <Route exact path="/departments/:id/new-item" component={ItemForm} />
      <Route component={NoMatch} />
      </Switch>
  </Container>
  </>
)



export default App;
