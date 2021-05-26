import React, { useCallback, useEffect, useState } from "react"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import { Route, Switch, Redirect } from "react-router-dom"

import SideNav from "./frontend/SideNav"
import Home from "./frontend/Home"
import Profile from "./frontend/profile/Profile"
import Contract from "./frontend/contract/Contract"

import logo from "./assets/logo.svg"
import "./App.css"
import { counter, profile, contract } from "./agent"

function App() {
  const [count, setCount] = useState()

  const refreshCounter = useCallback(async () => {
    const res: any = await counter.getValue()
    setCount(res.toString())
  }, [])

  useEffect(() => {
    refreshCounter()
  }, [])

  const onIncrementClick = useCallback(async () => {
    await counter.increment()
    refreshCounter()
  }, [counter])

  return (
    <div className="App">
      <Container>
        <Row>
          <Col sm={2}>
            <SideNav items={[{ title: "Home", path: "/home" }]} />
            <SideNav items={[{ title: "Profile", path: "/profile" }]} />
            <SideNav items={[{ title: "Contract", path: "/contract" }]} />
          </Col>
          <Col sm={10}>
              <Switch>
                <Route path="/home" component={Home} />
                <Route path="/profile">
                  <Profile agent={profile}></Profile>
                </Route>
                <Route path="/contract">
                  <Contract agent={contract}></Contract>
                </Route>
                <Redirect from="/" exact to="/home" />
                <Redirect to="/not-found" />
              </Switch>
          </Col>
        </Row>
      </Container>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Internet Computer + Vite + React!</p>
        <p>
          <button className="demo-button" onClick={onIncrementClick}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://sdk.dfinity.org/docs/developers-guide/sdk-guide.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            IC SDK Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
