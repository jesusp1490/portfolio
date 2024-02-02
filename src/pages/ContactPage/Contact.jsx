import Navbar from "../../components/Navbar/Navbar"
import '../ContactPage/_Contact.scss';
 // Asumiendo que tienes un componente Navbar

const Contact = () => {
  return (
    <div className="contact-section">
      <Navbar />
      <div className="contact-card">
        <h2>Contact Me</h2>
        <form className="contact-form">
          <div className="input-container">
            <input type="text" name="name" required />
            <label htmlFor="name">Name</label>
            <div className="border-bottom"></div>
          </div>
          <div className="input-container">
            <input type="email" name="email" required />
            <label htmlFor="email">Email</label>
            <div className="border-bottom"></div>
          </div>
          <div className="input-container">
            <textarea name="message" required></textarea>
            <label htmlFor="message">Message</label>
            <div className="border-bottom"></div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="background-map">
        {/* <img src="https://res.cloudinary.com/dizd9f3ky/image/upload/v1706876322/Contact-bg1_m1isx6.jpg" alt="" /> */}
      </div>
    </div>
  );
};

export default Contact
