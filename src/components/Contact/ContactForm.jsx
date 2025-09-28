import { useState } from 'react'
import { sendToSheet } from '../../utils/sheetdb'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    try {
      await sendToSheet(formData)
      setIsSuccess(true)
      setFormData({ name: '', email: '', phone: '', service: '', message: '' })
    } catch (err) {
      setError('Failed to submit. Please try again.')
    }
    setIsLoading(false)
  }

  if (isSuccess) {
    return (
      <div className="text-green-600 font-semibold text-center py-8">
        Thank you for contacting us! We will get back to you soon.
      </div>
    )
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your Name"
        required
        className="w-full px-4 py-2 border rounded"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Your Email"
        required
        className="w-full px-4 py-2 border rounded"
      />
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Your Phone"
        required
        className="w-full px-4 py-2 border rounded"
      />
      <input
        type="text"
        name="service"
        value={formData.service}
        onChange={handleChange}
        placeholder="Service Interested In"
        required
        className="w-full px-4 py-2 border rounded"
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Your Message"
        required
        className="w-full px-4 py-2 border rounded"
      />
      {error && <div className="text-red-600">{error}</div>}
      <button
        type="submit"
        disabled={isLoading}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        {isLoading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}

export default ContactForm