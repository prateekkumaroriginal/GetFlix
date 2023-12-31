import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

import "./style.scss";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../assets/getflix-logo.svg";

const Header = () => {
    const [show, setShow] = useState("top");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [query, setQuery] = useState("");
    const [showSearch, setShowSearch] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    const controlNavbar = () => {
        if (window.scrollY > 200) {
            if (window.scrollY > lastScrollY && !mobileMenu) {
                setShow("hide")
            } else {
                setShow("show")
            }
        } else {
            setShow("top")
        }
        setLastScrollY(window.scrollY)
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location])

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [lastScrollY])

    const openSearch = () => {
        setMobileMenu(false)
        setShowSearch(true)
    }

    const openMobileMenu = () => {
        setMobileMenu(true)
        setShowSearch(false)
    }

    const searchQueryHandler = (event) => {
        if (event.key === "Enter" && query.length > 0) {
            navigate(`/search/${query}`)
            setTimeout(() => {
                setShowSearch(false)
            }, 1000);
        }
    }

    const navigationHandler = (type) => {
        navigate(`/explore/${type}`)
        setMobileMenu(false)
        setShowSearch(false)
    }

    return (
        <header className={`header ${mobileMenu && "mobileView"} ${show}`}>
            <ContentWrapper>
                <div className="logo" onClick={() => { navigate(`/`) }}>
                    <img src={logo} alt="" />
                </div>

                <ul className="menu">
                    <li className="menuItem" onClick={() => { navigationHandler("movie") }}>Movies</li>
                    <li className="menuItem" onClick={() => { navigationHandler("tv") }}>TV Shows</li>
                    <li className="menuItem" onClick={openSearch}><HiOutlineSearch /></li>
                </ul>

                <div className="mobileMenu">
                    <HiOutlineSearch onClick={openSearch} />
                    {mobileMenu ? (
                        <VscChromeClose onClick={() => setMobileMenu(false)} />
                    ) : (
                        <SlMenu onClick={openMobileMenu} />
                    )}
                </div>
            </ContentWrapper>

            {showSearch && <div className="searchBar">
                <ContentWrapper>
                    <div className="searchInput">
                        <input
                            id='searchInput'
                            type="text"
                            value={query}
                            onChange={(e) => { setQuery(e.target.value) }}
                            placeholder='Search for a movie or a TV show'
                            onKeyUp={searchQueryHandler}
                            autoFocus
                        />
                        <VscChromeClose onClick={() => { setShowSearch(false) }} />
                    </div>
                </ContentWrapper>
            </div>}
        </header>
    );
};

export default Header;