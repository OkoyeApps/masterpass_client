import React from 'react';
import './layout.css';
import logo from '../assets/image/MastaPass-logo.svg'

const Layout = (props) => {
    return (
        <div className="container-fluid res_wrapper">
            <div className="row">
                <div className="col-md-12 header_ layout_side_spacing">
                    <img src={logo} alt="..." className='my-2 ml-2' />
                </div>
                <div className="col-md-12">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Layout