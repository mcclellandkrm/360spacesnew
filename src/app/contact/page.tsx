'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const contactMethods = [
  {
    icon: '📞',
    title: 'Phone',
    description: 'Speak with our experts',
    detail: '(123) 456-7890',
    subtext: 'Mon-Fri 9AM-6PM EST'
  },
  {
    icon: '📧',
    title: 'Email',
    description: 'Get detailed information',
    detail: 'hello@360spaces.com',
    subtext: 'Response within 24 hours'
  },
  {
    icon: '💬',
    title: 'Live Chat',
    description: 'Chat with our team',
    detail: 'Available now',
    subtext: 'Average response: 2 minutes'
  },
  {
    icon: '📍',
    title: 'Office',
    description: 'Visit our showroom',
    detail: '123 Business Ave, Suite 456',
    subtext: 'City, ST 12345'
  }
]

const serviceTypes = [
  'Google Street View Integration',
  'Professional Photography',
  'Premium Insta360 Tours',
  'Enterprise 3DVista Solutions',
  'Drone Integration',
  'Custom Development',
  'Training & Consultation',
  'Other'
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    industry: '',
    service: '',
    message: '',
    budget: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your inquiry! We\'ll get back to you within 24 hours.')
  }

  return (
    <main className="min-h-screen pt-16">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Let&apos;s Transform Your Space
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to showcase your business with a professional virtual tour? 
              Get in touch for a free consultation and custom quote.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{method.description}</p>
                <p className="text-blue-600 font-medium mb-1">{method.detail}</p>
                <p className="text-gray-500 text-xs">{method.subtext}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Get Your Free Quote
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
                      Industry
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select Industry</option>
                      <option value="hospitality">Hospitality</option>
                      <option value="automotive">Automotive</option>
                      <option value="retail">Retail & Design</option>
                      <option value="industrial">Industrial</option>
                      <option value="education">Education</option>
                      <option value="real-estate">Real Estate</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select Service</option>
                      {serviceTypes.map((service) => (
                        <option key={service} value={service.toLowerCase().replace(/\s+/g, '-')}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Budget Range</option>
                    <option value="under-500">Under $500</option>
                    <option value="500-1000">$500 - $1,000</option>
                    <option value="1000-2500">$1,000 - $2,500</option>
                    <option value="2500-5000">$2,500 - $5,000</option>
                    <option value="over-5000">Over $5,000</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your space, goals, and any specific requirements..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Send My Request
                </motion.button>
              </form>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Response Time */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  What Happens Next?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Initial Consultation</h4>
                      <p className="text-gray-600 text-sm">We&apos;ll contact you within 24 hours to discuss your project</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Custom Proposal</h4>
                      <p className="text-gray-600 text-sm">Receive a detailed quote tailored to your needs</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Project Kickoff</h4>
                      <p className="text-gray-600 text-sm">Schedule photography and begin your virtual tour</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Quick Answers
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">How long does it take?</h4>
                    <p className="text-gray-600 text-sm">Most projects are completed within 48-72 hours</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Do you travel for projects?</h4>
                    <p className="text-gray-600 text-sm">Yes, we serve clients nationwide with local photographers</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">What&apos;s included in the price?</h4>
                    <p className="text-gray-600 text-sm">Photography, editing, hosting, and 1 year of support</p>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-blue-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Need Immediate Assistance?
                </h3>
                <p className="text-gray-600 mb-4">
                  For urgent projects or time-sensitive inquiries, call us directly.
                </p>
                <a
                  href="tel:+1234567890"
                  className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  📞 Call Now: (123) 456-7890
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
