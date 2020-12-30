import React, { Component } from 'react'
import Header from '../../pages/Components/layout/Header';
import Footer from '../../pages/Components/layout/Footer'

export default class MasterLayout extends Component {
    render() {
        return (
            <div>
                <Header/>
                {this.props.children}
                <Footer/>
            </div>
        )
    }
}
