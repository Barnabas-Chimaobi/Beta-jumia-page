import React, {Component} from 'react'
import {BrowserRouter, Link} from 'react-router-dom'
import photo1 from './image/jumia anim1.png'
import photo4 from './image/jumia anim2.png'
import photo from './image/Jumiaprime.jpg'
import photo2 from './image/jumiatiny1.png'
import photo3 from './image/jumiatiny2.png'

class Navigationbc extends Component {
  render () {
    return (
      <div className='navcontainerbc'>
        <hr></hr>
      <div className='subnav1'>
       <div className='no1bc'>
       <p className='mainno1bc'>FREE DELIVERY</p>
        <div className='subno1bc'>
        <ul>
         <li>Jumia Prime</li>
         <li>Other Services</li>
         <li>Electricity Bills</li>
         <li>Internet Bills</li>
         <li>TV Subscription</li>
        </ul>
         
        </div>

       </div>
       <div className='no2bc'>
       <p className='mainno2bc'>PHONES & TABLETS</p>
        <div className='subno2bc'>
          <div>
            Nokia<br/>
            Tecno<br/>
            Samsung<br/>
            Gionee<br/>
            Itel<br/>
            Kingfly<br/>
            Huawei
            </div>
        </div>

       </div>
       <div className='no3bc'>
       <p className='mainno3bc'>COMPUTING</p>
        <div className='subno3bc'>
         <ul>
           <li>Dell</li>
           <li>HP</li>
           <li>Lenovo</li>
           <li>Apples</li>
           <li>Pavilion</li>
         </ul>
        </div>

       </div>
       <div className='no4bc'>
       <p className='mainno4bc'>ELECTRONICS</p>
        <div className='subno4bc'>
         <ul>
           <li>TV Set</li>
           <li>Home Theater</li>
           <li>DVD</li>
           <li>Video Game</li>
           <li>Speakers</li>
           <li>Fan</li>
         </ul>
        </div>

       </div>
       <div className='no5bc'>
       <p className='mainno5bc'>HOME & OFFICE</p>
        <div className='subno5bc'>
          <ul>
            <li>Home Divider</li>
            <li>Kitchen Unit</li>
            <li>Office Chair</li>
            <li>Tables</li>
            <li>Stationeries</li>

          </ul>
        </div>
       </div>
       <div className='no6bc'>
       <p className='mainno6bc'>FASHION</p>
        <div className='subno6bc'>
        <ul>
            <li>Clothing</li>
            <li>Shoe</li>
            <li>Jewelry</li>
            <li>Handbag</li>
            <li>Costumes</li>

          </ul>
        </div>

       </div>
       <div className='no7bc'>
       <p className='mainno7bc'>HEALTH & BEAUTY</p>
        <div className='subno7bc'>
        <ul>
            <li>Sports</li>
            <li>Nutrition</li>
            <li>Oral Drug</li>
            <li>Medications</li>
            <li>Skin care</li>

          </ul>
        </div>

       </div>
       <div className='no8bc'>
       <p className='mainno8bc'>GAMING</p>
        <div className='subno8bc'>
        <ul>
            <li>NINTENDO</li>
            <li>XBOX360</li>
            <li>XBOX ONE</li>
            <li>PLAYSTATION4</li>
            <li>PES 2017</li>

          </ul>
        </div>

       </div>
       <div className='no9bc'>
       <p className='mainno9bc'>GROCERY</p>
        <div className='subno9bc'>
        <ul>
            <li>Food</li>
            <li>Snacks</li>
            <li>Cooking Utensils</li>
            <li>Beverages</li>
            <li>Toiletries</li>

          </ul>
        </div>

       </div>
       <div className='no10bc'>
       <p className='mainno10bc'>GLOBAL STORE</p>
        <div className='subno10bc'>
        <ul>
            <li>Home Divider</li>
            <li>Kitchen Unit</li>
            <li>Office Chair</li>
            <li>Tables</li>
            <li>Stationeries</li>

          </ul>
        </div>

       </div>
       <div className='no11bc'>
       <p className='mainno11bc'>BABY PRODUCTS</p>
        <div className='subno11bc'>
        <ul>
            <li>Baby Boys</li>
            <li>Baby Girls</li>
            <li>Baby Nursery</li>
            <li>Feeding</li>
            <li>Diapering</li>

          </ul>
        </div>

       </div>
       <div className='no12bc'>
       <p className='mainno12bc'>OTHER CATEGORIES</p>
        <div className='subno12bc'>
        <ul>
            <li>Automobile</li>
            <li>Livestock</li>
            <li>Livestock</li>
            <li>Garden</li>
            <li>Musical Instruments</li>

          </ul>
        </div>

       </div>
       </div>

       <div className='subnav2'>
       
      
       </div>

       <div className='subnav3'>
       <div className='sub1'>
       <img src={photo2} height='20px'/>
       <h5>SELL ON JUMIA <br></br>Millions Of Monthly Visitors</h5>
       </div>
       <div className='sub2'>
       <img src={photo3} height='24px'></img>
       <h5>PAY ON DELIVERY<br></br>After Checking the Product</h5>
       </div>
       <div className='sub2'>
       <img src={photo3} height='24px'></img>
       <h5>EASY RETURN<br></br>Quick Refund</h5>
       </div>
       <img src={photo} height='194px' width='199px'></img>
       
       </div>
        
      </div>
    )
  }
}

export default Navigationbc