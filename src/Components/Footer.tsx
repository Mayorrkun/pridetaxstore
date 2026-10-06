import IRS from "../assets/media/IRS.png"
import NATP from "../assets/media/natp_logo.png"
import CTC from "../assets/media/CTC-logo.png"

function Footer() {

    return <section className="footer">
        <div>

            <div className="footer-images">
                <img src={IRS} alt=""/>
                <img src={CTC} alt=""/>
                <img src={NATP} alt=""/>
            </div>

            <ul>
                <li><span>Address</span> <span>2680 E MAIN STREET SUITE 124 PLAINFIELD IN 16168 </span></li>
                <li><span>Opening hours</span> <span>8am–6pm Mon–Fri / 10am–3pm Sat</span></li>
                <li><span>Phone</span> <span>1 844-506-0861</span></li>
            </ul>

        </div>
        <span>Copyright© {new Date().getFullYear()} Pride Tax - All Rights Reserved.</span>
        <span className="line"></span>
    </section>

}

export default Footer