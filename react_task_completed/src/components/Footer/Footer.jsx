import "./Footer.css";

function Footer() {
    return (
        <section className="footer_bg">
            <img className="footer_img" src="/images/logo.png"/>

            <div className="footer">
                <div>
                    <div className="footer_heading">
                        Address
                    </div>
                    <div className="details">
                        <div>
                            Leaf & Letter Books
                        </div>
                        <div>
                            148 Willow Street
                        </div>
                        <div>
                            Portland, OR 97205
                        </div>
                    </div>
                </div>

                <div>
                    <div className="footer_heading">
                        Opening Hours
                    </div>
                    <div className="details">
                        <div>
                            Monday-Friday: 9:00 AM - 7:00 PM
                        </div>
                        <div>
                            Saturday: 10:00 AM - 6:00 PM
                        </div>
                        <div>
                            Sunday: 11:00 AM - 5:00 PM
                        </div>
                    </div>
                </div>

                <div>
                    <div className="footer_heading">
                        Contact
                    </div>
                    <div className="details">
                        <div>
                            Phone: +1 503 555 0148
                        </div>
                        <div>
                            Email: hello@leafandletterbooks.com
                        </div>
                    </div>
                </div>

                <div>
                    <div className="footer_heading">
                        Send Us a Message
                    </div>
                    <div className="details">
                        <div>
                            Looking for a particular title, planning a <br/> book-club order, or interested in an <br/> upcoming event?
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer