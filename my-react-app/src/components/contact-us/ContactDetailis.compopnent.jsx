

const ContactDetails = () =>{

    return(

        <div>
            <header>
                <h1>Contact Us</h1>
            </header>
            <div className="contact-details">
                <div className="text-timimg">Message us on WhatsApp<br/><br/>Business Hours: 10 am to 6:30 pm<br/>(Monday to Saturday)</div>
                
                <div className="how-to-contact">
                    <div className="call-mail">
                        <div className="call">
                            <div className="call-img">
                                <img src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/istockphoto-1280270505-170667a.png?v=1633437242" alt="call" />
                            </div>
                            <div className="text">
                                <a href="tel:8447704734">8447704734</a>
                            </div>
                        </div>

                        <div className="call">
                            <a href="https://api.whatsapp.com/send?phone=8447704734">
                                <div className="call-img">
                                    <img src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Whatsapp-Black-Icon-PNG-Image_480x480.png?v=1591938885" alt="call" />
                                </div>
                                <div className="number">
                                    8447704734
                                </div>
                            </a>
                        </div>

                        <div className="call">
                            <a href="mailto:care@dotandkey.com">
                                <div className="call-img">
                                    <img src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/email_PNG55_480x480.png?v=1591870855" alt="call" />
                                </div>
                                <div className="text">
                                    <a href="mailto:care@dotandkey.com">care@dotandkey.com</a>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactDetails;