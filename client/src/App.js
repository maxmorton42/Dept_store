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
import styled from 'styled-components';

const App = () => (
  <>
  <Navbar />
  <AppContainer>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/departments" component={Departments} />
      <Route exact path='/departments/new' component={DepartmentForm} />
      <Route exact path="/departments/:id" component={DepartmentView} />
      <Route exact path="/departments/:id/new-item" component={ItemForm} />
      <Route component={NoMatch} />
      </Switch>
  </AppContainer>
  </>
)

const AppContainer = styled.div`
margin: 0;
width: 100%;
height: 100vh;
font-family: "Exo", sans-serif;
color: #fff;
background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
background-size: 400% 400%;
animation: gradientBG 15s ease infinite;

@keyframes gradientBG {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
`;




export default App;
