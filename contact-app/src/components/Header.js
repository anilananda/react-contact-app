import React from 'react';
import funny_hi from '../images/funny_hi.gif';

const Header = () =>
{
    return (
        <div>
            <nav className="navbar navbar-light bg-success">
                <div className="container-fluid">
                    <h1 className="text-white">Contact Application : ReactJs</h1>
                    <img src={funny_hi} alt='hi' style={{ height: '155px' }} />
                </div>
            </nav>
        </div>
    );
}

export default Header;