import React, {Component} from 'react';
import Home from "./Home";
import Header from "../components/Header/Header";
import SubHeader from "../components/Header/SubHeader/SubHeader";

export class Layout extends Component {
    render() {
        return (
            <div>
                <Header/>
                <SubHeader/>
                <Home/>
            </div>
        );
    }
}
