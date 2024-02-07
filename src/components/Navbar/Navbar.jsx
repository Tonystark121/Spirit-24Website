import "./Navbar.css"
import logo from "../../assets/react.svg"

const Navbar = () => {
    return (
        <section className="wrapper">
            <div className="flexcenter innerwidth navbar">
                <img src={logo} alt="React Logo" width={50}/>
                <div className="nav-links">
                    <a href="/">Home</a>
                    <a href="/events">Schedule</a>
                    <a href="/contact">Events</a>
                    <a href="/about">Team</a>
                    <button>
                        <a href="/login">Register</a>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Navbar;