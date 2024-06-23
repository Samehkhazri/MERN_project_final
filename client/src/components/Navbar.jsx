import { useRef } from 'react';
import "../styles/catheg.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
import "../styles/main.css";
import user from '../assets/utilisateur.png'
import Logout from '../components/Logout'
function Navbar({loggedUser}) {
    const navRef = useRef();
    const ShowNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    return (
        <header className='navbar-home'>
                <Link to="/"><img src="/images/logo.png" alt="" className='logod'/></Link>
                <nav ref={navRef} className='link'>
                <Link to="/shop" className='nav-link'>Shop</Link>
                <Link to="/blog" className='nav-link'>Blog</Link>
                <Link to="/event" className='nav-link'>Event</Link>
                {/* <Link to="/login" className='nav-link'>Login</Link> */}
                {/*  */}
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
                <div className='search-bar'>
                    <form action="" className='ic' style={{color:'white'}}>
                        <input type="text" name='search' id='srch' className='form-control inputt' placeholder='Search' />
                        <a href="#cart" className="icon" ><img src="/images/chercher2.png" alt="" /></a>
                        <a href="#cart" className="icon"><img src="/images/panier2.png" alt="" /></a>
                    </form>
                </div>
                <button className="nav-btn nav-close-btn" onClick={ShowNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className='nav-btn' onClick={ShowNavbar}>
                <FaBars />
            </button>
        </header>
    )
}
export default Navbar