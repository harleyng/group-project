import React, { useEffect } from 'react'
import $ from 'jquery'
<<<<<<< HEAD:src/pages/Components/layout/Header.jsx
import firebase from '../../../backend/firebase'
=======
import searchIcon from '../../assets/img/search-solid.svg'

>>>>>>> master:src/components/layouts/Header.jsx
const Header = () => {
    const handleScroll = () => {
        if($(window).scrollTop() > 50) {
            $(".header").addClass("header-active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".header").removeClass("header-active");
        }
    }
<<<<<<< HEAD:src/pages/Components/layout/Header.jsx
    const handleSignOut = () => {
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            console.log('sign out')
          }).catch((error) => {
            // An error happened.
        });
    }
=======

>>>>>>> master:src/components/layouts/Header.jsx
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
        window.removeEventListener("scroll", handleScroll);
        }
    }, [])
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
                    <div className="col-3 text-right" id="navLeft" style={{color:'white'}}>
                        <a href="/login"><button className="navSignIn"><span>SIGN IN</span></button></a>
                        <button className="navSignOut" onClick={handleSignOut}><span>SIGN OUT</span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header


