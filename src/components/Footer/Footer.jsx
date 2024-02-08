import communityLogo from "../../assets/react.svg"
import './footer.css'

import x from "../../assets/react.svg";


const Footer = () => {
    return (
        <>
            <div className="footer footer-top">
                <div className="container">
                    <div className="footer-brand" >
                        <div >
                            <img src={communityLogo}
                                width={60}
                                height={60}
                                style={{ marginLeft: '72px'}}
                                alt="community logo"
                            />
                            <p className="footer-brand-text" >
                                International Conference on<br />
                                PHARMACEUTICAL INNOVATIONS<br />
                                & SPIRIT:The Annual Techno-Pharma Conclave
                            </p>
                        </div>

                        <div className='flexlinks'>
                            <button className="flextop">
                                <a href="/login">Register</a>
                            </button>
                            <br />
                            <div className="wrap-footer">
                                <div className="ftlink">
                                    <a href="/about">
                                        ABOUT
                                    </a>
                                </div>
                                <div className="ftlink" >
                                    <a href="/speaker">
                                        Speaker
                                    </a>
                                </div>
                                <div className="ftlink" >
                                    <a href="/speaker">
                                        EVENTS
                                    </a>
                                </div>
                                <div className="ftlink" >
                                    <a href="/speaker">
                                        SCHEDULE
                                    </a>
                                </div>
                                <div className="ftlink" >
                                    <a href="/speaker">
                                        TEAM
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="wrapper-1" >
                                <ul className="social-list" >
                                    <li>
                                        <a href="https://www.facebook.com/" className="social-link">
                                            <ion-icon name="logo-facebook"></ion-icon>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/" className="social-link">
                                            <ion-icon name="logo-linkedin"></ion-icon>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/" className="social-link">
                                            <ion-icon name="logo-instagram"></ion-icon>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/" className="social-link">
                                            <img className='X-logo' src={x} />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
            </div>
        </>
    )
}

export default Footer