import NavBar from "../../Components/NavBar.tsx";
import Header from "../../assets/media/0051.jpg";
import {Link} from "react-router-dom";
import Footer from "../../Components/Footer.tsx";
function Home(){

    return <div className="Hero">
        <NavBar/>
        <section className="header-container" style={{backgroundImage: `url(${Header})`}}>
            <h1>Pride Tax Store</h1>
            <p>
                <h2>Maximize your refunds minimize your stress - Proudly serving you</h2>
                <span>Expert Tax Preparation Filing and Planning at Affordable Rates</span>
                <Link to="/">Book a Consultation</Link>
            </p>
        </section>
        <Footer/>
    </div>
}


export default Home;