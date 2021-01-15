import { Route, Switch } from "react-router-dom";
import HomePage from "./page/homePage/homePage.component";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
