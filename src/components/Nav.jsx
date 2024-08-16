import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>

            <Link to='/users/ronaldo'>Ronaldo</Link>
            <Link to='/users/messi'>Messi</Link>
            <Link to='/users/david'>David</Link>

        </nav>
    );
}

export default Nav;
