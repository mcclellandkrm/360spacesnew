'use client'

import { motion } from 'framer-motion'

const portfolioItems = [
  {
    title: 'The Golden Spoon Restaurant',
    industry: 'Hospitality',
    package: 'Professional',
    description: 'Elegant dining room showcase with custom hotspots highlighting signature dishes and ambiance.',
    features: ['HDR Photography', 'Custom Branding', 'Menu Integration'],
    image: '🍽️',
    color: 'from-orange-400 to-red-500'
  },
  {
    title: 'Premier Auto Gallery',
    industry: 'Automotive',
    package: 'Enterprise',
    description: 'Complete showroom tour with drone exterior shots and detailed vehicle viewing capabilities.',
    features: ['Drone Integration', '3DVista Platform', 'Vehicle Configurator'],
    image: '🚗',
    color: 'from-blue-400 to-blue-600'
  },
  {
    title: 'Modern Kitchen Design Center',
    industry: 'Retail',
    package: 'Premium',
    description: 'Interactive showroom featuring multiple kitchen displays with product information hotspots.',
    features: ['Insta360 X5', 'Product Catalog', 'Lead Capture'],
    image: '🏪',
    color: 'from-purple-400 to-pink-500'
  },
  {
    title: 'TechFlow Manufacturing',
    industry: 'Industrial',
    package: 'Enterprise',
    description: 'Safety training tour with video integration and process documentation.',
    features: ['Video Hotspots', 'Training Modules', 'Safety Annotations'],
    image: '🏭',
    color: 'from-gray-400 to-gray-600'
  },
  {
    title: 'Riverside University Campus',
    industry: 'Education',
    package: 'Professional',
    description: 'Comprehensive campus tour featuring academic buildings, dormitories, and facilities.',
    features: ['Multi-Building Tour', 'Information Hotspots', 'Virtual Open House'],
    image: '🎓',
    color: 'from-green-400 to-emerald-500'
  },
  {
    title: 'Sunset View Condominiums',
    industry: 'Real Estate',
    package: 'Premium',
    description: 'Luxury property showcase with floor plans and amenity highlights.',
    features: ['Floor Plan Integration', 'Amenity Tours', 'Neighborhood Context'],
    image: '🏘️',
    color: 'from-yellow-400 to-orange-500'
  }
]

const stats = [
  { label: 'Projects Completed', value: '500+' },
  { label: 'Industries Served', value: '15+' },
  { label: 'Client Satisfaction', value: '98%' },
  { label: 'Average View Time', value: '3.5min' }
]

export default function PortfolioPage() {
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
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our collection of professional virtual tours across diverse industries. 
              See how we&apos;ve helped businesses transform their digital presence and engage customers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each project showcases our commitment to quality and innovation. 
              Click any project to explore the interactive virtual tour.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300"
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${item.color} p-6 text-white`}>
                  <div className="text-4xl mb-2">{item.image}</div>
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-white/90">{item.industry}</span>
                    <span className="bg-white/20 px-2 py-1 rounded">{item.package}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.features.map((feature) => (
                        <span
                          key={feature}
                          className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors group-hover:bg-blue-700"
                  >
                    View Virtual Tour →
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-12"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Success Story: The Golden Spoon
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    <strong>Challenge:</strong> The Golden Spoon needed to showcase their elegant 
                    dining atmosphere to attract more reservations and compete with larger establishments.
                  </p>
                  <p>
                    <strong>Solution:</strong> We created a Professional package virtual tour 
                    featuring HDR photography, custom branding, and menu integration hotspots.
                  </p>
                  <p>
                    <strong>Results:</strong> 40% increase in online reservations, 65% more time 
                    spent on their website, and featured placement in Google search results.
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Read Full Case Study
                </motion.button>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-center">
                  <div className="text-6xl mb-4">🍽️</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Interactive Demo</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Experience the virtual tour that transformed their business
                  </p>
                  <div className="bg-gray-100 rounded-lg p-8 mb-4">
                    <div className="text-gray-500">Virtual Tour Embed</div>
                    <div className="text-sm text-gray-400">Click to explore →</div>
                  </div>
                  <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                    View Full Tour
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Showcase Your Space?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join our portfolio of successful businesses. Get started with a free consultation 
              and see how a virtual tour can transform your customer experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Start Your Project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Schedule Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
