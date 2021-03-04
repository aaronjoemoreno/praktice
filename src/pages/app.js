import React from "react"
import { Router } from "@reach/router"
import PrivateRoute from "../components/privateRoute"
import Dashboard from '../components/dashboard'
import IndexPage from './index'
import About from './about'
import Praktices from './praktices'
import Contact from './contact'
import Members from './members'

const App = () => (
    <Router>
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <IndexPage path="/" />
      <About path="/about"/>
      <Praktices path="/praktices" />
      <Contact path="/contact" />
      <Members path="/members" />
    </Router>
)

export default App