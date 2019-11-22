import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import httpClient from './httpClient'
import Index from './pages/Index';
import LogIn from './pages/Login';
import SignUp from './pages/SignUp';

import AdminPage from './pages/Admin';
import LogOut from './pages/Logout';
import Products from './pages/Products';
import Contacts from './pages/Contacts';
import NavBar from './components/core/AppNav/AppNav';

class App extends React.Component {
  state = { currentUser: httpClient.getCurrentUser() }

	onLoginSuccess(user) {
		this.setState({ currentUser: httpClient.getCurrentUser() })
	}

	logOut() {
		httpClient.logOut()
		this.setState({ currentUser: null })
	}
	
  render () {
    const { currentUser } = this.state
    return (
      <div>
        <NavBar currentUser={currentUser}></NavBar>
        <Switch>

					<Route path="/login" render={(props) => {
						return <LogIn {...props} onLoginSuccess={this.onLoginSuccess.bind(this)} />
					}} />

					<Route path="/logout" render={(props) => {
						return <LogOut onLogOut={this.logOut.bind(this)} />
					}} />

					{/* the sign up component takes an 'onSignUpSuccess' prop which will perform the same thing as onLoginSuccess: set the state to contain the currentUser */}
					<Route path="/signup" render={(props) => {
						return <SignUp {...props} onSignUpSuccess={this.onLoginSuccess.bind(this)} />
					}} />
					}} />

            <Route exact path="/" component={Index} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/contacts" component={Contacts} />
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/logout" component={LogOut} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/admin" component={AdminPage} />
            </Switch>
      </div>
    );
  }
}
export default App;