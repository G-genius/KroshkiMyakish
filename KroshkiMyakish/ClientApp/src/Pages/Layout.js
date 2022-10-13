import React, {Component} from 'react';
import Home from "./Home";
import Header from "../components/Header/Header";
import SubHeader from "../components/Header/SubHeader/SubHeader";
import SliderSlick from "../components/Header/Slider/SliderSlick";
import Footer from "../components/Footer/Footer";

export class Layout extends Component {
    render() {
        return (
            <div>
                <Header/>
                <SubHeader/>
                <SliderSlick/>
                <Home/>
                <Footer/>
            </div>
        );
    }
}
