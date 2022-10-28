import LeftMenu from "./LeftMenu/LeftMenu";
import MainMenu from "./MainMenu/MainMenu";
import rightIcon from "../img/MainMenu/rightIcon.png";
import "./main.css"
import RecipeList from "./MainMenu/RecipeList/RecipeList";
const Main = () => {
    return (
        <div>
            <MainMenu/>
            <div className="main">
                <LeftMenu/>
                <RecipeList/>
                <img className="left-icon" src={rightIcon} alt="left-icon"/>
            </div>
        </div>

    )
}
export default Main