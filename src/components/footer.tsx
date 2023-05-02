import '../style/footer.css'
import React from 'react';

const Footer = () => {
    return (
        <section className="footer">
            <div className="footer__wrapper">
                <div className="contacts">
                    Contact me: shiniasse.andyorl@gmail.com
                </div>
                <div className="copywrite">
                    © Andrew Orlov, 2023
                </div>
            </div>
        </section>
    );
};

export default Footer;