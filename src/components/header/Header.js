import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {

    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img alt="" className="header__icon" src="logo.png" /></Link>
            </div>

            <div className="headerMiddle">
                <form action="search">
                    <input type="text"  placeholder="What do you want to search?"/>
                    <img className="icon__search" src="icon.png" alt="" />
                </form>
            </div>

            <div className="menu">
                <img className="menu__icon" src="ham.png" alt="" />
            </div>

      </div>
        
    )
}
<script src="https://unpkg.com/boxicons@2.1.3/dist/boxicons.js"></script>
export default Header