import Slider from "react-slick";
import "../Slider/slick.css"
import "../Slider/SliderSlick.css"
import slider1 from "../../../img/slider1.png"
import slider2 from "../../../img/slider2.jpg"
import slider3 from "../../../img/slider3.jpg"
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
        <div>
            <Slider {...settings}>
                <div>
                    <img className="sliderImg" src={slider1}/>
                </div>
                <div>
                    <img className="sliderImg" src={slider2}/>
                </div>
                <div>
                    <img className="sliderImg" src={slider3}/>
                </div>
            </Slider>
        </div>
    )
}
export default SliderSlick