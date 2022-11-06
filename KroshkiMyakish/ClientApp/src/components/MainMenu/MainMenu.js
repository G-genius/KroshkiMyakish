import "./MainMenu.css"
import line from "../../img/MainMenu/line.png"
import {Link} from "react-router-dom";

const MainMenu = () => {
    return (
        <div className="MainMenu">
            <div className="menu-line">
                <img src={line} alt="line"/>
            </div>
            <div className="main-menu">
                <p><Link to="/">Домой</Link></p>
                <p><Link to="/recipes">Рецепты</Link></p>
                <p><Link to="/help">Помощь</Link></p>
                <p><Link to="/account">Профиль</Link></p>
            </div>
            <div className="menu-line">
                <img src={line} alt="line"/>
            </div>
        </div>
    )
}
export default MainMenu