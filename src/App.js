import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./page/home/home.component";
import ShopPage from "./page/shop/shop.component";
import "./App.css";
import Header from "./components/header/header.component";
import SigninAndSignUpPage from "./page/signInandSignUp/signIn-and-signUp.component";
import { auth } from "./firebase/firebase.utils";

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/sign" component={SigninAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
