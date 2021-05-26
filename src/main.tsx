import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css"
import App from "./App"

/**
 * @dfinity/agent requires this. Can be removed once it's fixed
 */
;(window as any).global = window

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root"),
)
