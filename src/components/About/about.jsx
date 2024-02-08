import './about.css';

const about = () => {
    return (
       
        <section className = "about">
            <div className = "about-header">
                <p>ABOUT CONFERENCE</p>
            </div>

            <div className = "about-text">
                <div className="about-header">Welcome to the International Conference
on Pharmaceutical Innovations & SPIRIT:</div>
                <div className="about-content"> The Techno-Pharma Fest, a two-day
immersive experience hosted by the
Department of Pharmaceutical Engineering
and Technology at the prestigious Indian
Institute of Technology (BHU), Varanasi.

In the dynamic landscape of
pharmaceuticals and biotechnology,
innovation is the driving force that propels
the industry forward. This conference and
the fest serve as a vibrant platform to
converge, collaborate, and explore the
forefront of advancements in various
facets of pharmaceutical sciences.
Our conference is designed to cover a
spectrum of cutting-edge tracks, each
delving into specialized areas of
pharmaceutical and biotechnological
research.</div>
<button className='button'>Schedule</button>
            </div>
        </section>
    );
}

export default about;