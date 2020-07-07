import React from "react";
import "./App.css";
import { Container } from "semantic-ui-react";
import Navbar from "./Components/Navbar";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Switch>
          <Route exact path="/" component={() => <h1>Home</h1>} />
          <Route exact path="/city_cost" component={() => <h1>city_cost</h1>} />
          {/* 
          <Route exact path="/available" component={Available} />
          <Route exact path="/cities" component={Cities} />
          <Route exact path="/find_home" component={FindHome} /> */}
        </Switch>
      </Container>
    </>
  );
}

export default App;