import React from 'react';
import HomeBanner from '../components/HomeBanner';

function About() {
    return (
        <div>
            <HomeBanner/>
            <section className='w-2/3 mx-auto'> 
                <div className="text-base m-5 text-justify">
                    <p className="text-center mb-5 text-xl font-alex-brush">
                        <b>About StyleSavvy</b>
                    </p>
                    <p>
                        Welcome to StyleSavvy, your premier destination for expert hair
                        care and nail services in the heart of the city. At StyleSavvy, we
                        believe that every part of your body can be your fashion accessory, and our
                        mission is to help you express your unique style and personality
                        through a beautiful, healthy body.
                    </p>
                    <div className="font-bold font-alex-brush my-5">Our Story</div>
                    <p>
                        Founded in 2010, StyleSavvy has quickly become a trusted name in
                        the beauty industry, known for our commitment to excellence and
                        passion for creativity. Our founder, Sarah Lewis, envisioned
                        a salon that would not only deliver exceptional services but
                        also provide a welcoming and inclusive environment where clients
                        could feel pampered and empowered.
                    </p>
                    <div className="font-bold font-alex-brush my-5">Our Philosophy</div>
                    <p>
                        At StyleSavvy, we believe in the transformative power of a great
                        hairstyle. Whether you're looking for a chic haircut, a vibrant
                        colour transformation, or a stunning up-do for a special occasion,
                        our talented team of stylists is here to make your hair dreams a
                        reality. We pride ourselves on staying up-to-date with the latest
                        trends and techniques in hairdressing, ensuring that you always
                        leave our salon feeling confident and beautiful.
                    </p>
                    <div className="font-bold font-alex-brush my-5">Why Choose StyleSavvy?</div>
                    <ul className="pl-5 mb-5">
                        <li>
                            Expertise: Our team of stylists are highly trained professionals
                            with years of experience in the industry.
                        </li>
                        <li>
                            Personalised Service: We take the time to listen to your needs
                            and preferences, ensuring a customised experience that exceeds
                            your expectations.
                        </li>
                        <li>
                            Quality Products: We use only the finest hair care products and
                            styling tools to achieve beautiful, long-lasting results.
                        </li>
                        <li>
                            Welcoming Atmosphere: Our salon provides a relaxing and inviting
                            environment where you can unwind and indulge in some much-needed
                            self-care.
                        </li>
                    </ul>
                    <p className="my-5">
                        <b>Visit Us Today</b>
                    </p>
                    <p>
                        Experience the StyleSavvy difference for yourself and discover why
                        we're the preferred choice for discerning clients who demand
                        nothing but the best. Book your appointment today and let us help
                        you unleash the full potential of your hair!
                    </p>
                </div>
            </section>
        </div>
    )
}

export default About;
