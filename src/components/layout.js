import React from 'react';
import './layout.css';
import logo from '../assets/image/MastaPass-logo.svg'
import {Link} from 'react-router-dom';

const Layout = (props) => {
    return (
        <div className="container-fluid res_wrapper">
            <div className="row">
                <Link to="/events" className="col-md-12 header_ layout_side_spacing">
                    <img src={logo} alt="..." className='my-2 ml-2' />
                </Link>
                <div className="col-md-12">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Layout