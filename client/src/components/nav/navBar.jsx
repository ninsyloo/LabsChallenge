import React, {useState} from 'react';
//import {Button} from './Button';
//import './NavBar.css';
import {Link} from 'react-router-dom';
//import Dropdown from './Dropdown'

export default function NavBar(){
    
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = ()=>setClick(false)

    return(
        <>
        <nav className='navbar'>
            <Link to='/' className='navbar-logo'>CHALLENGE</Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click? 'fas fa-times': 'fas fa-bars'}/>
            </div>
            <ul className={click ? 'nav-menu class': 'nav-menu'}>
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