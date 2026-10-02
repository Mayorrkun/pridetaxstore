import NavBar from "../../Components/NavBar.tsx";
import Header from "../../assets/media/0047.jpg";
import Footer from "../../Components/Footer.tsx";
import "../../CSS/services.css"
import{ITS,BTS,STH} from "../../JS/data.ts";

function Services(){

    return <div>
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
                              <li>
                                  {item.text}
                              </li>
                          </ul>
                      ))
                    }
                </div>
            </div>
            <div>
                <h1>Business Tax Services</h1>
                <div>
                    {
                        BTS.map((item,index)=>(
                            <ul key={index}>
                              <span>
                                  {item.title}
                              </span>
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
                <div>
                    {
                        STH.map((item,index)=>(
                            <ul key={index}>
                              <span>
                                  {item.title}
                              </span>
                                <li>
                                    {item.text}
                                </li>
                            </ul>
                        ))
                    }
                </div>
            </div>

        </section>
        <Footer/>
    </div>
}


export default Services;