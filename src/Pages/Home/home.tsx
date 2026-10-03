import NavBar from "../../Components/NavBar.tsx";
import Header from "../../assets/media/0051.jpg";
import Body from "../../assets/media/0050.jpg";
import {Link} from "react-router-dom";
import Footer from "../../Components/Footer.tsx";
import {useEffect, useRef} from "react";
import "../../CSS/home.css";
function Home(){

    const fadeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const onScroll = () => {
            const el = fadeRef.current;
            if (!el) return;
            const opacity = 1 - window.scrollY / 400;
            el.style.opacity = String(Math.max(0, Math.min(1, opacity)));
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const services =[
        {title:"Tax preparation and Filing", content:["Personal","Business","Self-Employed"]},
        {title:"E-file & Fast refunds", content:["Get Your Money Quickly and Securely"]},
        {title:"IRS Problem Resolution", content:["Audit Help","Back Taxes","Payment Plans"]},
        {title:"Tax Planning and Strategy", content:["Year round advice to save money"]},
        {title:"Small Business Accounting", content:["Bookkeeping","Payroll","Deductions"]},
    ]

    const reasons =[
        {icon:"im-clock", text: "Fast, Accurate & Affordable Tax Solutions"},
        {icon:"im-financial", text:"Experienced and Friendly Tax Professionals"},
        {icon:"im-money-2", text:"No Hidden Fees Transparent Pricing"},
        {icon:"im-calendar-3", text:"Available All Year Round Not Just Tax Season"},
    ]
    return <div className="Hero">
        <NavBar/>
        <section className="header-container" style={{backgroundImage: `url(${Header})`}}>
            <h1>Pride Tax Store</h1>
            <p>
                <h2>Maximize your refunds minimize your stress - Proudly serving you</h2>
                <span>Expert Tax Preparation Filing and Planning at Affordable Rates</span>
                <Link to="/contact">Book a Consultation</Link>
            </p>
        </section>
        <section className="home-services">
            <h1>Our Services</h1>
            <div>
                {
                    services.map((service, index) =>(
                        <p key={index}>
                            <span>{service.title}</span>
                            <ul>
                                {
                                    service.content.map((item, index) =>(
                                        <li key={index}>{item}</li>
                                    ))
                                }
                            </ul>
                        </p>
                    ))
                }
            </div>
            <Link to="/services">See More ... </Link>
        </section>
        <section className="home-choose" style={{backgroundImage: `url(${Body})`}}>
            <h1>Why Choose Pride tax Store?</h1>
            <span className="white-line"></span>
            <div>
                {
                    reasons.map((reason, index) =>(
                        <p key={index} >
                            <i className={reason.icon}></i>
                            <span>{reason.text}</span>
                        </p>
                    ))
                }
            </div>
            <p>
                At Pride Tax, We're here to help you resolve your tax problems and put an end to the struggle that the IRS can put you through. We pride ourselves on being extremely efficient, affordable, and of course, professional. The IRS problems will not go away by themselves, they just keep getting worse with more penalties and interest being added. Our team will get to work solving your tax problems, so sit back and relax, and Pride Tax will get you there. We are ready to assist you through every step of the process.
            </p>
            <Link to="/about">Learn More About Us ...</Link>
        </section>
        <Footer/>
    </div>
}


export default Home;