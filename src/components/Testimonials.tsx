'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Sarah Chen',
    company: 'The Golden Spoon Restaurant',
    industry: 'Hospitality',
    quote: 'The 360° tour has transformed how customers find and discover our restaurant. Bookings increased by 40% after implementing the virtual tour on our website and Google listing.',
    rating: 5,
    image: '🍽️'
  },
  {
    name: 'Michael Rodriguez',
    company: 'Premier Auto Gallery',
    industry: 'Automotive',
    quote: 'Our virtual showroom allows customers to explore our inventory 24/7. The professional quality and drone integration showcases our facility perfectly.',
    rating: 5,
    image: '🚗'
  },
  {
    name: 'Emily Watson',
    company: 'Modern Kitchen Design',
    industry: 'Retail',
    quote: 'The interactive hotspots and custom branding in our virtual showroom help customers visualize their dream kitchen. Sales team loves the lead capture features.',
    rating: 5,
    image: '🏪'
  },
  {
    name: 'David Park',
    company: 'TechFlow Manufacturing',
    industry: 'Industrial',
    quote: 'Using 360° tours for safety training and remote inspections has been a game-changer. The Enterprise package with 3DVista meets all our complex requirements.',
    rating: 5,
    image: '🏭'
  },
  {
    name: 'Dr. Amanda Foster',
    company: 'Riverside University',
    industry: 'Education',
    quote: 'Virtual campus tours have revolutionized our recruitment process. Prospective students can explore our facilities from anywhere in the world.',
    rating: 5,
    image: '🎓'
  },
  {
    name: 'James Thompson',
    company: 'Elite Properties',
    industry: 'Real Estate',
    quote: 'Properties with virtual tours sell 31% faster than traditional listings. The quality and Google integration provide excellent ROI for our clients.',
    rating: 5,
    image: '🏘️'
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how businesses across different industries are using our 360° virtual tours 
            to engage customers, increase sales, and transform their digital presence.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 mb-6 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-2xl mr-4">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.company}</div>
                  <div className="text-xs text-blue-600 font-medium">{testimonial.industry}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Industry Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Real Results Across Industries
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">40%</div>
              <div className="text-gray-600 font-medium mb-1">Average Increase</div>
              <div className="text-sm text-gray-500">in Customer Engagement</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">31%</div>
              <div className="text-gray-600 font-medium mb-1">Faster Sales</div>
              <div className="text-sm text-gray-500">for Properties with Tours</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">65%</div>
              <div className="text-gray-600 font-medium mb-1">More Time Spent</div>
              <div className="text-sm text-gray-500">on Business Websites</div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            See how a professional 360° virtual tour can transform your business 
            and deliver measurable results for your industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View Portfolio
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              Get Free Quote
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
