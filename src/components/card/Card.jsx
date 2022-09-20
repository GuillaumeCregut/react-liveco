import React from 'react'
import './Card.css';

const Card = ({ name, firstname, nickname, resume, picture, sex }) => {
    return (
        <div className={sex === 'f' ? 'Card Female' : 'Card Male'}>
            <img src={picture} alt={name} className="CardImg" />
            <div className="Infos">
                <ul className="Identity">
                    <li> nom : {name}</li>
                    <li>prénom : {firstname}</li>
                    <li>Surnom {nickname}</li>
                </ul>
                <div className="resume">
                    {resume}
                </div>
            </div>
        </div>
    )
}

export default Card