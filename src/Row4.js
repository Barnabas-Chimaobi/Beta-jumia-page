import React, {Component} from 'react'
import logo3 from "./images/deal1.png";
import logo4 from "./images/deal2.png";
import logo5 from "./images/deal3.png";
import logo6 from "./images/deal4.png";
import logo7 from "./images/deal5.png";
import logo8 from "./images/deal6.png";

class Row4 extends Component {
    render(){
        return (
            <div className= "rowc">
            <img src ={logo3} alt = "images" /><img src ={logo4} alt = "images" />
            <img src ={logo5} alt = "images" /><img src ={logo6} alt = "images" />
            <img src ={logo7} alt = "images" /><img src ={logo8} alt = "images" />
            </div>
        )
    }
}    
export default Row4