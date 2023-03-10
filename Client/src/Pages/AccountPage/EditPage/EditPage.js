import "./EditPage.css"
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import FileBase64 from 'react-filebase64';
import React, {useContext, useState} from "react";
import {Context} from "../../../index";
const EditPage = () => {
    const [photo, setPhoto] = useState('')
    const [interests, setInterests] = useState('')
    const [about, setAbout] = useState('')
    const [favoriteFood, setFavoriteFood] = useState('')
    const {store} = useContext(Context)
    const updateAccount = () => {
        store.updateAccount(photo, interests, about, favoriteFood)
    }
    return (
        <div>
            <Header/>
            <div className="container">
                <div className="edit_page">
                    <h1>Редактирования профиля</h1>
                    <div className="account-block">
                        <span>Фотография:</span>
                        <FileBase64/>
                    </div>
                    {/*<div className="account-block">*/}
                    {/*    <span>Страна:</span>*/}
                    {/*    <input type="text"/>*/}
                    {/*</div>*/}
                    {/*<div className="account-block">*/}
                    {/*    <span>Город:</span>*/}
                    {/*    <input type="text"/>*/}
                    {/*</div>*/}
                    <div className="account-block">
                        <span>Интересы:</span>
                        <textarea name="" id="" cols="10" rows="5"
                                  onChange={e => setInterests(e.target.value)}
                                  value={interests}></textarea>
                    </div>
                    <div className="account-block">
                        <span>Обо мне:</span>
                        <textarea name="" id="" cols="30" rows="5"
                                  onChange={e => setAbout(e.target.value)}
                                  value={about}></textarea>
                    </div>
                    <div className="account-block">
                        <span>Любимые блюда:</span>
                        <textarea name="" id="" cols="30" rows="5"
                                  onChange={e => setFavoriteFood(e.target.value)}
                                  value={favoriteFood}></textarea>
                    </div>
                    <div>
                        <button className="logoutBtn" onClick={updateAccount}>Сохранить</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default EditPage