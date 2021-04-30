import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthenticationProvider, DataProvider } from "./Context";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthenticationProvider>
        <DataProvider>
          <App />
        </DataProvider>
      </AuthenticationProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
