import React from 'react'
import { makeStyles, styled } from '@material-ui/core/styles';
import { Typography} from '@material-ui/core/';

const AboutPage = styled('div') ({
    width: '90%',
    margin: '0 auto',
})

const useStyles = makeStyles({
    itemTitle: {
        fontWeight:'bold',
        fontSize: '2rem',
        color: '#2196f3',
        margin: '1rem'
    },
    items: {
        display:'flex',
        flexDirection: 'column',
        alignItems: 'center',
         '@media (min-width: 768px)': {
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
            alignItems: 'flex-start'
        },
    },
    item: {
        margin: '1rem auto',
        '@media (min-width: 768px)': {
            width: '33%',
            height: 'auto',
            
        }
    },
    testimonialBody: {
        marginTop: '0.5rem',
        '@media (min-width: 768px)': {
            fontSize: '0.8rem',
        },
       
    },
    testimonialQoute: {
        marginTop: '0.5rem',
        color: '#2196f3',
        fontStyle: 'italic'
    },

})


const About = () => {

    const classes = useStyles()

    return (
        <AboutPage>
             <article>
                <h2 className={classes.itemTitle}>Who We Are</h2>
                <Typography variant = 'body1'>Established in 2008 with a focus on: small business consulting, marketing firm conception, and existing business management. We take a modern approach to ensure that your business has utilized every resource available to you.
                </Typography>
                <br/>
                <Typography variant = 'body1'>Our dedicated team of affiliates provide our clients with the best services and business needs available. Years of trust, networking, and building solid relationships with our clients gives us a strong foundation to help you optimize your results. Additionally, we offer major credit repair services.
                    There’s no job too big or too small, our business is helping your business become a better business.</Typography>
            </article>

            <h2 className={classes.itemTitle}>Customer Feedback</h2>
            <section className={classes.items}>
            
                    <article className={classes.item}>
                        
                            <Typography className={classes.testimonialBody}>I’ve been a client with The Normac Group since 2008 and I’ve hired them every year for my annual gala. They are always on time , thorough and professional.</Typography>
                            <Typography className={classes.testimonialQoute}>Clara, C Gates foundation, inc</Typography>
                        
                    </article>

                    <article className={classes.item}>
                     
                            <Typography className={classes.testimonialBody}>At first I was skeptical and I didn’t think they would be able to help get my credit in better shape. After the first month a repossession I had for over 5 years was deleted. I’ve paid other companies monthly and got no results. Whatever they do it works and i’m forever grateful.Eliminate bad credit and create opportunities for growth within your business</Typography>
                            <Typography className={classes.testimonialQoute}>Juan Rodriguez Houston, Texas</Typography>
                        
                    </article>

                    <article className={classes.item}>
                        
                            <Typography className={classes.testimonialBody}>Working with Cam the owner was an amazing opportunity. He’s what I call an “hidden gem creative”. He has the ability to think quickly on his toes and provide a solution to our problems and help us cut cost, making my business all the more effective. He’s always been available to answer questions and even when he wasn’t his staff got back to us promptly.</Typography>
                            <Typography className={classes.testimonialQoute}>Jeremy Lockett On site media llc</Typography>
                       
                    </article>

                    <article className={classes.item}>
                       
                            <Typography className={classes.testimonialBody}>This company has shown themselves to be a one stop shop. They always have the answers to our issues and are always willing to go above and beyond. This is our 3 rd year working with Cam and he’s always been a pleasure to work with</Typography>
                            <Typography className={classes.testimonialQoute}>Jennifer (Company classified)</Typography>
                       
                    </article>

                    <article className={classes.item}>
                     
                            <Typography className={classes.testimonialBody}>I’ve worked with The Normac Group since May(2018). They told me I’d see a change within 2 weeks and I did and for that they will always be my go to for credit help.</Typography>
                            <Typography className={classes.testimonialQoute}>Courtney Rhode Island</Typography>
              
                    </article>

                    <article className={classes.item}>
                        <Typography className={classes.testimonialBody}>The Normac Group helped me build credit and I was able to get my first car with an amazing interest rate and payment. Mr. Cam went above and beyond to even help me negotiate my deal with the salesperson. I don’t know of any other company that would have even taken the time to do that. He made sure he explained everything to me and showed me how to make my credit work for me.</Typography>
                            <Typography className={classes.testimonialQoute}>Lawanda B. Jacksonville,Fl</Typography>
                
                    </article>

                    {/* <!-- <section className="testimonial item7">
                        <section className="marketing">
                            <p>I personally am a credit specialist, however my schedule has been extremely busy. I thought I’d give This company a try and when I got the results far above what I expected. I realized I needed to work on more things on my end and figure out exactly how their so good at what they do. I’ve never had a issue with communication from Mr. Cam or his agents and he’s always prompt when he tells you he will call you back or email you. Currently, I send some of my tougher clients to his company because he’s passionate about the work he doesn’t and they treat everyone with the upmost respect.</p>
                            <p className="name">Amanda Winter Chicago, IL</p>
                        </section>
                    </section> --> */}
                    
            </section>
        </AboutPage>
    )
}

export default About;