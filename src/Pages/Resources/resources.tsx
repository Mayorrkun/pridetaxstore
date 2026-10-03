import NavBar from "../../Components/NavBar.tsx";
import Header from "../../assets/media/0052.jpg";
import {Link} from "react-router-dom";
import {rLinks, TLC, appointments} from "../../JS/data.ts";
import Footer from "../../Components/Footer.tsx";
function Resources(){

    return <div className="Hero">
        <NavBar/>
        <section className="header-container" style={{backgroundImage: `url(${Header})`}}>
            <h1>Resources</h1>
            <p>
                <h2>Your Guide to Smarter Tax Planning & Financial Confidence</h2>

            </p>
        </section>

        <section>

            <div>
                <h1>Tax Refund Schedule</h1>
                <p>
                    The new IRS Modernized Efile system does not work under the old “refund cycles” from the past, so it is not possible to pinpoint when your refund will be direct deposited. Instead, the IRS wants the taxpayer to use there “Wheres my Refund” link that is listed here. Follow the directions on the website and they will be able to tell you more up-to-date information on your refund. fast tax return tax refund
                </p>

                <a href="https://www.irs.gov/wheres-my-refund">Where's my Refund? </a>
            </div>
            <span className="wall">

            </span>

            <div className="links">
                <h2>More Helpful Links</h2>
                <div>
                    {
                        rLinks.map((link,i) => (
                         <a href={link.link} key={i}>{link.text}</a>
                        ))
                    }
                </div>
            </div>
        </section>

        <section>
            <h1>What to bring to an appointment</h1>
            <span></span>
            <ul>
                {
                    appointments.map((appointment,i) => (
                        <li key={i}>
                            {appointment}
                        </li>
                    ))
                }
            </ul>
        </section>

        <section>
            <h1>Tax Law Changes</h1>
            <div>
                {
                    TLC.map((tl, i)=> (
                        <p key={i}>
                            <span>{tl.title}</span>
                            <a href={tl.link}>Download</a>
                        </p>
                    ))
                }
            </div>
        </section>
        <Footer/>
    </div>
}


export default Resources;