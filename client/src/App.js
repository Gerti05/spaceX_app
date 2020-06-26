import React from "react";
import logo from "./logo.png";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Launches from "./components/launches";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Launch from "./components/launch";

const client = new ApolloClient({
  uri: "/graphql"
});

const App = () => {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="container">
            <img
              src={logo}
              alt="SpaceX logo"
              style={{
                width: 300,
                display: "block",
                margin: "auto",
                marginTop: "10px"
              }}
            />
            <Route exact path="/" component={Launches} />
            <Route exact path="/launch/:flight_number" component={Launch} />
          </div>
        </Router>
      </ApolloProvider>
    );
}

export default App;
