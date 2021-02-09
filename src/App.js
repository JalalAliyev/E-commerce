import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import HomePage from "./page/home/home.component";
import ShopPage from "./page/shop/shop.component";
import Header from "./components/header/header.component";
import SignIn from "./components/sign-in/sign-in.component";
import SignUp from "./components/sign-up/sign-up.component";
import CheckoutPage from "./page/checkout/checkout.component";
import { selectCurrentUser } from "./redux/user/user-selector";
import { checkUserSession } from "./redux/user/user-actions";

import { GlobalStyles } from "./global.styles";

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/signIn"
          render={() => (currentUser ? <Redirect to="/" /> : <SignIn />)}
        />
        <Route path="/signUp" component={SignUp} />
      </Switch>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
