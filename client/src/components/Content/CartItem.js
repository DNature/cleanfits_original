import React, { useEffect, useContext } from "react";
import { AppContext } from "../../Context";

const CartItem = ({ item }) => {
  const {
    state: { cart },
    dispatch
  } = useContext(AppContext);

  const removeItemFromCart = item => {
    let cartFromLocalStorage = JSON.parse(localStorage.getItem("cart"));

    cartFromLocalStorage.forEach(cartItem => {
      if (cartItem._id === item._id) {
        dispatch({ type: "REMOVE_FROM_CART", payload: item._id });
        let newCart = cart.filter(i => i._id !== item._id);
        localStorage.setItem("cart", JSON.stringify(newCart));
      }
    });
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        {item.name} | <strong>{item.price}</strong>
      </div>
      <div>
        <div className="btn-group">
          <button type="button" className="btn btn-light">
            -
          </button>
          <span className="btn btn-light">1</span>
          <button type="button" className="btn btn-light">
            +
          </button>
          <button
            type="button ml-5"
            className="btn btn-danger"
            onClick={() => removeItemFromCart(item)}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
