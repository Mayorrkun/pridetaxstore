import NavBar from "../../Components/NavBar.tsx";
import Header from "../../assets/media/0051.jpg";
function Home(){

    return <div>
        <NavBar/>
        <section className="header-container" style={{backgroundImage: `url(${Header})`}}>

        </section>
    </div>
}


export default Home;