import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
/*
 * Connect2ic provides essential utilities for IC app development
 */
import { createClient } from "@connect2ic/core"
import { InternetIdentity } from "@connect2ic/core/providers"
import { Connect2ICProvider } from "@connect2ic/react"
import "@connect2ic/core/style.css"
/*
 * Import canister definitions like this:
 */
import * as backend from "../.dfx/local/canisters/backend"

import { Home } from "./pages/Home"
import { New } from "./pages/New"
import { IncomingPubs } from "./pages/IncomingPubs"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {

  return (
    <Router>
      <div className="App dark:bg-neutral-800 dark:text-white">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/nuevo" Component={New}></Route>
          <Route path="/incoming" Component={IncomingPubs}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  )
}

const client = createClient({
  canisters: {
    backend,
  },
  providers: [
    new InternetIdentity({
      dev: true,
      // The url for the providers frontend
      providerUrl: "http://localhost:4943/?canisterId=rdmx6-jaaaa-aaaaa-aaadq-cai",
    })
  ],
  globalProviderConfig: {
    /*
     * Disables dev mode in production
     * Should be enabled when using local canisters
     */
    dev: true,
  },
})

export default () => (
  <Connect2ICProvider client={client}>
    <App />
  </Connect2ICProvider>
)
