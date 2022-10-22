import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Pages/Layout';
import './custom.css';
import AddRecipe from "./Pages/AddRecipePage/AddRecipe";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
        <Routes>
            <Route path='/' element={<Layout />}/>
            <Route path="add-recipe" element={<AddRecipe/>}/>
        </Routes>
    );
  }
}
