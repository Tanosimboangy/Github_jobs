import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import { ContextProvider } from './src/context'
import App from "./src/components/App";

ReactDOM.render(
    <ContextProvider>
        <Router>
            <App />
        </Router>
    </ContextProvider>
, document.getElementById("root"));