import React from 'react';
import './App.css';
import Query from "./Components/QueryComponent/Query";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavbarComponent/Navbar";
import Table from "./Components/TableComponent/Table";

const App: React.FC = () => {
  return (
    <div className="App">

        <Router>
            <Switch>
                <Route exact path='/' component={Table} />
                <Route path='/query' component={Query} />
            </Switch>
        </Router>
        <NavBar/>
        <Query/>
    </div>
  );
}

export default App;
