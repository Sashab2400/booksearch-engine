import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import { ApolloProvider } from "@apollo/client";
import { ApolloClient, InMemoryCache } from '@apollo/client';
//import ApolloClient from "apollo-boost";
import SearchBooks from './pages/SearchBooks.jsx';
import SavedBooks from './pages/SavedBooks.jsx';
import Navbar from './components/Navbar.jsx';

/*const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem("id_token");

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
  uri: "/graphql",
});*/

// Initialize Apollo Client
const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Navbar />
          <Switch>
            <Route exact path="/" component={SearchBooks} />
            <Route exact path="/saved" component={SavedBooks} />
            <Route render={() => <h1 className="display-2">Wrong page!</h1>} />
          </Switch>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;