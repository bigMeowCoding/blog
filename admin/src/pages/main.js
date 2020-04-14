import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Login from './login/login'
import AdminIndex from "./index";

function Main() {
    return (
        <Router>
            <Route path="/login/" exact component={Login}/>
            <Route path="/index/" exact component={AdminIndex}/>
        </Router>
    )
}

export default Main