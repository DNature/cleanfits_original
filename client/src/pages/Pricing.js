import React, { useState, useEffect, useContext } from "react";
// import PricingTable from "../components/Content/PricingTable";
import { AppContext } from "../Context";
import Layout from "../Layout";
import PricingCard from "../components/Content/PricingCard";

const Pricing = ({ location }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    if (window.scrollY > scrollPosition) {
      setScrollPosition(0);
      //window.scrollTo(0, scrollPosition)
    }
  });

  const {
    state: { pricing }
  } = useContext(AppContext);

  return (
    <Layout pathname={location.pathname}>
      <div className="container pt-5">
        <div className="row">
          <div className="col-12">
           <a href="https://c.jumia.io/?a=160534&c=874&p=r&E=kkYNyk2M4sk%3D&utm_campaign=160534&utm_term="><img src="https://affiliates.jumia.com/banners/Jumia Nigeria/PhonesTablets/NewsmartPhone  300x250.jpg"/></a>
          </div>
          {pricing.length > 0 ? (
            pricing.map(item => (
              <div
                key={item._id}
                className="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 d-flex justify-content-between"
              >
                <PricingCard item={item} />
                <a href="https://c.jumia.io/?a=160534&c=446&p=r&E=kkYNyk2M4sk%3D&utm_campaign=160534&utm_term="><img src="https://affiliates.jumia.com/banners/MTbZMWXnS2gozwuWZLjRCRBsL2AMfMKEKBSOYhmH.jpeg"/></a>
              </div>
            ))
          ) : (
            <div className="text-center mx-auto pt-5 mt-5">
              <div
                className="spinner-grow"
                style={{ width: "3rem", height: "3rem" }}
                role="status"
              >
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          )}
        </div>
        {/* <PricingTable title="Subscribe" /> */}
      </div>
    </Layout>
  );
};

export default Pricing;
