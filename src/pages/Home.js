import React from 'react'

const Home = () => {

    return (
    <div>
        <section class="feature">
            <div class="overlay">
                <img src="images/pexels-fauxels-3183179.jpg" alt="table featuring business documents"/>
                <figcaption>Photo by fauxels from Pexels</figcaption>
                <article class="feature-text">
                    <h1>Let us help you grow your business!</h1>
                    <p>Our skilled professional are here to help you every step of the way. Making your life better is our priority.</p>
                </article>
            </div>
        </section>
        <h2>Our Services</h2>
        <section class="main services">
            
                <section class="service item1">
                    <section class="consultation">
                        <img src="./images/consultation.svg" alt="consultation by IconMark from the Noun Project"/>
                        <h4>Consultation</h4>
                        <p>We’ll help your business reach the goals you’ve envisioned.</p>
                    </section>
                </section>

                <section class="service item2">
                    <section class="credit">
                        <img src="./images/credit.svg" alt="credit by Icongeek26 from the Noun Project"/>
                        <h4>Credit Repair</h4>
                        <p>Eliminate bad credit and create opportunities for growth within your business.</p>
                    </section>
                </section>

                <section class="service item3">
                    <section class="marketing">
                        <img src="./images/marketing.svg" alt="marketing by Gregor Cresnar from the Noun Project"/>
                        <h4>Marketing</h4>
                        <p>Spread the word! Allow us to help you network and reach potential clients.</p>
                    </section>
                </section>
                <a class="btn" href="services.html"><button>All Services</button></a>
        </section>

        <h2>Testimonials</h2>
    
        <section class="main testimonials">
        
                <section class="testimonial item4">
                    <section class="consultation">
                        <h4>Consultation</h4>
                        <p>I’ve been a client with The Normac Group since 2008 and I’ve hired them every year for my annual gala. They are always on time , thorough and professional.</p>
                        <p class="name">Clara, C Gates foundation, inc</p>
                    </section>
                </section>

                <section class="testimonial item5">
                    <section class="credit">
                        <h4>Credit Repair</h4>
                        <p>At first I was skeptical and I didn’t think they would be able to help get my credit in better shape. After the first month a repossession I had for over 5 years was deleted. I’ve paid other companies monthly and got no results. Whatever they do it works and i’m forever grateful.Eliminate bad credit and create opportunities for growth within your business</p>
                        <p class="name">Juan Rodriguez Houston, Texas</p>
                    </section>
                </section>

                <section class="testimonial item6">
                    <section class="marketing">
                        <h4>Marketing</h4>
                        <p>Working with Cam the owner was an amazing opportunity. He’s what I call an “hidden gem creative”. He has the ability to think quickly on his toes and provide a solution to our problems and help us cut cost, making my business all the more effective. He’s always been available to answer questions and even when he wasn’t his staff got back to us promptly.</p>
                        <p class="name">Jeremy Lockett On site media llc</p>
                    </section>
                </section>
                <a class="btn" href="about.html"><button>Other Testimonials</button></a>
        </section>
    </div>
    )
}

export default Home;