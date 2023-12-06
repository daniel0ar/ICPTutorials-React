import React from "react"
import logo from "./assets/dfinity.svg"
/*
 * Connect2ic provides essential utilities for IC app development
 */
import { createClient } from "@connect2ic/core"
import { defaultProviders, InternetIdentity } from "@connect2ic/core/providers"
import { ConnectButton, ConnectDialog, Connect2ICProvider, useConnect } from "@connect2ic/react"
import "@connect2ic/core/style.css"
/*
 * Import canister definitions like this:
 */
import * as counter from "../.dfx/local/canisters/counter"
/*
 * Some examples to get you started
 */
import { Counter } from "./components/Counter"
import { Transfer } from "./components/Transfer"
import { Profile } from "./components/Profile"
import { Backend } from "./components/Backend"

function App() {

  const { principal } = useConnect();

  return (
    <div className="App">

      <div className="auth-section">
        <ConnectButton />
      </div>
      <ConnectDialog />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="slogan">
          ID is: {principal}
        </p>
        <p className="twitter">by <a href="https://twitter.com/miamaruq">@miamaruq</a></p>
      </header>

      <p className="examples-title">
        Examples
      </p>
      <div className="examples">
        <Backend />
        <Counter />
        <Profile />
        <Transfer />
      </div>

    </div>
  )
}

const client = createClient({
  canisters: {
    counter,
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
    dev: import.meta.env.DEV,
  },
})

export default () => (
  <Connect2ICProvider client={client}>
    <App />
  </Connect2ICProvider>
)
