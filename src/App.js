import React from 'react';
import Navbar from './Component/Navbar1';
import LoginUser from './Component/LoginUser';

import RegisterUser from './Component/RegisterUser';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import PeriodTracker from './Component/PeriodTracker';
import Footer from './Component/Footer';
import Analyser from './Component/Analyser';
import SelfCheck from './Component/SelfCheck';

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" component={Home} />
          <Route exact path="/nav" component={Navbar} />
          <Route path="/login" element={<LoginUser />} />
          <Route path="/Register" element={<RegisterUser />} />
          <Route path="/PeriodTracker" element={<PeriodTracker/>} />
          <Route path="/analyser" element={<Analyser/>} />
          <Route path="/selfcheck" element={<SelfCheck/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

function Home() {
  return (
    <>
      <h1>Welcome to my website!</h1>
      <p>Here you can find information about my projects and interests.</p>
    </>
  );
}

export default App;
