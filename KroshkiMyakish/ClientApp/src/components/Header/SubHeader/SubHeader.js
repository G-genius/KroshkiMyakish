import logo from "../../../img/header/logo.png"
import "./SubHeader.css"
import arrow from "./../../../img/header/arrow.svg"
import searchIcon from "../../../img/header/searchIcon.svg"
import userIcon from "../../../img/header/user.svg"
const SubHeader = () => {
    return (
        <div className="sub-header">
            <img className="logo" src={logo} alt={logo}/>
            <div className="search">
                <div className="category">
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
                <a className="add-recipe">Добавить рецепт</a>
                <img className="user-icon" src={userIcon} alt={userIcon}/>
            </div>
        </div>
    )
}
export default SubHeader