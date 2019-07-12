import React, {Component} from "react" 
import {Link, Redirect, BrowserRouter} from "react-router-dom"
import logofan from "./images/fanext.png"

class Rowaext extends Component {
    render(){
        return (
            <div>
                <img src = {logofan} alt = "images"/>
            </div>
            
        )
    }
}
export default Rowaext;