import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';
import SignIn from '../components/SingIn';
import Register from '../components/Register';
import AboutUs from '../components/AboutUs';
import Published from '../components/Published';
import Jobs from '../components/Jobs';
import Perfil from '../components/Perfil';
import RestorePassword from '../components/RestorePassword';

const App = () => (
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

export default App;