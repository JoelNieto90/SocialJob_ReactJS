import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Home from '../containers/Home';
import NotFound from '../containers/NotFound';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import SignIn from '../components/SingIn';
import Register from '../components/Register';
import RegisterUpdate from '../components/RegisterUpdate';
import AboutUs from '../components/AboutUs';
import Published from '../components/Published';
import Jobs from '../components/Jobs';
import Perfil from '../components/Perfil';
import RestorePassword from '../components/RestorePassword';

export default class App extends Component {
  state = {};

  componentDidMount = () => {
    axios.get('/user/')
      .then((res) => {
        this.setState(res.data.data);
      },
      (err) => {
        console.log(err);
      });
  };

  setUser = (token, decode) => {
    this.setState({
      clave: token,
      user: decode,
    });
  };

  setDelete = (res) => {
    this.setState({
      delete: res,
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <NavBar user={this.state.user} setUser={this.setUser} delete={this.state.delete} setDelete={this.setDelete} />
          <Switch>
            <Route
              exact
              path='/'
              component={Home}
            />
            <Route
              exact
              path='/signin'
              component={() => <SignIn setUser={this.setUser} />}
            />
            <Route
              exact
              path='/register'
              component={Register}
            />
            <Route
              exact
              path='/registerupdate'
              component={() => <RegisterUpdate user={this.state.user} />}
            />
            <Route
              exact
              path='/aboutus'
              component={AboutUs}
            />
            <Route
              exact
              path='/published'
              component={() => <Published user={this.state.user} clave={this.state.clave} />}
            />
            <Route
              exact
              path='/jobs'
              component={() => <Jobs user={this.state.user} />}
            />
            <Route
              exact
              path='/perfil'
              component={() => <Perfil user={this.state.user} />}
            />
            <Route
              exact
              path='/restorepassword'
              component={RestorePassword}
            />
            <Route
              component={NotFound}
            />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

/*const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/signin' component={SignIn} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/aboutus' component={AboutUs} />
        <Route exact path='/published' component={Published} />
        <Route exact path='/jobs' component={Jobs} />
        <Route exact path='/perfil' component={Perfil} />
        <Route exact path='/restorepassword' component={RestorePassword} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;*/
