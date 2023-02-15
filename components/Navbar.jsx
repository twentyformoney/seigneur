import Link from "next/link"
import Seigneur from "./Seigneur"
import { VscThreeBars } from "react-icons/vsc";
import { IconContext } from "react-icons";
import { useEffect, useState } from 'react';
import { render } from "react-dom";

export default function Navbar() {

    const [showMe, setShowMe] = useState(false);
    function toggle(){
    setShowMe(!showMe);

}

      return  (

        <div>
            <nav className="Navbar">
                <h1>
                    <Link href='/'>
                        <Seigneur className="Logo"></Seigneur>
                        <a className="logo-judul">Seigneur</a>
                    </Link>
                </h1>
                <button className="klik-bar" onClick={toggle}>
                    <IconContext.Provider value={{ size: "2.5em", color: "white" }}>
                        <VscThreeBars />
                    </IconContext.Provider>
                </button>
                <ul className="ul-navbar" >
                    <li>
                        <Link href="about">About</Link>
                    </li>
                    <li>
                        <Link href="services">Services</Link>
                    </li>
                    <li>
                        <Link href="faq">Faq</Link>
                    </li>
                    <li>
                        <Link href="login">Login</Link>
                    </li>
                </ul>
            </nav>
            <div style={{display: showMe?"block":"none" }} >
                <ul className="ul-navbar-mobile">
                    <li>
                        <Link href="about">About</Link>
                    </li>
                    <li>
                        <Link href="services">Services</Link>
                    </li>
                    <li>
                        <Link href="faq">Faq</Link>
                    </li>
                    <li>
                        <Link href="login">Login</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}