import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from "../../Imgs/navlogo.png"
import "./Navbar.scss"

function Navbar() {
    return (
        <nav>
            <div className='navbar'>
                <div className='navlogo'>
                    <Link to={"/"}><img alt='foto' src={logo} /></Link>
                </div>
                <div className='nav_page'>
                    <NavLink className="navlink" to={"/"}>Home</NavLink>
                    <NavLink className="navlink" to={"/addpage"}>Add</NavLink>
                </div>
                <div className='nav_elemts'>
                    <div className='nav_icon'>
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <i class="fa-solid fa-basket-shopping"></i>
                    </div>
                    <button>Buy Now</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar