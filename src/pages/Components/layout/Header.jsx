import React, { Component } from 'react'
import searchIcon from '../../../assets/img/search-solid.svg'

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="row">
                    <div className="col-3 text-left" id="navLeft">
                        <div className="navTitle"><a href="#"><span>TICKETLAND</span></a></div>
                    </div>
                    <div className="col-6 text-center" id="navCenter">
                        <ul className="list-inline">
                            {/* <li className="menu-item"><a href=""><img className="search-icon" src={searchIcon} alt="logo"/></a></li> */}
                            <li className="menu-item"><a href=""><span>HOME</span></a></li>
                            <li className="menu-item"><a href=""><span>BOOKING</span></a></li>
                            <li className="menu-item"><a href=""><span>ABOUT</span></a></li>
                        </ul>
                    </div>
                    <div className="col-3 text-right" id="navLeft">
                        <div className="navSignin"><span>SIGN IN</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header


