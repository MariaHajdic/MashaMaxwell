import { useState } from "react"
import '../styles/ContactForm.css'

const ContactForm = ({ onClose }: Props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [status, setStatus] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("Sending...")

    try {
    const response = await fetch("https://email-worker-mashaamaxwell.marianneliash.workers.dev", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
    })

    if (response.ok) {
        setStatus("Message sent successfully!")
        setFormData({ name: "", email: "", message: "" })
    } else {
        setStatus("Failed to send message.")
    }
    } catch (error) {
        setStatus("Error sending message.")
    }
  }

  return (
    <div className="contact-form">
      <h2>Get in Touch</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name"
          value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" 
          value={formData.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" 
          value={formData.message} onChange={handleChange} required />
        <button type="submit">Send</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  )
}

export default ContactForm
