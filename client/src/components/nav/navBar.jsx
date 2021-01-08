import React, {useState} from 'react';
import './navBar.css';
import {Link} from 'react-router-dom';

export default function NavBar(){
    
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = ()=>setClick(false);

    return(
        <>
        <nav className='navbar'>
            <Link to='/' className='navbar-logo'>
            <i class="fab fa-hire-a-helper"/>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click? 'fas fa-times': 'fas fa-bars'}/>
            </div>
            <ul className={click ? 'nav-menu active': 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' 
                    className='nav-links' 
                    onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/About' 
                    className='nav-links' 
                    onClick={closeMobileMenu}>
                        About
                    </Link>
                </li>
            </ul>
        </nav>
        </>
    )
}