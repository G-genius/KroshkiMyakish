import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import UserLogo from "../../img/header/user.svg"
import "./AccountPage.css"
import {useNavigate} from "react-router-dom";

const AccountPage = () => {

    const navigate = useNavigate()

    const OpenEditPage = () => {
        navigate("/account/edit")
        window.scrollBy(0, -10000)
    }

    return (
        <div>
            <Header/>
            <div className="container">
                <div className="account_main_page">
                    <div className="account_page">
                        <div className="account_info">
                            <img src={UserLogo} alt="user-logo"/>
                            <div className="user_locate">
                                <h1 className="user_name">Имя Аккаунта</h1>
                                <span>Страна, город</span>
                            </div>
                        </div>
                        <div className="account-block">
                            <span>Интересы:</span>
                        </div>
                        <div className="account-block">
                            <span>Обо мне:</span>
                        </div>
                        <div className="account-block">
                            <span>Любимые блюда:</span>
                        </div>
                        <div className="account-block">
                            <span>Добавлено рецептов: {}</span>
                        </div>
                    </div>
                    <div className="change_info">
                        <a onClick={OpenEditPage}>Редактировать профиль</a>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default AccountPage