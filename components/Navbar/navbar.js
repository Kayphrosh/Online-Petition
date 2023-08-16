import React, {useState, useEffect} from "react";
import Authentication from "@/pages/authentication";
import {useRouter} from "next/router";
const Navbar = () => {
    const router = useRouter();
    const [scrolling, setScrolling] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    const handleAuthentication = () => {
        closeModal();
        setIsAuthenticated(true);
    };


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return() => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleDashboardClick = () => {
        if (isAuthenticated) {
            router.push("/dashboard");
        } else {
            openModal();
        }
    };

    return (
        <div className={
            `navbar ${
                scrolling ? "scrolling" : ""
            }`
        }>
            <div className="logo">
                <h4>
                    <span id="petition">Appeal</span>
                    <span id="power">Ease</span>
                </h4>
            </div>

            <ul className="nav-links">
                <li className="active-link"
                    onClick={
                        () => router.push("/")
                }>
                    Home
                </li>

                <li onClick={
                    () => router.push("/appeals")
                }>Explore</li>

                {/* <li onClick={openModal}>Sign Up/Login</li> */}
                <li onClick={handleDashboardClick}>
                    {
                    isAuthenticated ? "Dashboard" : "Sign Up/Login"
                } </li>

            </ul>

            <div className="cta-btn">
                <button type="text" id="btn1">
                    <img src="/Images/searchIcon.svg" alt=""/>
                </button>

                <a href="/create_appeal">
                    <button id="btn2">Start Your Appeal
                    </button>
                </a>
            </div>

            {
            isModalOpen && (
                <Authentication isModalOpen={isModalOpen}
                    onClose={closeModal}
                    onAuthentication={handleAuthentication}/>
            )
        }

            {/* {isLoginModalOpen && <Login onLoginClose={closeLoginModal} />} */} </div>
    );
};

export default Navbar;
