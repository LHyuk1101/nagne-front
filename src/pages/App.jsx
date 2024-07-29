import { useState } from 'react'

import '../App.css'
import {BrowserRouter} from "react-router-dom";
import Router from "../router/index.jsx";

function App() {

  return (
      <BrowserRouter basename="/">
        <Router />
      </BrowserRouter>
  )
}

export default App
