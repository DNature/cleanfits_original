import React, { useEffect, useState } from "react";
import Layout from "../Layout";

const Checkout = () => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  const count = JSON.parse(localStorage.getItem("count"));
  const [syntheticCart, setSyntheticCart] = useState([]);

  useEffect(() => {
    if (count === null || count.length === 0) {
      setSyntheticCart([...cart]);
    } else {
      cart.map(item => {
        if (item._id === Object.keys(count)) {
          console.log(item);
        }
      });
    }
  }, []);

  return (
    <Layout>
      <div className="container pt-5">
        <div className="card border-light mb-3">
          <div className="card-header bg-white">Checkout</div>
          <div className="card-body">
            <h5 className="card-title">Light card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
