import React from 'react'
import { Component } from 'react';
import './Payment.css';
class Payment extends Component{

        constructor(props){
            super(props);
            this.state={
                card_name:"",
                card_no:"",
                date:"",
                Eyear:"",
                cvc:""
            }
        }
        handlePayment=(event)=>{
            this.setState({[event.target.name]:event.target.value});
        }
        onPay=(event)=>{
             alert(`Thank you for booking a room in our Hostel`);
            event.preventDefault();
        }
        
        render() {
            return(
            <>
            <div className="payment_container">
              <h className="payment_head">Payment</h>
                  <form>
                      <div className="card_details icon-relative">
                          <label htmlFor="card_name">Card Holder:</label>
                          <input type="text" id="card_name" name="card_name" placeholder="Card Holder Name"  autoComplete="off" onChange={this.handlePayment} value={this.state.card_name}/>
                          <i className="fas fa-user"></i>
                      </div>
                      <div className="card_details icon-relative">
                          <label htmlFor="card_no">Card Number:</label>
                          <input type="text" id="card_no" name="card_no" placeholder="Card Number" autoComplete="off" onChange={this.handlePayment} value={this.state.card_no}/>
                          <i className="fas fa-credit-card"></i>
                      </div>  
                      <div className="date_cvc icon-relative">
                                  <label htmlFor="date">Expiry Date:</label>
                                  <i className="far fa-calendar-alt"></i>
                                  <select onChange={this.handlePayment} value={this.state.date} name="date" id="date">
                                      <option value="1">1</option>
                                      <option value="2">2</option>
                                      <option value="3">3</option>
                                      <option value="4">4</option>
                                      <option value="5">5</option>
                                      <option value="6">6</option>
                                      <option value="7">7</option>
                                      <option value="8">8</option>
                                      <option value="9">9</option>
                                      <option value="10">10</option>
                                      <option value="11">11</option>
                                      <option value="12">12</option>
                                  </select>
                                  <select onChange={this.handlePayment} value={this.state.Eyear}  name="Eyear" id="Eyear">
                                      <option value="2021">2021</option>
                                      <option value="2022">2022</option>
                                      <option value="2023">2023</option>
                                      <option value="2024">2024</option>
                                      <option value="2025">2025</option>
                                      <option value="2026">2026</option>
                                      <option value="2027">2027</option>
                                  </select>
                              </div>
                              <div className="card_arrange">
                                  <div className="date_cvc icon-relative">
                                      <label htmlFor="cvc">CVC:</label>
                                      <input type="password" id="cvc" name="cvc" placeholder="000" autoComplete="off " maxlength="3" onChange={this.handlePayment} value={this.state.cvc}/>
                                      <i className="fas fa-lock"></i>
                                  </div>
                                  <div>
                                      <img src="./images/img28.png" alt="" width="110px" height="30px" className="card_img"/>
                                      <img src="./images/img29.png" alt="" width="50px" height="30px" className="card_img"/>
                                  </div>
                              </div>
                              
                              {/* <i className="fa fa-cc-visa"></i>
                              <i className="fa fa-cc-paypal"></i>
                              <i className="fa fa-cc-mastercard"></i> */}
                              <input type="submit" value="Pay" id="pay"/>
                  </form>
              </div>  
          </>

        )
        

                            }
}

export default Payment
