import React from 'react';
import { SocialIcon } from 'react-social-icons';
import "./Footer.css"
const Footer = () => {
    return(
        <footer>
            <div className="first-block">
                <p className="name-footer">КрошкиМякиш</p>
                <p>Все права защищены</p>
            </div>
            <div className="second-block">
                <div className="list">
                    <p>Все рецепты</p>
                    <p>Новые рецепты</p>
                    <p>Бульоны и супы</p>
                    <p>Горячие блюда</p>
                    <p>Салаты</p>
                </div>
                <div className="list">
                    <p>Закуски</p>
                    <p>Выпечка</p>
                    <p>Десерты</p>
                    <p>Соусы</p>
                    <p>Домашние напитки</p>
                </div>
                <div className="list">
                    <p>О нас</p>
                    <p>FAQ</p>
                    <p>Связать с нами</p>
                </div>
            </div>
            <div className="third-block">
                <p>Мы в соц-сетях:</p>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a><SocialIcon network="vk" bgColor="#509E2F" /></a>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a><SocialIcon network="google" bgColor="#509E2F" /></a>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a><SocialIcon network="whatsapp" bgColor="#509E2F" /></a>
            </div>
        </footer>
    )
}
export default Footer