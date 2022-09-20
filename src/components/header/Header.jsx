import React from 'react'
import './Header.css';
const Header = () => {
    return (
        <div className='Header'>
            <h1>Le monde des pirates</h1>
            <div className="desc">
                <nav>
                    <ul>
                        <li>Accueil</li>
                        <li>Connexion</li>
                        <li>Contact</li>
                        <li>A propos</li>
                    </ul>
                </nav>

            </div>
        </div>
    )
}

export default Header
