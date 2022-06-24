// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import './Contact.css';

const Contact = (props) => {

    return (
        <div className='cardContact'>
            <div className='cardImage'>
                <img src={props.data.photo} alt='contact' />
            </div>
            <div className='cardText'>
                <h3>{props.data.name}</h3>
                <p>{props.data.phone}</p>
                <p>{props.data.email}</p>
            </div>
        </div>
    )
}
export  default Contact;