import React,  { Component } from "react";
import { HouseList } from './Components/HousesList';

class App extends Component {
    render(){
        return (
            <div>
                <HouseList props={{test: data}} />
            </div>
        )
    }
}