import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './Signup'
import Signin from './Signin'
import Success from './Success'
import Users from './Users'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/success" element={<Success />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </Router>
  );
}

export default App;