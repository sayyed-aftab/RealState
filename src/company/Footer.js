import React from 'react'
import './Footer.css';

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="col">
                    <h1>ApnaGhar</h1>
                    <h4>Contact Us:</h4>
                    <p><strong>Address:</strong> Zara Residency Memon Wada Rd, </p>
                    <p>Bhendi Bazaar Mumbai 400003</p>
                    <p><strong>Phone No:</strong> 9142002770</p>
                    <p><strong>Github:</strong> <a href="https://github.com/sayyed-aftab">sayyed-aftab</a></p>
                    <div className="follow">
                        <br></br>
                        <h4>Follow On </h4>
                        <div className="icon">
                        <i className="fab fa-whatsapp"></i>
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-twitter"></i>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <h4>About</h4>
                    <a href="#">About Us</a>
                    <a href="#">Terms & Conditions</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Property Info</a>
                    <a href="#">Contacts Us</a>
                </div>
                <div className="col">
                    <h4>Accounts</h4>
                    <a href="#">Sign In</a>
                    <a href="#">Sell My property</a>
                    <a href="#">View Property</a>
                    <a href="#">My Favorite List</a>
                    <a href="#">Support</a>
                </div>
                <div className="col Install">
                    <h4>Install & Payment</h4>
                    <p>From App Store Or Play Store</p>
                    <div className="row">
                        <img src="apps.png" alt="" />
                        <img src="plays.png" alt="" />
                    </div>
                    <div className="payment">
                        <h2>Payment Methods</h2>
                        <img src="paym.png" alt="" />
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;