import React ,{Component} from 'react'
import logo from './images/row1.png';
import logof from './images/featured.png';
import logo1 from './images/feat1.png';
import logo2 from './images/feat2.png';
import logo3 from './images/featt.png';
import logo4 from './images/feat4.png';
import logo5 from './images/feat5.png';
import logo6 from './images/feat6.png';
import {Link} from "react-router-dom";

class Row1 extends Component {
    render (){
        return (
            <div className='oneng'>
            <div className="rowc">  
            <img src={logof} alt = "images"/>          
            <Link to ="/Extphones">
            <img src={logo1} alt = "images"/>
            </Link>
            <Link to="/teli">
            <img src={logo2} alt = "images"/>
            </Link>
            <Link to="/bags">
            <img src={logo3} alt = "images"/>
            </Link>
            <Link to="/bae">
            <img src={logo4} alt = "images"/>
            </Link>
            <Link to="/wears">
            <img src={logo5} alt = "images"/>
            </Link>
            <img src={logo6} alt = "images"/>
            </div>
            <br/>
            </div>
        )
    }
}
export default Row1
