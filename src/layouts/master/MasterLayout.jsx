import React, { Component } from 'react'
import Header from '../../components/layouts/Header';
import Footer from '../../components/layouts/Footer'

export default class MasterLayout extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div style={{height:"100vh"}}>
                    {this.props.children}
                </div>
                <Footer/>
            </div>
        )
    }
}


