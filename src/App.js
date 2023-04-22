import React from 'react';
import Navbar from './Component/Navbar1';
import LoginUser from './Component/LoginUser';

import RegisterUser from './Component/RegisterUser';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import PeriodTracker from './Component/PeriodTracker';
import Footer from './Component/Footer';
import Analyser from './Component/Analyser';
import SelfCheck from './Component/SelfCheck';
import  Home from './Component/Home';
import UserPage from './Component/UserPage';

function App() {
  return (
    <>
    {/* <UserPage/> */}
    
       {/* <Home /> */}
       {/* <Navbar /> */}
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/user" element={<UserPage />} />
          <Route path="/login" element={<LoginUser />} />
          <Route path="/Register" element={<RegisterUser />} />
          <Route path="/PeriodTracker" element={<PeriodTracker/>} />
          <Route path="/analyser" element={<Analyser/>} />
          <Route path="/selfcheck" element={<SelfCheck/>} />
        </Routes>
      </BrowserRouter>
      {/* <Footer/> */}
    </>
  );
}

 

export default App;
