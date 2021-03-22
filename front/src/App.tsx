import Home from "./Home";
import PhoneDetail from "./PhoneDetail";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/phones">
          <Home />
        </Route>
        <Route exact path="/phones/:id">
          <PhoneDetail />
        </Route>
        <Redirect to="/phones" />
      </Switch>
    </Router>
  );
};
export default App;
