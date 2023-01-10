import LeftMenu from "./LeftMenu/LeftMenu";
import MainMenu from "./MainMenu/MainMenu";
import rightIcon from "../img/MainMenu/rightIcon.png";
import "./main.css"
import RecipeList from "./MainMenu/RecipeList/RecipeList";
import React from 'react';

const Main = () => {
    return (
        <div className="Main">
            <div className="main-left">
                <LeftMenu/>
            </div>
            <div className="main-recipe-list">
                <MainMenu/>
                <RecipeList/>
            </div>
            <div>
                <img className="left-icon" src={rightIcon} alt="left-icon"/>
            </div>
        </div>

    )
}
export default Main