import { Route, Switch } from "react-router-dom";
import HomePage from "./page/home/home.component";
import ShopPage from "./page/shop/shop.component";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
