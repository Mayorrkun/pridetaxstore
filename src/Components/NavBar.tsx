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
    <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="logo-container">
            <img src={Logo} alt=""/>
            <img src={Text} alt=""/>
        </div>

        <div className="nav-container">
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
            <Link to="/">Services</Link>
            <Link to="/">Resources</Link>
            <Link to="/">Contact</Link>
        </div>
    </div>)

}


export default NavBar;