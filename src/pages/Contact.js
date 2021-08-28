import React, { useState } from 'react';
import { Typography, Button,  TextareaAutosize,  TextField } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import useStyles from '../hook/Style';

// images
import ContactFeat from '../images/contact.jpg'

const ContactPage = styled('div') ({
    width: '90%',
    margin: '0 auto',
})

const Contact = () => {

    const classes = useStyles()
    const initialForm = {name: '' , email: '', message:''}
    const [formData , setFormData] = useState(initialForm)
   



    const onChange = (e) => {
        const { name , value } = e.target
        setFormData({ ...formData , [name]: value })
        
    } 

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
      }

    const handleSubmit = e => {
        fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...formData })
        })
        .then(() => alert("Success!"))
        .catch(error => alert(error));

        e.preventDefault();
        setFormData(initialForm)
    };
    return (
        <ContactPage>
             <div className={classes.overlay}>
                    <img className={classes.imgStyle} src={ContactFeat} alt="by Alex Andrews from Pexels" />  
                    <article className={classes.featureText}> 
                        <h2 className={classes.aboutTitle}>Learn More</h2>
                        <Typography className={classes.featureBody} variant = 'body1'>If you have any questions about our offer, please contact us by filling out the form below and we will get in touch with you shortly. Alternatively, you can give us a call – we hope to hear from  you soon!
                        </Typography>
                    </article>
                </div>
        
            <form className={classes.form} onSubmit={handleSubmit}>
                <TextField
                required
                error = {formData.name ==='' ? true : false}
                name="name"
                type="text"
                placeholder="Name"
                variant='outlined'
                helperText="Please Enter Name"
                className={classes.input}
                onChange={onChange}
                value={formData.name}
                >
                </TextField>

                <TextField
                required
                error = {formData.email ==='' ? true : false}
                name="email"
                type="email"
                placeholder="Email"
                variant='outlined'
                helperText="Please Enter Valid Email"
                className={classes.input}                
                onChange={onChange}
                value={formData.email}
                >   
                </TextField>
                <TextareaAutosize variant='outlined' className={classes.textArea} placeholder="Message...."/>
                
                <Button
                className={classes.buttons}
                disabled = { formData.name && formData.email ? false : true }
                >Submit</Button>
            </form>
        </ContactPage>
    )
}

export default Contact