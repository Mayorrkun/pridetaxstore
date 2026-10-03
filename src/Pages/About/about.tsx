import NavBar from "../../Components/NavBar.tsx";
import Header from "../../assets/media/0052.jpg";
import Profile from "../../assets/media/profile.png";
import {wws, values,feedback} from "../../JS/data.ts";
import "../../CSS/about.css"
import Footer from "../../Components/Footer.tsx";
function About(){

    return <div className="Hero">
        <NavBar/>
        <section className="header-container" style={{backgroundImage: `url(${Header})`}}>
            <h1>About Us</h1>
            <p>
                <h2>Your Trusted Tax Partner – Where Expertise Meets Personal Care</h2>
                <span>PrideTax Store is a professional tax preparation company founded in 2021, dedicated to helping individuals confidently navigate the tax filing process.</span>
                <span>Since our launch, we have served hundreds of satisfied clients across the United States.</span>
            </p>
        </section>
        <section className="about-values">
            <h1>Our Values</h1>
            <span>At PrideTax Store, we believe everyone deserves accessible and reliable tax services without the hassle..</span>
            <div>
                {
                    values.map((value, i) => (
                        <div key={i}>
                            <img src={value.img} alt=""/>
                            <span>
                                {value.text}
                            </span>
                        </div>
                    ))
                }
            </div>
        </section>

        <section className="about-wws">
            <h1>Who we serve</h1>
            <ul>
                {
                    wws.map((wwsv, i) => (
                        <li key={i}>
                            {wwsv}
                        </li>
                    ))
                }
            </ul>
        </section>

        <section className="about-feedback">
            <h1>Feedback From Clients</h1>
            <div>
                {
                    feedback.map((value, i) => (
                        <div key={i}>
                            <img src={Profile} alt=""/>
                            <span>{value.name}</span>
                            <p>"{
                                value.text
                            }
                                "
                            </p>
                        </div>
                    ))
                }
            </div>
        </section>
        <Footer/>
    </div>
}


export default About;