import React from 'react';
import {SocialIcon} from 'react-social-icons';
import "./Footer.css"

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="first-block">
                    <p className="name-footer">Food Craft</p>
                    <p>Все права защищены</p>
                </div>
                <div className="second-block">
                    <div className="list">
                        <a href="/"><p>Все рецепты</p></a>
                        <a href="recipes/soups"><p>Бульоны и супы</p></a>
                        <a href="recipes/goryachie_bliuda"><p>Горячие блюда</p></a>
                        <a href="recipes/salad"><p>Салаты</p></a>
                        <a href="recipes/zakuski"><p>Закуски</p></a>
                    </div>
                    <div className="list">
                        <a href="recipes/vypechka"><p>Выпечка</p></a>
                        <a href="recipes/dessert"><p>Десерты</p></a>
                        <a href="recipes/sousy"><p>Соусы</p></a>
                        <a href="recipes/Домашние%20напитки"><p>Домашние напитки</p></a>
                    </div>
                    {/*<div className="list">*/}
                    {/*    <p>О нас</p>*/}
                    {/*    <p>FAQ</p>*/}
                    {/*    <p>Связать с нами</p>*/}
                    {/*</div>*/}
                </div>
                <div className="third-block">
                    <p>Мы в соц-сетях:</p>
                    <SocialIcon network="vk" bgColor="#509E2F"/>
                    <SocialIcon network="google" bgColor="#509E2F"/>
                    <SocialIcon network="whatsapp" bgColor="#509E2F"/>
                </div>
            </div>
        </footer>
    )
}
export default Footer