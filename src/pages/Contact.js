import React, { useState } from 'react';
import {  Button,  TextareaAutosize,  TextField } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import useStyles from '../hook/Style';
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
            <article>
                <h1>Learn More</h1>
                <p>If you have any questions about our offer, please contact us by filling out the form below and we will get in touch with you shortly. Alternatively, you can give us a call – we hope to hear from  you soon!
                </p>
            </article>
            <form className={classes.form} onSubmit={handleSubmit}>
                <TextField
                required
                error = {formData.name ==='' ? true : false}
                name="name"
                type="text"
                placeholder="Name"
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
                onChange={onChange}
                value={formData.email}
                >   
                </TextField>
                <TextareaAutosize className={classes.textArea} multiline placeholder="Message"/>
                
                <Button
                className={classes.buttons}
                disabled = { formData.name && formData.email ? false : true }
                >Submit</Button>
            </form>
        </ContactPage>
    )
}

export default Contact