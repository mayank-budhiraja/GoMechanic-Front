import React from 'react'
import './Footer.css';

function Footer() {
    return (
        <div>
        <div className="container-fluid">
            <div className="row prefooter-style">
                    <div className="col">
                        <h5 className="upper">About us</h5>
                        <ul className="prefooter-content"> 
                            <li>Company</li> 
                            <li>Blog</li> 
                            <li>FAQs</li> 
                            <li>Contact Us</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                            <li> GoMechanic Partners</li>
                        </ul>
                    </div>

                    <div className="col">
                        <h5 className="upper">Our Services</h5>
                        <ul className="prefooter-content"> 
                            <li>Car Service</li> 
                            <li>Car Cleaning</li> 
                            <li>Wheel Alignment</li> 
                            <li>Balancing</li>
                            <li>Custom Repairs</li>
                            <li>Denting & Painting</li>
                            <li>Accessories</li>
                        </ul>
                    </div>

                    <div className="col">
                        <h5 className="upper">Luxury Brands</h5>
                        <ul className="prefooter-content"> 
                            <li>Mercedes</li> 
                            <li>BMW</li> 
                            <li>Audi</li> 
                            <li>Volvo</li>
                            <li>Mitsubishi</li>
                            <li>Jaguar</li>
                            <li>Porsche</li>
                        </ul>
                    </div>
                    
                    <div className="col">
                            <h5 className="upper">Popular Brands</h5>
                            <ul className="prefooter-content"> 
                            <li>Maruti Suzuki</li>
                            <li>Hyundai</li>
                            <li>Honda</li>
                            <li>Toyota</li>
                            <li>Tata</li>
                            <li>Mahindra</li>
                            <li>Chevrolet</li>
                            </ul>
                    </div>

                    <div className="col">
                            <h5 className="upper">Popular Links</h5>
                            <ul className="prefooter-content"> 
                            <li>Garage near me in Subhash </li>
                            <li>Garage near me in Sohna Road</li>
                            <li>Garage near me in DLF Phase 2</li>
                            <li>Garage near me in Gold Course</li>
                            <li>Garage near me in DLF Phase 4</li>
                            <li>Garage near me in Lajpat Nagar</li>
                            <li>Garage near me in Lodhi Road</li>
                            </ul>
                    </div>

            </div>
        </div>

        <div className="container-fluid footer-bg">
            <div className="row">
                <div className="col-md-5 col-sm-5 col-xs-  logo-footer">
                <img src="https://gomechanic.in/assets/img/advertisepage/gomechanic-logo-white-new.png" 
                    className="logo-footer" alt="" />
                    <p className="go-address">Aute occaecat id sunt occaecat commodo. 
                                    Nisi veniam qui incididunt 
                                    adipisicing laborum exercitation officia aute cillum. </p>

                </div>

                <div className="col-md-4 col-sm-2 col-xs-2 footer-info">
                    <div className="row">
                        <div className="col-sm-5">
                            <ul className="prefooter-content">
                                <li>Email ID</li>
                                <li>Phone Number</li>
                                <li>Working Days</li>
                                <li>Hours of Operation</li>
                            </ul>
                        </div>
                        <div className="col-sm-5">
                            <ul className="prefooter-content">
                                <li>Email ID</li>
                                <li>Phone Number</li>
                                <li>Working Days</li>
                                <li>Hours of Operation</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-md-2 col-sm-2 col-xs-2 ">
                <h5 className="upper footer-android-head">Download The App</h5>
                    <ul>
                    <img src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png" 
                    className="footer-android-btn" alt="" />
                    </ul>
                </div>
            </div>
        </div>

    </div>
    );
}

export default Footer;
