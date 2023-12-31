import React, { useRef, useState } from 'react'
import '../Sinup/sinup.css'
import { NavLink, useNavigate } from 'react-router-dom'



const Sinup = () => {

    const handleSubmit=()=>{

    }
     
  return (
    <>

      <form onSubmit={handleSubmit}>
      <div className="Profile-Body">
        <div className="SinupContainer">
          <div className="containerItem-image">
            <img src="https://images.meesho.com/images/marketing/1661417516766.webp" alt="" />
          </div>
          <div className="containerDetails">
            <div className="sinupContainer">
              <h1>Sign Up to view your profile</h1>

              <div className='inpDetails'>
                <input type="text"
                 placeholder='UserName' 
                
                  />
              </div>
              <div className='inpDetails'>
                <input type="password" 
                placeholder='Create Password' 
                />
              </div>
              <div className='inpDetails'>
                <input type="email"
                 placeholder='Email'
                 
                  />
              </div>
              <div className='inpDetails'>
                <input type="number" 
                placeholder='Mobile Number' 
               
                />
              </div>
             
            </div>
          </div>
          <div className="btn " style={{height: "55px",
    marginTop: "88px"}}>
          <button type='submit'>Sign up</button >
          </div>
          <div className="TermPolicy">
            <p>By continuing, you agree to Meesho’s </p>
            <p> <span>Terms & Conditions</span> and <span>Privacy Policy</span></p>
          </div>

        </div>
      </div>
      </form>
    </>
  )
}

export default Sinup
