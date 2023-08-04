import React, { useState, useContext } from 'react';
import { ProductContext } from './Context/Context';
import { IoIosStarOutline } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

function HomeScreen2() {
  const { products, searchData, addToCart } = useContext(ProductContext);
  const [sortOrder, setSortOrder] = useState('lowToHigh');
  const navigate = useNavigate();

  // Sort the products based on selected sort order
  const sortedProducts = [...products];
  switch (sortOrder) {
    case 'lowToHigh':
      sortedProducts.sort((a, b) => a.price - b.price);
      break;
    case 'highToLow':
      sortedProducts.sort((a, b) => b.price - a.price);
      break;
    default:
      // In case of invalid value, maintain the original order
      break;
  }

  const filtered =
    searchData && searchData.trim()
      ? sortedProducts.filter((product) =>
          product.title.toLowerCase().includes(searchData.toLowerCase())
        )
      : sortedProducts;

  const handleAddToCart = (id) => {
    addToCart(id);
  };

  const handleSortChange = (e) => {
    const selectedValue = e.target.value;
    setSortOrder(selectedValue);
  };

  return (
    <div>
      <h1 className='homeScreen2_heading'>Search Items</h1>

      {/* Sort dropdown */}
      <label htmlFor='sort'>Sort by:</label>
      <select id='sort' value={sortOrder} onChange={handleSortChange}>
        <option value='lowToHigh'>Low to High</option>
        <option value='highToLow'>High to Low</option>
      </select>
      <div className='ProductItem_Wrapper'>
        {filtered.length === 0 ? (
          <p
            style={{
              textAlign: 'center',
              textAlign: 'start',
              width: '100vw',
              marginLeft: '421px',
              fontSize: '29px',
              fontWeight: '500',
            }}
          >
            Data Not Match
          </p>
        ) : (
          filtered.map((curElem) => {
            return (
              <div key={curElem.id}>
                <div className='ProductItem-container'>
                  <div onClick={() => navigate(`/details/${curElem.id}`)}>
                    <div className='productImage'>
                      <img src={curElem.image} alt='Not found' image={curElem.image} />
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
                            {curElem.rating.count} Reviews
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <button onClick={() => handleAddToCart(curElem.id)} className='addtocardBtn'>Add To Cart</button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default HomeScreen2;
