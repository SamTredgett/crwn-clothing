import * as React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Logo from './crown.svg';
import './navigation-bar.styles.scss';
const NavigationBar = () => {

    return (
        <>
            <div className='navigation'>
                {/* Build out nav bar with links here */}
                <Link className='logo-container' to={'/'}>
                    <img src={Logo} alt="" />
                </Link>

                <div className="nav-links-container">
                    <Link className='nav-link' to={'/shop'}>
                        SHOP
                        </Link>
                </div>
            </div>
            <Outlet />
        </>
    )
}


export default NavigationBar;