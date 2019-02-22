import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import { Link, Redirect } from "react-router-dom";
import { db, firebase } from "../auth";
import PaymentModal from "../components/Content/PaymentModal";
import useScript from "../hooks/useScript";

const Checkout = () => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  const count = JSON.parse(localStorage.getItem("count"));
  const [syntheticCart, setSyntheticCart] = useState([]);
  const [redirect, setRedirect] = useState(false);
  const [subTotal, setSubTotal] = useState(0);
  const [user, setUser] = useState(null);

  const [loaded, error] = useScript("https://js.paystack.co/v1/inline.js");

  let newCart = [];
  useEffect(() => {
    /**
     * check if user is authenticated
     */

    firebase
      .auth()
      .onAuthStateChanged(user =>
        user ? setRedirect(false) : setRedirect(true)
      );

    if (count === null || count.length === 0) {
      let subTotal = 0;
      newCart = [...newCart, ...cart];
      let c = { cart: newCart };
      newCart.map(ci => (subTotal += ci.total));
      c.subTotal = subTotal;
      setSyntheticCart(c);
    } else {
      newCart = [...newCart, ...cart];
      let newCount = { ...count };
      let keys = [...Object.keys(newCount)];
      let values = [...Object.values(newCount)];
      newCart.forEach((item, i, arr) => {
        if (item._id === keys[i]) {
          item.quantity = values[i];
          item.total = item.price * item.quantity;
        } else {
          item.quantity = 1;
          item.total = item.price * item.quantity;
        }
      });
      let subTotal = 0;
      let c = { cart: newCart };
      newCart.map(ci => (subTotal += ci.total));
      c.subTotal = subTotal;
      console.log(c);
      setSyntheticCart(c);
    }
  }, []);

  const payWithPaystack = () => {
    firebase
      .firestore()
      .collection("users")
      .get()
      .then(users =>
        users.docs.map(doc => {
          if (doc.data().email === firebase.auth().currentUser.email) {
            db.collection("carts")
              .add({
                cart: syntheticCart.cart,
                subTotal: syntheticCart.subTotal
              })
              .then(res => {
                const handler = window.PaystackPop.setup({
                  key: "pk_test_67a9866dc16a8e4e8b4506c7b8ecafad37e61b4b",
                  email: doc.data().email,
                  amount: syntheticCart.subTotal * 100,
                  currency: "NGN",
                  ref: "" + Math.floor(Math.random() * 1000000000 + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
                  metadata: {
                    custom_fields: [
                      {
                        display_name: "Mobile Number",
                        variable_name: "mobile_number",
                        value: doc.data().phone
                      },
                      {
                        display_name: "First Name",
                        variable_name: "firstname",
                        value: doc.data().firstname
                      },
                      {
                        display_name: "Last Name",
                        variable_name: "lastname",
                        value: doc.data().lastname
                      },
                      {
                        display_name: "Cart Items",
                        variable_name: "cart_name",
                        value: syntheticCart.cart
                      },
                      {
                        display_name: "Sub Total",
                        variable_name: "sub_total",
                        value: syntheticCart.subTotal
                      }
                    ]
                  },
                  callback: function(response) {
                    console.log(
                      "success. transaction ref is " + response.reference
                    );

                    clearLocalStorageAndRedirect();
                  },
                  onClose: function() {
                    console.log("window closed");
                  }
                });
                handler.openIframe();
              })
              .catch(err => console.log(err));
          }
          // console.log(doc.);
        })
      );
  };

  const clearLocalStorageAndRedirect = () => {
    localStorage.setItem("cart", []);
    localStorage.setItem("count", {});
    setRedirect(true);
  };

  if (redirect && JSON.parse(localStorage.getItem("cart").length === 0))
    return <Redirect to="/pricing" />;

  if (redirect && JSON.parse(localStorage.getItem("cart").length > 0))
    return <Redirect to="/signup" />;

  return (
    <Layout>
      <PaymentModal />
      <div className="container pt-5">
        <div className="card border-light mb-3">
          <div className="card-header bg-white d-flex justify-content-between">
            <Link to="/cart" className="lead btn btn-link">
              <i className="fas fa-chevron-left" /> Back
            </Link>
            <button
              // data-toggle="modal"
              // data-target="#exampleModalCenter"
              className="btn btn-outline-primary"
              onClick={() => payWithPaystack()}
            >
              Pay Now
            </button>
          </div>
          <div className="card-body">
            <h5 className="card-title text-center lead">
              You are about to pay the following Order
            </h5>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(syntheticCart).length !== 0 &&
                  syntheticCart.cart.map(item => {
                    return (
                      <tr key={item._id}>
                        <th scope="row">{item.name}</th>
                        <td>{item.price}</td>
                        <td className="">x{item.quantity}</td>
                        <td>{item.total}</td>
                      </tr>
                    );
                  })}
                <tr>
                  <th />
                  <td />
                  <th scope="row">Sub Total</th>
                  <th scope="row">{syntheticCart.subTotal}</th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
