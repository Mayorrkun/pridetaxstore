import NavBar from "../../Components/NavBar.tsx";
import Header from "../../assets/media/0051.jpg";
import {Link} from "react-router-dom";
function Home(){

    return <div>
        <NavBar/>
        <section className="header-container" style={{backgroundImage: `url(${Header})`}}>
            <h1>Pride Tax Store</h1>
            <p>
                <h2>Maximize your refunds minimize your stress - Proudly serving you</h2>
                <span></span>
                <Link to="/">Book a Consultation</Link>
            </p>
        </section>
    </div>
}


export default Home;