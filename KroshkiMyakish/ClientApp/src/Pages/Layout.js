import React, {Component} from 'react';
import Header from "../components/Header/Header";
import SliderSlick from "../components/Header/Slider/SliderSlick";
import Footer from "../components/Footer/Footer";
import Main from "../components/Main";

export class Layout extends Component {
    render() {
        return (
            <div>
                <Header/>
                <SliderSlick/>
                <Main/>
                <Footer/>
            </div>
        );
    }
}
