import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';

import './custom.css'
import { FirstOffice } from './components/FirstOffice';
import { SecondOffice } from './components/SecondOfficePage';
import { AutozavodskayaOffice } from './components/Autozavodskaya';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route exact path='/Myasnickaya22' component={FirstOffice} />
        <Route exact path='/Myasnickaya24_7' component={SecondOffice} />
        <Route exact path='/Autozavodskaya' component={AutozavodskayaOffice} />
      </Layout>
    );
  }
}
