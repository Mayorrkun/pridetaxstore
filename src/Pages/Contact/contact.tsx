import NavBar from "../../Components/NavBar.tsx";
import Header from "../../assets/media/0049.jpg";
import "../../CSS/contact.css"
import Footer from "../../Components/Footer.tsx";

function Contact() {

    return <div className="Hero">
        <NavBar/>
        <section className="header-container" style={{backgroundImage: `url(${Header})`}}>
            <h1>Contact Us</h1>
            <p>
                <h2>Our customer fulfillment representatives are available 24/7 to manage all of your inquiries.</h2>

            </p>
        </section>
        <section className="contact-main">
            <div className="contact-container">
                <h1>Pride Tax Store</h1>
                <span className="contact-line"></span>
                <p className="desc">
                    <span>2498 Perry Crossing Way, suite 240, Plainfield, IN 46168, USA</span>
                    <span>You can reach us by our phone number <br/> 1 844-506-0861</span>

                </p>

                <h1>Hours</h1>
                <span className="contact-line"></span>
                <p className="contact-hours">
                   <span>
                       <span>Mon</span> <span>08:00 am - 06:00 pm</span>
                   </span>
                    <span>
                       <span>Tue</span> <span>08:00 am - 06:00 pm</span>
                   </span>
                    <span>
                       <span>Wed</span> <span>08:00 am - 06:00 pm</span>
                   </span>
                    <span>
                       <span>Thur</span> <span>08:00 am - 06:00 pm</span>
                   </span>
                    <span>
                       <span>Fri</span> <span>08:00 am - 06:00 pm</span>
                   </span>
                    <span>
                       <span>Sat</span> <span>08:00 am - 06:00 pm</span>
                   </span>
                    <span>
                       <span>Sun</span> <span>10:00 am - 03:00 pm</span>
                   </span>
                </p>
            </div>
        </section>

        <section>
            <iframe className="contact-map"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d49114.31197929465!2d-86.3891029!3d39.7026964!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886ca5cb13023d77%3A0x412ad4d23419d3c0!2s2680%20E%20Main%20St%20Ste%20124%2C%20Plainfield%2C%20IN%2046168%2C%20USA!5e0!3m2!1sen!2sng!4v1791313610366!5m2!1sen!2sng"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
        </section>
        <Footer/>
    </div>

}


export default Contact;
