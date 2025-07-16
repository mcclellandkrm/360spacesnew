'use client'

import { motion } from 'framer-motion'
import ServiceTiers from '@/components/ServiceTiers'

const pricingAddOns = [
  {
    name: 'Additional Photos',
    essential: '$15/photo',
    professional: '$12/photo',
    premium: '$10/photo',
    enterprise: 'Included'
  },
  {
    name: 'Rush Delivery (24hr)',
    essential: '$150',
    professional: '$200',
    premium: '$250',
    enterprise: 'Included'
  },
  {
    name: 'Custom Branding',
    essential: 'Not Available',
    professional: '$100',
    premium: 'Included',
    enterprise: 'Included'
  },
  {
    name: 'Video Integration',
    essential: 'Not Available',
    professional: '$200',
    premium: '$150',
    enterprise: 'Included'
  },
  {
    name: 'Lead Capture Forms',
    essential: 'Not Available',
    professional: '$75',
    premium: 'Included',
    enterprise: 'Included'
  }
]

export default function PricingPage() {
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
              Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect package for your business needs. All prices include professional photography, 
              editing, hosting, and ongoing support. No hidden fees, no surprises.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Tiers */}
      <ServiceTiers />

      {/* Add-ons Pricing Table */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Add-ons & Customizations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enhance your virtual tour with additional features and services. 
              Mix and match to create the perfect solution for your business.
            </p>
          </motion.div>

          {/* Add-ons Table */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Add-on Service</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Essential</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Professional</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Premium</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {pricingAddOns.map((addon, index) => (
                    <motion.tr
                      key={addon.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="hover:bg-gray-50"
                    >
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{addon.name}</td>
                      <td className="px-6 py-4 text-sm text-gray-600 text-center">{addon.essential}</td>
                      <td className="px-6 py-4 text-sm text-gray-600 text-center">{addon.professional}</td>
                      <td className="px-6 py-4 text-sm text-gray-600 text-center">{addon.premium}</td>
                      <td className="px-6 py-4 text-sm text-green-600 font-medium text-center">{addon.enterprise}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pricing FAQ
            </h2>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                question: "What's included in the base price?",
                answer: "All packages include professional photography, editing, hosting for 1 year, basic analytics, and ongoing technical support. Mobile-friendly viewing and Google My Business integration are standard."
              },
              {
                question: "Are there any setup or hosting fees?",
                answer: "No setup fees! Hosting is included for the first year. After that, hosting is $50/year for Essential and Professional, $75/year for Premium, and $100/year for Enterprise packages."
              },
              {
                question: "How long does the process take?",
                answer: "Typical turnaround is 48-72 hours for Essential and Professional packages, 3-5 days for Premium, and 5-7 days for Enterprise. Rush delivery is available for an additional fee."
              },
              {
                question: "Can I upgrade my package later?",
                answer: "Yes! You can upgrade to a higher tier at any time. We'll credit your original payment and only charge the difference. Additional features can also be added individually."
              },
              {
                question: "Do you offer payment plans?",
                answer: "Yes, we offer flexible payment options for Premium and Enterprise packages. Contact our sales team to discuss terms that work for your budget."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Schedule a free consultation to discuss your project and get a custom quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Schedule Free Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Request Custom Quote
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
