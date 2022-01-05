import {  PureComponent } from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from 'react-router-dom';
import HomePage from "../HomePage/HomePage"
import Setting from '../Setting';

class App extends PureComponent {
  render() {
    return (
      <Router>
        <main>
          <Link to="/"></Link>
          <Link to="/setting"></Link>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/setting">
              <Setting />
            </Route>
          </Switch>
        </main>
      </Router>
    )
  }
}


export default App;
