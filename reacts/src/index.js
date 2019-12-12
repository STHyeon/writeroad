import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import { App, Login } from "./containers";
import * as serviceWorker from "./serviceWorker";
import { Route, BrowserRouter as Router } from "react-router-dom";

//redux
import { Provider } from "react-redux";
import { createStore } from "redux";

ReactDOM.render(
    <Router>
        <Route exact={true} path="/" component={App} />
        <Route path="/login" component={Login} />
    </Router>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
