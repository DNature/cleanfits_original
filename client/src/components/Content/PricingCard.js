import React, { useContext, useEffect } from "react";
import { pathInEnv } from "../../utils";
import { AppContext } from "../../Context";

const PricingCard = ({ item }) => {
  const {
    state: { cart },
    dispatch
  } = useContext(AppContext);

  let myCart = cart;

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(myCart));
  }, [myCart]);

  const itemIsInCart = () => {
    let isInCart = false;
    cart.forEach(cartItem => {
      if (cartItem._id === item._id) {
        isInCart = true;
      }
    });

    return isInCart;
  };

  const manageItemInCart = item => {
    if (cart.length === 0 || !itemIsInCart()) {
      dispatch({ type: "ADD_TO_CART", payload: item });
    } else {
      dispatch({ type: "REMOVE_FROM_CART", payload: item });
    }
  };

  return (
    <div className="card mb-3 w-100" style={{ position: "relative" }}>
      <div style={{ position: "relative" }}>
        <img
          src={pathInEnv(`/images/${item.image}`)}
          className="card-img-top"
          alt={String(item.image).split(".")[0]}
          style={{ objectFit: "cover", height: "250px" }}
        />
        <div
          className="badge badge-danger"
          style={{
            position: "absolute",
            bottom: 10,
            left: 10,
            fontSize: "1.2rem"
          }}
        >
          <span className="naira">N</span>
          {item.price}
        </div>
      </div>
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => manageItemInCart(item)}
        >
          {itemIsInCart() ? "Remove from Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
