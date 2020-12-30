import React, { Component } from 'react'
import NavBar from '../../pages/Components/NavBar/NavBar';
import Footer from '../../pages/Components/Footer/Footer'

export default class MasterLayout extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                {this.props.children}
                <Footer/>
            </div>
        )
    }
}
