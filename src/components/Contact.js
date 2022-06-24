// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import './Contact.css';

const Contact = (props) => {
    const {nama} = props;
    const {nomor} = props;
    const {email} = props;
    const {photo} = props;

    return (
        <div className='cardContact'>
            <div className='cardImage'>
                <img src={photo} alt='contact' />
            </div>
            <div className='cardText'>
                <h3>{nama}</h3>
                <p>{nomor}</p>
                <p>{email}</p>
            </div>
        </div>
    )
}
export  default Contact;