import React from 'react';
import './App.css';
import Navigation from "./Components/Navigation/Navigation";
import {Container} from "reactstrap";
import {Route, Switch} from "react-router";
import ContactCreator from "./Components/ContactCreator/ContactCreator";
import Contacts from "./Components/Contacts/Contacts";
import Edit from "./Components/Edit/Edit";

function App() {
  return (
    <div>
      <Navigation/>
      <Container>
        <Switch>
            <Route path='/' exact component={Contacts} />
            <Route path='/edit/:id' component={Edit} />
            <Route path='/new-' component={ContactCreator} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
