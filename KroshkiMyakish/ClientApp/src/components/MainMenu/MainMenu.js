import "./MainMenu.css"
import line from "../../img/MainMenu/line.png"

const MainMenu = () => {
    return (
        <div className="MainMenu">
            <div className="menu-line">
                <img src={line} alt="line"/>
            </div>
            <div className="main-menu">
                <p>Домой</p>
                <p>Рецепты</p>
                <p>Помощь</p>
                <p>Профиль</p>
            </div>
            <div className="menu-line">
                <img src={line} alt="line"/>
            </div>
        </div>
    )
}
export default MainMenu