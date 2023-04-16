import React from 'react'
import "./navbar.css"
//import logo from 'src/Components/icon.png';

function Header() {
  return (
    <header className="header-area header-sticky" style={{ background: 'white' }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              {/* ***** Logo Start ***** */}
              <a href="#" className="logo"><img src="#"width="50" height="50" alt="B-Care"/></a>
              {/* ***** Logo End ***** */}
              {/* ***** Menu Start ***** */}
              <ul className="nav">
                <li className="scroll-to-section"><a href="/" className="active">Home</a></li>
                <li className="scroll-to-section"><a href="#about">About</a></li>
                <li className="submenu">
                  <a href="javascript:;">Features</a>
                  <ul>
                    <li><a href="consult-doc.html">Consult a Doc</a></li>
                    <li><a href="/analyser">Estimate Cancer</a></li>
                    <li><a href="/PeriodTracker">Track Your Periods</a></li>
                    <li><a href="/SelfCheck">Check Yourself</a></li>
                  </ul>
                </li>
                <li className="scroll-to-section"><a href="#future">Future Plan</a></li>
                <li className="scroll-to-section"><a href="#frequently-question">Breast Exam</a></li>
                <li className="scroll-to-section"><a href="/login">Login/Signup</a></li>
                <li className="scroll-to-section"><a href="#contact-us">Contact Us</a></li>
              </ul>
              {/* ***** Menu End ***** */}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
