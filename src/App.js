import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faKey , faEye} from '@fortawesome/free-solid-svg-icons'

import {BrowserRouter as Router, Routes, Route, NavLink} from "react-router-dom";
import './App.css'
import Login from './Login'
import Register from './Register'
import Verified from './Verified'
import ResetPassword from './ResetPassword'
import MainPage from './MainPage'
import Otp from './Otp'
import Recaptcha from './components/recaptcha/Recaptcha'

library.add(faUser, faKey , faEye)
const App = () => {
  return (
    <Router>
      
        
        
        <NavLink to="/Verified"></NavLink>
        
        <NavLink to="/MainPage"></NavLink>

        <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/verified" element={<Verified/>}/>
        <Route exact path="/resetpassword" element={<ResetPassword/>}/>
        <Route exact path="/mainpage" element={<MainPage/>}/>
        <Route exact path="/otp" element={<Otp/>}/>
        <Route exact path="/recaptcha" element={<Recaptcha/>}/>
        
        
       
      </Routes>
    </Router>
  )
  
}

export default App