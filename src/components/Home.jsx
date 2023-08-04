import React, { useContext } from 'react'

import Categories4Modal from './Categories/CategoriesHome';
import Footer from './Footer/Footer';
import ProductItem from './Product/ProductItem';
import HomeScreen2 from './HomeScreen2';
import { ProductContext } from './Context/Context';
const Home = () => {
  const{searchData}=useContext(ProductContext)
  return (
    <>
      {searchData === "" ? (
        <>
          <Categories4Modal />
          <ProductItem />
          <Footer />
        </>
      ) : (
        <HomeScreen2 />
      )}
    </>
  )
}

export default Home
