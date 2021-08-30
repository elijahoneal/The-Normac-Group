import React from 'react'
import { Typography} from '@material-ui/core/';
import { styled } from '@material-ui/core/styles';
import useStyles from '../hook/Style';
// images
import ServiceFeat from '../images/services.jpg'
import Consultation from '../images/consultation.svg'
import Credit from '../images/credit.svg'
import Marketing from '../images/marketing.svg'
import Notary from '../images/notary.svg'
import Finance from '../images/finance.svg'
import Rental from '../images/rental.svg'


const ServicePage = styled('div') ({
    width: '90%',
    margin: '0 auto',
})

const Services = () => {

    const classes = useStyles()

    return (
        <ServicePage>
            <div className={classes.overlay}>
                    <img className={classes.imgStyle} src={ServiceFeat} alt='by fauxels from Pexels' />  
                    <article className={classes.featureText}> 
                        <h2 className={classes.aboutTitle}>Our Services</h2>
                        <Typography className={classes.featureBody} variant = 'body1'>Discover more about our extensive range of professional services. We constantly update this page, but if you still can’t find what you’re looking for, please feel free to get in touch with us – we will be more than happy to help.
                        </Typography>
                    </article>
                </div>
                <article className={classes.aboutUs}>
                    <h2 className={classes.itemTitle}>Business Startup Package</h2>
                    <Typography variant = 'body1'>This package aligns future entrepreneurs with our business liaison to turn their concept of a company into a legally bound company. Clients work hand in hand with a business liaison to ensure their company has been registered with their perspective state and established to see them off for proper success. This package also includes general services such as: business cards, business credit registration, Email creation and several hours business coaching.</Typography>
                    <Typography variant = 'body1'>Often times entrepreneurs are more focused on the idea product or service and forget the legal part. We take pride in helping fill that void to ensure every person with a drive, ambition and desire to have their own can follow through and become that CEO they wish to become.</Typography>
                </article>
         

            <section className={classes.items}>
                    <section className={classes.item}>
                            <img src={Consultation}  className={classes.icons} alt="consultation by IconMark from the Noun Project"/>
                            <Typography variant = 'h5'>Consultation</Typography>
                            <Typography variant ='body2'>We always put our focus on our customers. We want you to find the product or service that perfectly suits your needs, which is why we offer additional services for: Marketing, Small Business Startup, and Business Management.</Typography>
                    </section>

                    <section className={classes.item}>
                            <img src={Credit}  className={classes.icons} alt="credit by Icongeek26 from the Noun Project"/>
                            <Typography variant = 'h5'>Credit Repair</Typography>
                            <Typography variant ='body2'>Our goal is to not only provide professional support; but also financial. We offer Credit Repair to clients seeking aid for bad credit.</Typography>
                    </section>

                    <section className={classes.item}>
                            <img src={Marketing}  className={classes.icons} alt="marketing by Gregor Cresnar from the Noun Project"/>
                            <Typography variant = 'h5'>Marketing</Typography>
                            <Typography variant ='body2'>Your business may be in need of marketing expertise. Our team offers Promotional Advertising services as well as Social Media Development.</Typography>
                    </section>

                    <section className={classes.item}>
                            <img src={Notary} className={classes.icons} alt="notary by Denis Shumaylov from the Noun Project"/>
                            <Typography variant = 'h5'>Notary</Typography>
                            <Typography variant ='body2'>We help your business grow from start to finish. This includes documents and forms that may need to be notarized. We offer Document Execution and Contract Drafting to help you make informed decisions</Typography>
                    </section>

                    <section className={classes.item}>
                            <img src={Finance}  className={classes.icons} alt="finance by Adrien Coquet from the Noun Project"/>
                            <Typography variant = 'h5'>Finance</Typography>
                            <Typography variant ='body2'>Learn more about financial literacy to make better investments. The best way to learn is through experience. We offer Forex Trading to help clients make valuable investments.</Typography>
                    </section>

                    <section className={classes.item}>
                            <img src={Rental}  className={classes.icons} alt="Car Rental By AIGA, US In the Symbol Signs Collection"/>
                            <Typography variant = 'h5'>Rentals</Typography>
                            <Typography variant ='body2'>Last but not least in our extensive array of services; we offer Exotic Rentals and Moving Services for clients in need of a vehicle.</Typography>
                    </section>
            </section>
        </ServicePage>

    )
}

export default Services