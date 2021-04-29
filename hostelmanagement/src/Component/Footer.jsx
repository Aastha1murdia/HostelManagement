import React from 'react';
import {NavLink} from 'react-router-dom';
import './Footer.css';
function Footer() {
    return (
        <>
            <div className="footer">
                <div className="">
                    <h4 className="footerheading">About Us</h4>
                    <p>Amet labore ut eiusmod ipsum in sint dolor </p>
                    <p>Amet labore ut eiusmod ipsum in sint dolor </p>
                    <p className="copyright">HMS©2021</p>
                </div>
                <div>
                    <h4 className="footerheading">Follow Us</h4>
                    <a  href="/" className="socialmedia">
                        <i className="fa-2x  fab fa-facebook-f"></i>
                    </a> 
                    <a  href="/" className="socialmedia">
                        <i className="fa-2x fab fa-instagram"></i>
                    </a> 
                    <a  href="/" className="socialmedia">
                        <i className="fa-2x fab fa-twitter-square"></i>
                    </a> 
                    <a  href="/" className="socialmedia">
                        <i className="fa-2x fab fa-linkedin"></i>
                    </a> 
                </div>
                <div>
                    <h4 className="footerheading">Address</h4>
                    <p>College Of Technology and Engineering Campus,</p>
                    <p>University Rd,Pahada,Udaipur,</p>
                    <p>Rajasthan,313001</p>
                </div>
            
                {/* <div className="line">

                </div> */}
               
            </div>  
            
            
        </>
    )
}

export default Footer
