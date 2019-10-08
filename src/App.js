import React, { Component } from 'react';
import Layout from './components/Layout/Layout'
import ConstructorHambuguesas from './containers/ConstructorHamburguesas/ConstructorHamburguesas'


class App extends Component {
    render() {
    return (
      <Layout>
        <ConstructorHambuguesas></ConstructorHambuguesas>
      </Layout>
    );
  }
}

export default App;
