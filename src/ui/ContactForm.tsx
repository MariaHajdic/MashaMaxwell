import '../styles/ContactForm.css'

type Props = {
  onClose: () => void
}

const ContactForm = ({ onClose }: Props) => {
  return (
    <div className="contact-form__overlay" onClick={onClose}>
      <div className="contact-form" onClick={e => e.stopPropagation()}>
        <button className="contact-form__close" onClick={onClose}>&times;</button>
        <h2>Contact Me</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}

export default ContactForm