import NavBar from "../../Components/NavBar.tsx";
import Header from "../../assets/media/0047.jpg";
import Footer from "../../Components/Footer.tsx";
import "../../CSS/services.css"
import{ITS,BTS,STH} from "../../JS/data.ts";
import {Link} from "react-router-dom";

function Services(){

    return <div className="Hero">
        <NavBar/>
        <section className="header-container" style={{backgroundImage: `url(${Header})`}}>
            <h1>Our Services</h1>
            <p>
                <h2>From Simple Filings to Complex Tax Strategies - We've Got You Covered</h2>
            </p>
        </section>

        <section className="services-container">
            <h1>What we do</h1>
            <span className="line"></span>

            <div>
                <h1>
                    Individual Tax Services</h1>

                <div>
                    {
                      ITS.map((item,index)=>(
                          <ul key={index}>
                              <span>
                                  {item.title}
                              </span>

                              <span className="line"></span>
                              <li>
                                  {item.text}
                              </li>
                          </ul>
                      ))
                    }
                </div>
            </div>
            <div>
                <h1 style={{textAlign:"right"}}>Business Tax Services</h1>
                <span className="line"></span>
                <div>
                    {
                        BTS.map((item,index)=>(
                            <ul key={index} style={{backgroundColor:"#cfc755"}}>
                              <span>
                                  {item.title}
                              </span>
                                <span className="line"></span>
                                <li>
                                    {item.text}
                                </li>
                            </ul>
                        ))
                    }
                </div>
            </div>
            <div>
                <h1>Specialty Tax Help</h1>
                <span className="line"></span>
                <div>
                    {
                        STH.map((item,index)=>(
                            <ul key={index}>
                              <span>
                                  {item.title}
                              </span>
                                <span className="line"></span>
                                <li>
                                    {item.text}
                                </li>
                            </ul>
                        ))
                    }
                </div>
            </div>

        </section>
        <section className="services-book">
            <h1>Book an Appointment</h1>
            <p>Our hours are from 8:00 AM to 6:00 PM on weekdays or between 10:00 AM and 3:00 PM on Saturdays. It takes about 1 to 1½ hours to prepare a typical return.</p>

            <Link to="/contact">Book now</Link>
        </section>
        <Footer/>
    </div>
}


export default Services;