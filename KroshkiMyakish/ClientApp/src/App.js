import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Pages/Layout';
import './custom.css';

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Routes>

        </Routes>
      </Layout>
    );
  }
}
