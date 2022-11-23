import logo from "../../../img/header/logo.png"
import "./SubHeader.css"
import arrow from "./../../../img/header/arrow.svg"
import searchIcon from "../../../img/header/searchIcon.svg"
import userIcon from "../../../img/header/user.svg"
import {Link, useNavigate} from "react-router-dom";

const SubHeader = () => {
    const navigate = useNavigate()
    const OpenMainPage = () => {
        navigate("/")
        window.scrollBy(0, -10000)
    }
    const OpenAccountPage = () => {
        navigate("/account")
        window.scrollBy(0, -10000)
    }
    const OpenRecipeList = () => {
        navigate("/recipes")
        window.scrollBy(0, -10000)
    }

    return (
        <div className="sub-header">
            {/*<img className="logo" onClick={OpenMainPage} src={logo} alt={logo}/>*/}
            <h1 className="logo" onClick={OpenMainPage}>Food Craft</h1>
            <div className="search">
                <div className="category" onClick={OpenRecipeList}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a>Все категории</a>
                    <img className="arrow" src={arrow} alt={arrow}/>
                </div>
                <div className="inputSearch">
                    <input placeholder="Поиск"/>
                </div>
                <div className="search-icon">
                    <img src={searchIcon} alt={searchIcon}/>
                </div>
            </div>

            <div className="user">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <Link to="/add-recipe" className="add-recipe">Добавить рецепт</Link>
                <img className="user-icon" src={userIcon} alt={userIcon} onClick={OpenAccountPage}/>
            </div>


        </div>
    )
}
export default SubHeader