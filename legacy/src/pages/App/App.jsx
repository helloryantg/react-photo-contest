import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import userService from '../../utils/userService';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import MainPage from '../MainPage/MainPage';
import contestService from '../../utils/contestService';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      contest: null
    }
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  handleLogout = () => {
    userService.logout();
    this.setState({user: null});
  }

  handleCreateContest = (e) => {
    e.preventDefault();
    let newContest = contestService.createContest();
    this.setState({contest: this.state.contest.push(newContest)});
  }

  /*----- LifeCycles -----*/
  componentDidMount() {
    let user = userService.getUser();
    this.setState({user});
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/' render={() =>
              <MainPage 
                user={this.state.user}
                handleLogout={this.handleLogout}
                handleCreateContest={this.handleCreateContest}
              />
            } />
            <Route exact path='/signup' render={({history}) => 
              <SignupPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
              } />
              <Route exact path='/login' render={(props) =>
              <LoginPage 
                {...props}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            }/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
