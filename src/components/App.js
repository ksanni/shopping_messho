import React from 'react'
import { BrowserRouter,Routes, Route} from "react-router-dom";
import '../styles/App.css';
import Home from './Home';
import Details from './Details/Details'
import Navbar1 from './Navbar/Navbar1'
import Cart from '../components/Cart/Cart'
import Payment from './Pyament/Payment'
import {AppContext} from './Context/Context';
import Confirm from './Confirm/Confirm';
import Sinup from './Profile/Sinup/Sinup';
import Login from './Profile/Login/Login';
import Navbar2 from './Navbar/Navbar2';






function App() {
  return (
    <>
      
      <BrowserRouter>
      <AppContext>
      <Navbar1/> 
      <Navbar2/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/sinup' element={<Sinup/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/details/:id' element={<Details/>}/>
          <Route exact path='/cart' element={<Cart/>}/>
          <Route exact path='/payment' element={<Payment/>}/>
          <Route exact path='/confirm' element={<Confirm/>}/>
         
        </Routes>
        </AppContext>
        </BrowserRouter>
     </>
  )
}


export default App;
