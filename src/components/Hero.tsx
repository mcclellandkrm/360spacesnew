'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Transform Your Business with
              <span className="text-blue-600 block">360° Virtual Tours</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Showcase your space like never before. From basic Google Street View integration 
              to enterprise-grade 3DVista solutions with drone footage. Trusted by businesses 
              across hospitality, automotive, retail, industrial, and education sectors.
            </p>
            
            {/* Service Highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-700">Google Street View</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-700">HDR Photography</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-700">Drone Integration</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-700">3DVista Custom Tours</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg"
              >
                View Our Portfolio
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-colors"
              >
                Get Free Quote
              </motion.button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">Trusted by 500+ businesses</p>
              <div className="flex items-center justify-center lg:justify-start space-x-8 opacity-60">
                <div className="text-sm font-medium text-gray-600">Google Partner</div>
                <div className="text-sm font-medium text-gray-600">3DVista Certified</div>
                <div className="text-sm font-medium text-gray-600">Drone Licensed</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Hero Image/Video Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Placeholder for 360 tour demo */}
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-lg font-semibold">Interactive 360° Tour Demo</p>
                  <p className="text-sm opacity-90">Click to explore</p>
                </div>
              </div>
              
              {/* Industry Examples Carousel */}
              <div className="p-6">
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <span>🏨 Hospitality</span>
                  <span>🚗 Automotive</span>
                  <span>🏪 Retail</span>
                  <span>🏭 Industrial</span>
                  <span>🎓 Education</span>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Tours Created</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-4"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">98%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 right-0 -z-10 opacity-20">
        <svg width="404" height="384" fill="none" viewBox="0 0 404 384">
          <defs>
            <pattern id="hero-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" className="text-blue-500" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="384" fill="url(#hero-pattern)" />
        </svg>
      </div>
    </section>
  )
}
