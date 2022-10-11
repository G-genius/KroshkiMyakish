import React, {Component} from 'react';
import Home from "./Home";
import Header from "./Header/Header";

export class Layout extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Home/>
            </div>
        );
    }
}
