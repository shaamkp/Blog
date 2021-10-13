import "./App.css";
import Blogs from "./components/screens/Blogs";
import User from "./components/screens/User";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <>
        <Switch>


          <Route path="/" exact>
            <Blogs />
          </Route>
          <Route path="/blog/:id">
            <User />
          </Route>


        </Switch>
      </>
    </Router>
  );
}

export default App;
