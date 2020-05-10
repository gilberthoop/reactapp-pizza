import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css';
import NavBar from './components/dom/NavBar';
import MenuList from './components/MenuList';
import Orders from './components/Orders';
import Checkout from './components/Checkout';
import Home from './components/Home';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = { menu: [] };
  }


  fetchMenu() {
    axios.get('/api/menu')
      .then(response => {
        this.setState({ menu: response.data });
      })
      .catch(error => console.log(error));
  }


  componentDidMount() {
    // Retrieve all menu information
    this.fetchMenu();
  }


  render() {
    if (!this.state.menu.length) {
      return (
        <div className="ui icon message">
          <i className="notched circle loading icon"></i>
          <div className="content">
            <div className="header">
              Just one second
          </div>
            <p>We're fetching that content for you.</p>
          </div>
        </div>);
    }

    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route
              path="/menu"
              render={(props) => <MenuList {...props} menu={this.state.menu} />}
            />
            <Route path="/orders" component={Orders} />
            <Route path="/checkout" component={Checkout} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;