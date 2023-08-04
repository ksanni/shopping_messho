import React, { useContext, useEffect, useState } from 'react'
import { IoIosStarOutline } from 'react-icons/io'
import "../Product/ProductItem.css"
import { ProductContext } from '../Context/Context';
import { useNavigate } from 'react-router-dom';


const ProductItem = () => {
  const { products, addToCart } = useContext(ProductContext);
  const navigate = useNavigate();

  const handleAddToCart = (id) => {
    addToCart(id);
  };
  return (
    <>
      <div className="ProductHeading">
        <h4>Products For You</h4>
      </div>
      <div className="ProductItem_Wrapper">
        {products.map((curElem) => {

          return (
            <div key={curElem.id}>
              <div className='ProductItem-container'  >
                <div onClick={() => navigate(`/details/${curElem.id}`)}>
                  <div className="productImage">
                    <img src={curElem.image} alt="Not found" image={curElem.image} />
                  </div>
                  <div className='productDetails'>
                    <div className='productPriceName'>
                      <p>{curElem.title}</p>
                      <h5>${curElem.price}<span>onwards</span></h5>
                    </div>
                    <div className='productFreeDelivery'>
                      <span className='freeDelivery'>Free Delivery</span>
                      <span className='add_item'>
                        <span className='ratingProduct'>
                          {curElem.rating.rate}
                          <span>
                            <IoIosStarOutline className='ratingStar' />
                          </span>
                        </span>
                        <span className='reviews'>
                          {curElem.rating.count}  Reviews
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              <button onClick={()=>handleAddToCart(curElem.id)} className="addtocardBtn" >Add To Cart</button>
              </div>

            </div>
          )


        })
        }

      </div>
    </>
  )

}
export default ProductItem
