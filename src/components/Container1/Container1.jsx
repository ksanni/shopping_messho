import React from 'react'

function Container1() {
    return (
        <div className='container1'>

            <div className="container1Left">
                <div className='container1LeftInner'>
                    <h1>Lowest Prices <br /> Best Quality Shopping</h1>
                    <div className='container1Left-Delivery'>
                        <div className='container1Left-Delivery-part1'>
                            <img src='https://images.meesho.com/images/pow/cod.svg' alt="Error" />

                            <span>Free Delivery</span>
                        </div>
                        <div className='container1Left-Delivery-part1 cashON'>
                            <img src="https://images.meesho.com/images/pow/cod.svg" alt="Error" />
                            <span>Cash on Delivery</span>
                        </div>
                        <div className='container1Left-Delivery-part1'>
                            <img src="https://images.meesho.com/images/pow/easyReturns.svg" alt="Error" />
                            <span>Easy Returns</span>
                        </div>
                    </div>
                    <button className='btn-container1Left-Delivery' ><img src="https://images.meesho.com/images/pow/playstoreSmallIcon.webp" alt="" /> Download the Meesho App</button>
                </div>
            </div>

            <div className="container1Right">
                    <img src="https://images.meesho.com/images/marketing/1631722939962.webp" alt="Error"/>
            </div>


        </div>
    )
}

export default Container1
