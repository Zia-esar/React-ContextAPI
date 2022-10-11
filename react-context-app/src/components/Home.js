import React, {useState, useContext} from 'react';
import faker from 'faker';
import SingleProduct from './SingleProduct';

faker.seed(100);
const Home = () => {


    const productsArray = [...Array(20)].map((p) => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.random.image(),
      }));

    console.log('products : ', productsArray);

  return (
    <div style={{ textAlign: "center" }}>
      <span style={{ fontSize: 30 }}>Products Page</span>
      <div className="productContainer">
        {productsArray.map((prod) => (
        <SingleProduct key={prod.id} prod={prod} />
        ))}
      </div>
    </div>
  )
}

export default Home;
