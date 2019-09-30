import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Table from "./Components/TableComponent/Table";
import 'react-toastify/dist/ReactToastify.css'
import {ToastContainer} from "react-toastify";
import Pythagorean from "./Components/PythagoreanComponent/Pythagorean";


const App: React.FC = () => {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route exact path='/' component={Table} />
                <Route path='/difference-calculator' component={Table} />
                <Route path='/pythagorean-triplet' component={Pythagorean} />
            </Switch>
        </Router>
        <ToastContainer />
    </div>
  );
}

export default App;
