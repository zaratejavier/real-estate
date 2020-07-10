import React from "react";
import "./App.css";
import { Container } from "semantic-ui-react";
import Navbar from "./Components/NavBar";
import { Switch, Route } from "react-router-dom";
import Available from "./Screens/Available/Available";
import Cities from "./Screens/Cities/Cities";
import FindHome from "./Screens/FindHome/FindHome";
import CityCost from "./Screens/CItyCost/CityCost";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Switch>
          <Route exact path="/" component={() => <h1>Home</h1>} />
          <Route exact path="/available" component={Available} />
          <Route exact path="/cities" component={Cities} />
          <Route exact path="/city_cost" component={CityCost} />
          <Route exact path="/find_home" component={FindHome} /> 
   
          {/* <Route exact path="/available" component={Available} /> */}
          
          
        </Switch>
      </Container>
    </>
  );
}

export default App;