import React, { Component } from 'react'
import facebookLogo from '../../assets/img/facebook.png'
import instagramLogo from '../../assets/img/insta.png'
import youtubeLogo from '../../assets/img/youtube.png'
import githubLogo from '../../assets/img/github.png'
import Logo from '../../assets/img/ticketland-logo.png'

const Footer = () => {
    return (
        <div className="footer">
                <div className="socialContact">
                    <div className="container">
                        <div className="row">
                            <div className="col-3" id="footerTitle">
                                <div className="row">
                                    <div className="col-3">
                                        <div className="socialLogo" ><a href="#"><img className="Logo" src={Logo} alt="logo"/></a></div>
                                    </div>
                                        <div className="col-6">
                                                <div className="footerTitle"><span>TICKETLAND VIETNAM</span></div>
                                                <div className="footerTitle-2"><span> © 2020 TICKETLAND Cineplex</span></div>
                                        </div>
                                </div>
                            </div>

                        <div className="col-3">
                            <div className="footerTitle"><span>ABOUT US</span></div>
                            <div class="col-6">
                                    <ul class="list-footer">
                                        <li><a href="#" target="_blank" rel="noreferrer">ABOUT US</a></li>
                                        <li><a href="#" target="_blank" rel="noreferrer">GIFT CARD</a></li>
                                        <li><a href="#" target="_blank" rel="noreferrer">CAREER</a></li>
                                    </ul>
                            </div>
                        </div>

                        <div className="col-3">
                            <div className="footerTitle"><span>CUSTOMER SERVICE</span></div>
                            <div class="col-6">
                                    <ul class="list-footer">
                                        <li><p>HOTLINE : <span className="list-footer-info">086 933393</span></p></li>
                                        <li><p>EMAIL SUPPORT: <span className="list-footer-info">ticketland@usth.vn</span></p></li>
                                        <li><p>ADDRESS : <span className="list-footer-info">58 Dao Tan, Ba Dinh, Ha Noi</span></p></li>
                                        <li><p>WORKING HOURS : <span className="list-footer-info">8 A.M - 6 P.M </span></p></li>
                                    </ul>
                            </div>
                        </div>

                        <div className="col-3">
                        <div className="footerTitle"><span>FOLLOW US</span></div>
                            <div className="row pl-3 pt-2">
                                <div className="socialLogo" ><a href="#"><img className="social-Logo" src={facebookLogo} alt="social-facebook"/></a></div>
                                <div className="socialLogo" ><a href="#"><img className="social-Logo" src={instagramLogo} alt="social-instagram"/></a></div>
                                <div className="socialLogo" ><a href="#"><img className="social-Logo" src={youtubeLogo} alt="social-youtube"/></a></div>
                                <div className="socialLogo" ><a href="#"><img className="social-Logo" src={githubLogo} alt="social-github"/></a></div>
                            </div>
                        </div>
                        </div>   
                    </div>
                </div>
            </div>
    )
}

export default Footer

