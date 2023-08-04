import React, { useContext } from 'react';
import '../Cart/Cart.css'
import { NavLink } from 'react-router-dom';
import { ProductContext } from '../Context/Context';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Cart() {
 

const {products,increaseQty,decreaseQty, removeProduct}= useContext(ProductContext);
console.log("incart"+products);
    // Check if products are fully loaded before filtering for cart items
    const cartItems = products.length > 0 ? products.filter((p) => p.inCart) : [];
    const itemPrices = cartItems.map((item) => item.price * item.qty);
    
    
    // Calculate total price only if there are items in the cart
    const total = itemPrices.length > 0 ? itemPrices.reduce((sum, price) => sum + price, 0) : 0;
    const totals = Math.ceil( total ); 
    // Handle increase, decrease, and remove button clicks
    const handleIncrease = (product) => {
      increaseQty(product);
      const index = cartItems.findIndex((item) => item.id === product.id);
      if (index !== -1) {
        itemPrices[index] = product.price * product.qty;
      }
      toast.success(`${product.title} added to cart!`, {
        position: "top-center",
        autoClose: 2000,
      });
    };
  
    const handleDecrease = (product) => {
      if (product.qty > 1) {
        decreaseQty(product);
        const index = cartItems.findIndex((item) => item.id === product.id);
      if (index !== -1) {
        itemPrices[index] = product.price * product.qty;
      }
      toast.error(`${product.title} removed from cart!`, {
        position: "top-center",
        autoClose: 2000,
      });
    }
      
    };
  
    const handleRemove = (product) => {
      removeProduct(product);
      toast.error(`${product.title} removed from cart!`, {
        position: "top-center",
        autoClose: 2000,
      });
    };

 


    if (products === null) {
        return (
        <>
            <div className="emptyCard">
                <h1>Cart is Empty</h1>
                <NavLink to="/">
                <div><button>Continue Shopping</button></div>
                </NavLink>
             </div>
         </>
        )
    } else {
        return (
            <>
            <ToastContainer/>
                        <h4 className='headingCart'>Shopping-Cart</h4>
                <div className="container">
                    <div className="section1">
                        {cartItems.map((data,index) => {
                            return (
                            <>
                                <div key={data.id} className="item">
                                    <div className="item_1">
                                        <div className="image">
                                            <img src={data.image} alt="Not found" />
                                        </div>
                                        <div className="details">
                                            <div className="title" >
                                                <p >{data.title}</p>
                                            </div>
                                            <div className="price">
                                                <h4>${itemPrices[index].toFixed(2)}</h4>
                                            </div>
                                            <div className="handle">
                                                <button onClick={()=>handleDecrease(data)}>-</button>
                                                <h4>{data.qty}</h4>
                                                <button onClick={()=>handleIncrease(data)}>+</button>
                                            </div>
                                        </div>
                                        <div className="buyRemove">
                                            <button onClick={(e) => handleRemove(data)}>Remove</button>
                                        </div>
                                      

                                    </div>


                                </div>
                            </>
                            )})
                        }

                    </div>
                    <div className="section2">
                        <div className="priceDetails">
                            <h4>Price Details:</h4>
                            <div className="price">
                                <p>Total Product Price</p>
                                <p>${total.toFixed(2)}</p>
                            </div>
                            <NavLink to="/payment">
                                <button>Continue</button>
                            </NavLink>
                        </div>
                    </div>

                </div>

            </>
        )
    }
}


