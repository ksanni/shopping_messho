import React from 'react'
import { NavLink } from 'react-router-dom'
import "../Pyament/payment.css"
function Payment() {

    return (
        <div className="containers">
       
        <form action="">
    
            <div class="row">
    
                <div class="col">
    
                    <h3 class="title">billing address</h3>
    
                    <div class="inputBox">
                        <span>Full Name :</span>
                        <input type="text" placeholder="Enter Full Name"/>
                    </div>
                    <div class="inputBox">
                        <span>email :</span>
                        <input type="email" placeholder="example@example.com"/>
                    </div>
                    <div class="inputBox">
                        <span>address :</span>
                        <input type="text" placeholder="room - street - locality"/>
                    </div>
                    <div class="inputBox">
                        <span>city :</span>
                        <input type="text" placeholder="City"/>
                    </div>
    
                    <div class="flex">
                        <div class="inputBox">
                            <span>State :</span>
                            <input type="text" placeholder="State"/>
                        </div>
                        <div class="inputBox">
                            <span>zip code :</span>
                            <input type="text" placeholder="123456"/>
                        </div>
                    </div>
    
                </div>
    
                <div class="col">
    
                    <h3 class="title">payment</h3>
    
                    <div class="inputBox">
                        <span>cards accepted :</span>
                        <span className='images'></span>
                    </div>
                    <div class="inputBox">
                        <span>Name On Card :</span>
                        <input type="text" placeholder="Enter Name"/>
                    </div>
                    <div class="inputBox">
                        <span>Credit Card Number :</span>
                        <input type="number" placeholder="1111-2222-3333-4444"/>
                    </div>
                    <div class="inputBox">
                        <span>Exp Month :</span>
                        <input type="text" placeholder="Enter Month"/>
                    </div>
    
                    <div class="flex">
                        <div class="inputBox">
                            <span>Exp Year :</span>
                            <input type="number" placeholder="Year"/>
                        </div>
                        <div class="inputBox">
                            <span>CVV :</span>
                            <input type="text" placeholder="XXX" maxLength={3}/>
                        </div>
                    </div>
    
                </div>
        
            </div>
            <NavLink to="/confirm">
            <input type="submit" value="proceed to checkout" class="submit-btn"/>
            </NavLink>
        </form>
    
    </div>    
        
       

    )
}

export default Payment
