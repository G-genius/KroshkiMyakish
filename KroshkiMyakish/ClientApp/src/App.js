import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Pages/Layout';
import './custom.css';
import AddRecipe from "./Pages/AddRecipePage/AddRecipe";
import RecipeInfo from "./components/RecipeInfo/RecipeInfo";
import AccountPage from "./Pages/AccountPage/AccountPage";
import EditPage from "./Pages/AccountPage/EditPage/EditPage";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
        <Routes>
            <Route path='/' element={<Layout />}/>
            <Route path="add-recipe" element={<AddRecipe/>}/>
            <Route path="recipes/:id" element={<RecipeInfo/>}/>
            <Route path="account" element={<AccountPage/>}/>
            <Route path="account/edit" element={<EditPage/>}/>
        </Routes>
    );
  }
}
