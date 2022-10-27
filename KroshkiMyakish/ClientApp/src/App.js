import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Pages/Layout';
import './custom.css';
import AddRecipe from "./Pages/AddRecipePage/AddRecipe";
import RecipeInfo from "./components/RecipeInfo/RecipeInfo";
import AccountPage from "./Pages/AccountPage/AccountPage";
import EditPage from "./Pages/AccountPage/EditPage/EditPage";
import RecipesPage from "./Pages/Recipes/RecipesPage";
import Soups from "./Pages/Recipes/Soups/Soups";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
        <Routes>
            <Route path='/' element={<Layout />}/>
            <Route path="add-recipe" element={<AddRecipe/>}/>
            <Route path="recipe/:id" element={<RecipeInfo/>}/>
            <Route path="account" element={<AccountPage/>}/>
            <Route path="account/edit" element={<EditPage/>}/>
            <Route path="recipes" element={<RecipesPage/>}/>
            <Route path="recipes/soups" element={<Soups/>}/>
            <Route path="recipes/goryachie_bliuda" element={<Soups/>}/>
            <Route path="recipes/salad" element={<Soups/>}/>
            <Route path="recipes/zakuski" element={<Soups/>}/>
            <Route path="recipes/vypechka" element={<Soups/>}/>
            <Route path="recipes/dessert" element={<Soups/>}/>
            <Route path="recipes/sousy" element={<Soups/>}/>
            <Route path="recipes/napitki" element={<Soups/>}/>
        </Routes>
    );
  }
}
