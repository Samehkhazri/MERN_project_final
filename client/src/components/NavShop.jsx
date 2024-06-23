import { useRef, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/navShop.css';

import user from '../assets/utilisateur.png'
import Logout from '../components/Logout'
const NavShop = ({loggedUser}) => {
    const navRef = useRef();
    const [cartstatus, setCartStatus] = useState(JSON.parse(localStorage.getItem('cart')));
   

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav');
    };
   
    return (
        <div>
            <header className="navbar">
                <Link to="/">
                    <img src="/images/logo2.png" className='logod' alt="" />
                </Link>
                <nav ref={navRef} className="link">
                    <Link to="/shop" className='nav-link'>Shop</Link>
                    <Link to="/blog" className='nav-link'>Blog</Link>
                    <Link to="/event" className='nav-link'>Event</Link>
                    
                    {loggedUser ? (
              <>
                <p className="nav-link">{loggedUser.firstName} </p>
                <Logout />
                {loggedUser.role === "admin" ? (
                  <Link to={"/admin/dashboard"}>
                     
                     <img className="nav-link" src={user} width={50}/>
                    
                  </Link>
                ) : (
                  null
                )
              }
              </>
            ) : (
              <>
               <Link to="/login" className='nav-link'>Login</Link>
              </>
            )}
                {/*  */}
            
                    <div className="search-bar" style={{ marginLeft: '95%' }}>
                        {/* <form action="" className="ic"> */}
                            <Link to="/cart" className="icon">
                                <img src='/images/panier.png' alt="" />
                            </Link>
                            {cartstatus && (<p>{cartstatus.length}</p>)}
                        {/* </form> */}
                    </div>
                    <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                        <FaTimes />
                    </button>
                </nav>
                <button className="nav-btn" onClick={showNavbar}>
                    <FaBars />
                </button>
            </header>
            
        </div>
    );
};

export default NavShop;
