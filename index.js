import React from "react";
import ReactDOM from "react-dom";
import App from "./src/component/App";
import { BrowserRouter as Router } from 'react-router-dom';
import { ContextProvider } from './src/context'

ReactDOM.render(
    <ContextProvider>
        <Router>
            <App />
        </Router>
    </ContextProvider>
, document.getElementById("root"));