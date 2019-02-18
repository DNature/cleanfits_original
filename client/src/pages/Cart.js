import React, { useContext } from "react";
import { AppContext } from "../Context";
import Layout from "../Layout";
import { Link } from "react-router-dom";
import CartItem from "../components/Content/CartItem";

const Cart = () => {
  const {
    state: { cart },
    dispatch
  } = useContext(AppContext);

  return (
    <Layout>
      <div className="container pt-5">
        <div className="card bg-white mb-3">
          <div className="card-header d-flex justify-content-between align-items-center">
            <p className="lead">Laundry Cart</p>
            <Link to="checkout" className="btn btn-primary">
              Proceed to Checkout
            </Link>
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
                  <CartItem key={item._id} item={item} />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
