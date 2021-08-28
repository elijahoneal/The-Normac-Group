import React from 'react'
import {Link} from 'react-router-dom'
import { styled } from '@material-ui/core/styles';
import useStyles from '../hook/Style';
import { Button , Typography} from '@material-ui/core/';

// images
import Feature from '../images/feat.jpg'
import Consultation from '../images/consultation.svg'
import Credit from '../images/credit.svg'
import Marketing from '../images/marketing.svg'
import Chat from '../images/chat.svg'


const HomePage = styled('div')({
   width: '90%',
   margin: '0 auto',
   
})


const Home = () => {

    const classes = useStyles()

 
return (
    <HomePage>
        <section>
            <div className={classes.overlay}>
                <img className={classes.imgStyle} src={Feature} alt="Table with documents, by fauxels from Pexels" />
                <article className={classes.featureText}>
                    <Typography variant = 'h5'>Let us help you grow your business!</Typography>
                    <Typography variant = 'body1'>Our skilled professional are here to help you every step of the way. Making your life better is our priority.</Typography>
                    <Link to='/contact'><Button className={classes.startButton}>Let's Get Started</Button></Link>
                </article>
                
            </div>
        </section>

        <h4 className={classes.itemTitle}>Our Services</h4>

        <section className={classes.items}>
            
                <article className={classes.item}>
                    
                        <img src={Consultation} alt="consultation by IconMark from the Noun Project" className={classes.icons}/>
                        <Typography variant = 'h5'>Consultation</Typography>
                        <Typography variant = 'body1'>We’ll help your business reach the goals you’ve envisioned.</Typography>
                   
                </article>

                <article className={classes.item}>
                   
                        <img src={Credit} alt="credit by Icongeek26 from the Noun Project" className={classes.icons}/>
                        <Typography variant = 'h5'>Credit Repair</Typography>
                        <Typography variant = 'body1'>Eliminate bad credit and create opportunities for growth within your business.</Typography>
                    
                </article>

                <article className={classes.item}>
                 
                        <img src={Marketing} alt="marketing by Gregor Cresnar from the Noun Project" className={classes.icons}/>
                        <Typography variant = 'h5'>Marketing</Typography>
                        <Typography variant = 'body1'>Spread the word! Allow us to help you network and reach potential clients.</Typography>
                  
                </article>
                
        </section>
            <Link to='/services'><Button className={classes.buttons}>All Services</Button></Link>
            <h4 className={classes.itemTitle}>Testimonials</h4>
    
        <section className={classes.items}>
        
               
            <article className={classes.item}>
                <img src={Chat}  alt='chat by Thomas from the Noun Project' className={classes.icons}/>
                <Typography variant = 'h5'>Consultation</Typography>
                <Typography className={classes.testimonialBody} variant = 'body1'>I’ve been a client with The Normac Group since 2008 and I’ve hired them every year for my annual gala. They are always on time , thorough and professional.</Typography>
                <Typography className={classes.testimonialQoute} variant = 'body1'>Clara, C Gates foundation, inc</Typography>
            </article>
        

        
            <article className={classes.item}>
            <img src={Chat}  alt='chat by Thomas from the Noun Project' className={classes.icons}/>
                <Typography variant = 'h5'>Credit Repair</Typography>
                <Typography className={classes.testimonialBody} variant = 'body1'>At first I was skeptical and I didn’t think they would be able to help get my credit in better shape. After the first month a repossession I had for over 5 years was deleted. I’ve paid other companies monthly and got no results. Whatever they do it works and i’m forever grateful.Eliminate bad credit and create opportunities for growth within your business</Typography>
                <Typography className={classes.testimonialQoute} variant = 'body1'>Juan Rodriguez Houston, Texas</Typography>
            </article>
        

        
            <article className={classes.item}>
                <img src={Chat}  alt='chat by Thomas from the Noun Project' className={classes.icons}/>
                <Typography variant = 'h5'>Marketing</Typography>
                <Typography className={classes.testimonialBody} variant = 'body1'>Working with Cam the owner was an amazing opportunity. He’s what I call an “hidden gem creative”. He has the ability to think quickly on his toes and provide a solution to our problems and help us cut cost, making my business all the more effective. He’s always been available to answer questions and even when he wasn’t his staff got back to us promptly.</Typography>
                <Typography className={classes.testimonialQoute} variant = 'body1'>Jeremy Lockett On site media llc</Typography>
            </article>
               
                
        </section>
        <Link to='/about'><Button className={classes.buttons}>Other Testimonials</Button></Link>
    </HomePage>
    )
}

export default Home;