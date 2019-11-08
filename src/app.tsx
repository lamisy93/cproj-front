import * as React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./js/pages/login";
import Home from "./js/pages/home"

class App extends React.Component {

    componentDidMount(){
        let userFromStorage = window.localStorage.getItem("user");
        console.log(userFromStorage)
    }

    render() {
        return (
            <Router>
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/login">login</Link>
                  </li>
                </ul>
              </nav>
    
              {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
              <Switch>
                <Route path="/login">
                    <Login title="my login page" isLoaded={false} />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
              </Switch>
            </div>
          </Router>
        )
    }
}

export default App;