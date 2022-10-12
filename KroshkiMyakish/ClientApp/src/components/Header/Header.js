import "./Header.css"
import regIcon from "../../img/header/reg.svg"
import logIcon from "../../img/header/log.svg"

const Header = () => {
    return (
        <header>
            <div className="menu-btn">
                <ul className="menu">
                    <li className="register"><img src={regIcon} alt={regIcon}/> Регистрация</li>
                    <li className="login"><img src={logIcon} alt={logIcon}/> Вход</li>
                </ul>
            </div>
        </header>
    )
}
export default Header