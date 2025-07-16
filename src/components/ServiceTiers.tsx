'use client'

import { motion } from 'framer-motion'

const serviceTiers = [
  {
    name: 'Essential',
    price: '$299',
    description: 'Perfect for small businesses getting started',
    features: [
      'Basic Google Street View integration',
      'Up to 10 panoramic photos',
      'Basic photo editing',
      'Google My Business listing',
      'Mobile-friendly viewing',
      'Basic analytics'
    ],
    color: 'border-gray-200',
    bgColor: 'bg-white',
    popular: false
  },
  {
    name: 'Professional',
    price: '$799',
    description: 'Enhanced quality for growing businesses',
    features: [
      'DSLR quality photography',
      'HDR post-production',
      'Up to 25 panoramic photos',
      'Custom hotspots',
      'Branded player',
      'SEO optimization',
      'Advanced analytics',
      'Social media integration'
    ],
    color: 'border-blue-200',
    bgColor: 'bg-blue-50',
    popular: true
  },
  {
    name: 'Premium',
    price: '$1,299',
    description: 'Advanced features with cutting-edge equipment',
    features: [
      'Insta360 X5 professional camera',
      'Enhanced image quality',
      'Up to 40 panoramic photos',
      'Interactive floor plans',
      'Custom branding',
      'Lead capture forms',
      'CRM integration',
      'Priority support',
      'Video integration'
    ],
    color: 'border-purple-200',
    bgColor: 'bg-purple-50',
    popular: false
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Complete solution with unlimited possibilities',
    features: [
      'Full 3DVista custom tours',
      'Drone integration (aerial + ground)',
      'Unlimited panoramic photos',
      'Custom interactive elements',
      'Video hotspots',
      'Multi-language support',
      'White-label solution',
      'Dedicated account manager',
      'Training and support',
      'Custom integrations'
    ],
    color: 'border-gold-200',
    bgColor: 'bg-gradient-to-br from-yellow-50 to-orange-50',
    popular: false
  }
]

export default function ServiceTiers() {
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
            Choose Your Perfect Solution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From basic Google Street View integration to enterprise-grade 3DVista solutions, 
            we have the right package to showcase your space and grow your business.
          </p>
        </motion.div>

        {/* Service Tiers Grid */}
        <div className="grid lg:grid-cols-4 gap-8">
          {serviceTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`relative ${tier.bgColor} rounded-2xl border-2 ${tier.color} p-8 shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {tier.price}
                  {tier.price !== 'Custom' && <span className="text-lg text-gray-500">/project</span>}
                </div>
                <p className="text-gray-600">{tier.description}</p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  tier.popular 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-blue-600 hover:text-blue-600'
                }`}
              >
                {tier.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need Something Different?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Every business is unique. We offer custom packages and hybrid solutions 
              that combine features from different tiers to meet your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Schedule Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
              >
                Compare All Plans
              </motion.button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500 mb-4">All plans include:</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <span>✓ 30-day satisfaction guarantee</span>
              <span>✓ Free revisions</span>
              <span>✓ Ongoing support</span>
              <span>✓ Fast turnaround</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
