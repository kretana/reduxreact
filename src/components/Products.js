/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import formatCurrency from "./util";

function Products({ data }) {
  return (
    <div>
      <ul className="products">
        {data &&
          data.length > 0 &&
          data.map((product) => {
            return (
              <li key={product._id}>
                <div className="product">
                  <a href="#1234">
                    <img src={product.image} alt={product.title}></img>
                    <p>{product.title}</p>
                  </a>
                  <div className="product-price">
                    <div>{formatCurrency(product.price)}</div>
                    <button className='button-primary'>Add to cart</button>
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Products;
