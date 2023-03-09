import Slider from "react-slick";
import "../Slider/slick.css"
import "../Slider/SliderSlick.css"
import slider1 from "../../../img/slider1.png"
import slider2 from "../../../img/slider2.jpg"
import slider3 from "../../../img/slider3.jpg"
import {Link} from "react-router-dom";
const SliderSlick = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false
    };
    return (
        <div className="slider-slick">
            <Slider {...settings}>
                <div>
                    <img className="sliderImg" src={slider1} alt="slider"/>
                    <div className="desc-slider">
                        <p>Салат цезарь!</p>
                        <Link to="/recipe/6409735ed6b361cdf7554dba">Смотреть</Link>
                    </div>
                </div>
                <div>
                    <img className="sliderImg" src={slider2} alt="slider"/>
                    <div className="desc-slider">
                        <p>Свежая выпечка!</p>
                        <Link to="/recipes/vypechka">Смотреть</Link>
                    </div>
                </div>
                <div>
                    <img className="sliderImg" src={slider3} alt="slider"/>
                    <div className="desc-slider">
                        <p className="black">Самая вкусная пицца за 30 минут!</p>
                        <Link to="/recipe/64058c96206494fa559bcf89" className="black">Смотреть</Link>
                    </div>
                </div>
            </Slider>
        </div>
    )
}
export default SliderSlick