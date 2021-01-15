import { Route, Switch } from "react-router-dom";
import HomePage from "./page/home/home.component";
import ShopPage from "./page/shop/shop.component";
import "./App.css";
import Header from "./components/header/header.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
