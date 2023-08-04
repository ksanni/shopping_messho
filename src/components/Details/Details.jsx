import React, { useState, useEffect, useContext } from 'react'
import { IoIosStarOutline } from 'react-icons/io';
import '../Details/Details.css';
import { Link, useParams } from 'react-router-dom';
import { ProductContext } from '../Context/Context';

const Details = () => {
  const { products, addToCart } = useContext(ProductContext);
  const { id } = useParams();

  const product = products.find((p) => p.id === parseInt(id));
  if (!product) {
    return <div>Product not found</div>
  }

  const handleAddToCart = () => {
    addToCart(product.id);
  };

  return (
    <>
      <div className='ProductDetailsBody'>
        <div className='detailsList1'>
          <div className='product_img'>
            <div class="glassBox">
              <div class="glassBox__imgBox">
                <img src={product.image} alt="" />
                <h3 class="glassBox__title">Golden Shoe</h3>
              </div>
              <div class="glassBox__content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae sunt veniam adipisci fugit qui quaerat!</div>
            </div>
          </div>
          <div className='buttons'>
          <Link to="/cart"> 
           <button className='cart2' onClick={handleAddToCart}>
                Add to cart
              </button>
          </Link>
          </div>
        </div>
        <div className='detailsList2'>
          <h4 className='productCategory'>{product.category}</h4>
          <h4 className='productTitle'>{product.title}</h4>
          <p className='productRating'>
            Rating {products.rating && product.rating.rate}
            <IoIosStarOutline />
          </p>
          <h4 className='productPrice'>${product.price}</h4>
          <p className='productDesc'>{product.description}</p>
        </div>
      </div>
    </>
  );
};

export default Details;
