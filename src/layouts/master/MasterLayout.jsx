import React from 'react'
import Header from '../../components/layouts/Header';
import Footer from '../../components/layouts/Footer'

const MasterLayout = props => {
    return (
        <div>
            <Header/>
            <div style={{minHeight:"100vh"}}>
                {props.children}
            </div>
            <Footer/>
        </div>
    )
}

export default MasterLayout


