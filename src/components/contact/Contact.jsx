import "./contact.scss";

const Contact = () => {
    return(
        <div className="contact main-wrapper" id="contact">
        <div className="contact__block main-component">
          <h2>Contact Us</h2>
          <form className="contact__block-form">
            <input type="text" placeholder="Your Full Name"/>
            <input type="email" placeholder="Your Email" />
            <input type="text" placeholder="Your Telegram Username (if applicable)"/>
            <input type="tel" placeholder="your phone number" />
            <textarea name="" id="" placeholder="Your Message"></textarea>
            <button className="contact__block-form-submit" type="submit">Send</button>
          </form>
        </div>
      </div>
    )
};

export default Contact;
