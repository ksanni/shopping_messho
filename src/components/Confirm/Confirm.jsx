import React, { useState, useEffect } from 'react'
// import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import '../Confirm/confirm.css'
import { Link } from 'react-router-dom'

const Confirm = () => {
    const [dimension, setDimension] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    })
    console.log(dimension);
    return (
        <div className=''>
            <div id="contents">
                <h1 className='congrat' >congratulation</h1>
                <p className='OrderPlaced'>Your Order Placed</p>
               <Link to='/'><button className='ContinueShop'>Continue Shopping</button></Link> 
            </div>
            <Confetti
                width={dimension.width}
                height={dimension.height}
            />
        </div>
    )
}

export default Confirm
