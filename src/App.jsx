import React, { useState } from 'react';

import './App.css'; 
import Header from './Header.jsx'
import './Header.css'

import Footer from './Footer.jsx'
import './Footer.css'
import { Login } from './components/Login.jsx';
import { Signup } from './Signup.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


// import Home from './Home.jsx'

export const App = () => {
  const [inputCode, setInputCode] = useState("");
  const [error, setError] = useState("");
  const correctCode = "12345"; 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputCode === correctCode) {
      setError("");
      alert("Code is correct!");
    } else {
      setError("Incorrect code. Please try again.");
      setInputCode(""); 
    }
  };
  return(
     
    <div className="app">
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path = '/signup' element = {<Signup />}/>
        </Routes>
      </Router>
    </div>
  
  //   <div >
  //     {/* <Header/> */}
    
  //       <Login />
  //       <Signup />
     
  //       {/* <div className="enrol">
  //         <center>
  //         <div className="passpaperenrol">
  //         <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT720PYWY0Afl-gZ8JSL3LFv_JEDM2mCjoZk_-0lBMTWHbkVFOqGzBVmNlv068V535LHro&usqp=CAU' className="imageadjust"></img>
  //         <p>Past Paper Explanation</p>
  //         <div className="enrolbox">
  //          <form onSubmit={handleSubmit}>
  //           <input type="password"  value={inputCode} onChange={(e) => setInputCode(e.target.value)} placeholder="Enrolment Key " required/>
  //           <i className='bx bx-lock-alt'></i>
  //           </form>
  //           {error && <p style={{ color: "red" }}>{error}</p>}
  //         </div>

  //         </div>
  //         </center>

  //       </div> */}


        


  //     {/* <Footer/>   */}

   
    
    
    
      
      
    
  // </div>
  
  );
};



export default App;
