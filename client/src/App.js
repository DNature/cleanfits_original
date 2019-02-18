import React, { Suspense, useMemo } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import Pricing from "./pages/Pricing";
import HowItWorks from "./pages/HowItWorks";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import FourOFour from "./pages/404";
import { AppProvider } from "./Context";

// Admin pages ---> Authenticated routes
import AdminHome from "./pages/Admin";
import AdminLogin from "./pages/Admin/Login";

function App() {
  return (
    <Suspense fallback={() => <p>loading...</p>}>
      <AppProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/pricing" component={Pricing} />
            <Route exact path="/how-it-works" component={HowItWorks} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/cart" component={Cart} />
            <Route path="/admin" component={AdminHome} />
            <Route exact path="/admin/login" component={AdminLogin} />
            <Route component={FourOFour} />
          </Switch>
        </Router>
      </AppProvider>
    </Suspense>
  );
}

export default App;
