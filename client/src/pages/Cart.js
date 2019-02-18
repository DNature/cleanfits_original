import React, { useContext, useState, useEffect, useRef } from "react";
import { AppContext } from "../Context";
import Layout from "../Layout";
import { Link } from "react-router-dom";
import CartItem from "../components/Content/CartItem";

const Cart = () => {
  const {
    state: { cart },
    dispatch
  } = useContext(AppContext);

  const [total, setTotal] = useState(0);

  const [count, setCount] = useState({});

  let myTotal = 0;
  useEffect(() => {
    cart.forEach(cartItem => setTotal((myTotal += cartItem.price)));
  }, [cart]);

  const incrementItemCount = price => {
    let myTotal = total;
    setTotal((myTotal += price));
  };

  const decrementItemCount = price => {
    let myTotal = total;
    setTotal((myTotal -= price));
  };

  return (
    <Layout>
      <div className="container pt-5">
        <div className="card bg-white mb-3">
          <div className="card-header d-flex justify-content-between align-items-center">
            <p className="lead">Laundry Cart</p>
            {cart.length > 0 && (
              <Link to="checkout" className="btn btn-primary">
                Proceed to Checkout
              </Link>
            )}
          </div>
          <div className="card-body text-center py-5">
            {cart.length === 0 ? (
              <>
                <p className="card-text">YOUR CART IS EMPTY!</p>
                <Link to="/pricing" className="btn btn-light">
                  Start Adding Items
                </Link>
              </>
            ) : (
              <ul className="list-group list-group-flush">
                {cart.map(item => (
                  <CartItem
                    key={item._id}
                    item={item}
                    count={count}
                    setCount={setCount}
                    incrementItemCount={incrementItemCount}
                    decrementItemCount={decrementItemCount}
                  />
                ))}
              </ul>
            )}
          </div>
          <div className="card-footer d-flex justify-content-end align-items-center">
            <p className="lead">
              <strong>SUB TOTAL = {total}</strong>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
