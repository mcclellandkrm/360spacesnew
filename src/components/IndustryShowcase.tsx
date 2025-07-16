'use client'

import { motion } from 'framer-motion'

const industries = [
  {
    name: 'Hospitality',
    icon: '🏨',
    description: 'Restaurants, cafes, hotels',
    benefits: ['Showcase ambiance', 'Attract bookings', 'Virtual reservations'],
    color: 'from-orange-400 to-red-500'
  },
  {
    name: 'Automotive',
    icon: '🚗',
    description: 'Car showrooms, dealerships',
    benefits: ['Virtual showroom tours', 'Remote vehicle viewing', 'Enhanced sales'],
    color: 'from-blue-400 to-blue-600'
  },
  {
    name: 'Retail & Design',
    icon: '🏪',
    description: 'Kitchen showrooms, tile centers',
    benefits: ['Product visualization', 'Interactive displays', 'Design inspiration'],
    color: 'from-purple-400 to-pink-500'
  },
  {
    name: 'Industrial',
    icon: '🏭',
    description: 'Factories, warehouses',
    benefits: ['Safety training', 'Remote inspections', 'Process documentation'],
    color: 'from-gray-400 to-gray-600'
  },
  {
    name: 'Education',
    icon: '🎓',
    description: 'Schools, universities',
    benefits: ['Virtual open days', 'Campus tours', 'Remote learning'],
    color: 'from-green-400 to-emerald-500'
  },
  {
    name: 'Real Estate',
    icon: '🏘️',
    description: 'Properties, developments',
    benefits: ['Enhanced listings', 'Virtual viewings', 'Faster sales'],
    color: 'from-yellow-400 to-orange-500'
  }
]

export default function IndustryShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Industries We Transform
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our 360° virtual tour solutions are tailored to meet the unique needs of diverse industries, 
            helping businesses showcase their spaces and engage customers in innovative ways.
          </p>
        </motion.div>

        {/* Industry Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl transition-all duration-300"
            >
              {/* Header with gradient */}
              <div className={`bg-gradient-to-r ${industry.color} p-6 text-white`}>
                <div className="text-4xl mb-2">{industry.icon}</div>
                <h3 className="text-xl font-bold mb-1">{industry.name}</h3>
                <p className="text-white/90 text-sm">{industry.description}</p>
              </div>

              {/* Content */}
              <div className="p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                <ul className="space-y-2">
                  {industry.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-6 w-full bg-gray-50 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-100 transition-colors group-hover:bg-blue-50 group-hover:text-blue-600"
                >
                  View {industry.name} Examples
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Don&apos;t See Your Industry?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our flexible 360° tour solutions can be customized for any business. 
              Contact us to discuss your specific needs and see how we can help transform your space.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Discuss Custom Solution
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
