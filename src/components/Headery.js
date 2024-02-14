import React from 'react'
import "../components/style.css"
import logo from '../images/logo.svg'

function Headery() {
    return (
        <div>
        <header className="header">
            <div className='logo_image'>
                <a href="#">
                    <img className="logo" alt='logo' loading="lazy" src={logo} />
                </a>
            </div>

            <nav className="nav">
                <a href="#how-hearify-works" className="nav-link">How it works</a>
                <a href="#" className="nav-link">Blog</a>
                <a href="#" className="nav-link">Pricing</a>
                <a href="#" className="nav-link">FAQ</a>
                <a href="#footer" className="nav-link">Contacts</a>
            </nav>

            <div className="authentication">
                <a href="https://app.hearify.org/login" className="login">Log in</a>
                <a href="https://app.hearify.org/register" className="button-link">
                    <button className="btn">sign up</button>
                </a>
            </div>
        
            </header> 
            </div>
    )
}
export default Headery;