import React, { Component } from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import { Layout } from './Pages/Layout';
import './custom.css';
import AddRecipe from "./Pages/AddRecipePage/AddRecipe";
import RecipeInfo from "./components/RecipeInfo/RecipeInfo";
import AccountPage from "./Pages/AccountPage/AccountPage";
import EditPage from "./Pages/AccountPage/EditPage/EditPage";
import RecipesPage from "./Pages/Recipes/RecipesPage";
import Soups from "./Pages/Recipes/Soups/Soups";
import GoryachieBliuda from "./Pages/Recipes/GoryachieBliuda/GoryachieBliuda";
import Salad from "./Pages/Recipes/Salad/Salad";
import Zakuski from "./Pages/Recipes/Zakuski/Zakuski";
import Vypeshka from "./Pages/Recipes/Vypeshka/Vypeshka";
import Dessert from "./Pages/Recipes/Dessert/Dessert";
import Sousy from "./Pages/Recipes/Sousy/Sousy";
import Napitki from "./Pages/Recipes/Napitki/Napitki";

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
            <Route path="/recipes" element={<RecipesPage/>}>
                <Route path="soups" element={<Soups/>}/>
                <Route path="goryachie_bliuda" element={<GoryachieBliuda/>}/>
                <Route path="salad" element={<Salad/>}/>
                <Route path="zakuski" element={<Zakuski/>}/>
                <Route path="vypechka" element={<Vypeshka/>}/>
                <Route path="dessert" element={<Dessert/>}/>
                <Route path="sousy" element={<Sousy/>}/>
                <Route path="napitki" element={<Napitki/>}/>
            </Route>

        </Routes>
    );
  }
}
