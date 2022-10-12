import "./Header.css"
import regIcon from "../../img/header/reg.svg"
import logIcon from "../../img/header/log.svg"
const Header = () => {
    return (
        <header>
            <ul className="menu">
                <div className="menu-btn">
                    <li className="register"><img src={regIcon} alt={regIcon}/> Регистрация</li>
                    <li className="login"><img src={logIcon} alt={logIcon}/> Вход</li>
                </div>

            </ul>
        </header>
    )
}
export default Header