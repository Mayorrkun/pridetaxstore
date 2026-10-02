import Logo from "../../src/assets/media/pridelogo.png";
import Text from "../../src/assets/media/pridetext.png"
import {Link} from "react-router-dom";
import {useState, useEffect} from "react";

function NavBar(){
    const [scrolled, setScrolled] = useState(false);

    function handleScroll() {
        const position = window.scrollY;
         if (position > 10) {
             setScrolled(true);
         }
         else {
             setScrolled(false);
         }
    }

    useEffect(() => {
        handleScroll

        window.addEventListener("scroll", handleScroll, {passive: true});
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);


    return (
    <div className={`navbar ${scrolled && "scrolled"}`}>
        <div className="logo-container">
            <img src={Logo} alt=""/>
            <img src={Text} alt=""/>
        </div>

        <div className="nav-container">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/resources">Resources</Link>
            <Link to="/contact">Contact</Link>
        </div>
    </div>)

}


export default NavBar;