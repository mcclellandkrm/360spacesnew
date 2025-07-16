'use client'

import { motion } from 'framer-motion'

const technologies = [
  {
    name: 'Google Street View',
    description: 'Official Google integration for maximum visibility',
    features: ['Google My Business integration', 'Search result visibility', 'Mobile-first viewing'],
    icon: '🌐'
  },
  {
    name: 'DSLR Photography',
    description: 'Professional cameras for crystal-clear imagery',
    features: ['High resolution capture', 'HDR post-processing', 'Color correction'],
    icon: '📷'
  },
  {
    name: 'Insta360 X5',
    description: 'Cutting-edge 360° camera technology',
    features: ['8K resolution', 'Advanced stabilization', 'Real-time stitching'],
    icon: '📹'
  },
  {
    name: '3DVista Platform',
    description: 'Enterprise-grade virtual tour creation',
    features: ['Custom interactions', 'Video integration', 'Advanced analytics'],
    icon: '🏗️'
  },
  {
    name: 'Drone Integration',
    description: 'Aerial photography for comprehensive coverage',
    features: ['FAA licensed pilots', '4K aerial footage', 'Seamless integration'],
    icon: '🚁'
  },
  {
    name: 'AI Enhancement',
    description: 'Machine learning for optimal results',
    features: ['Auto-optimization', 'Smart cropping', 'Quality enhancement'],
    icon: '🤖'
  }
]

const processSteps = [
  {
    step: '01',
    title: 'Consultation',
    description: 'We assess your space and goals to recommend the perfect solution.'
  },
  {
    step: '02',
    title: 'Capture',
    description: 'Professional photography using state-of-the-art equipment.'
  },
  {
    step: '03',
    title: 'Production',
    description: 'Expert editing and processing to create stunning virtual tours.'
  },
  {
    step: '04',
    title: 'Delivery',
    description: 'Complete tour with hosting, analytics, and ongoing support.'
  }
]

export default function TechnologyOverview() {
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
            Cutting-Edge Technology
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We use the latest equipment and software to deliver exceptional virtual tour experiences 
            that engage your audience and drive business results.
          </p>
        </motion.div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl mb-4">{tech.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{tech.name}</h3>
              <p className="text-gray-600 mb-4">{tech.description}</p>
              <ul className="space-y-1">
                {tech.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-500 flex items-center">
                    <div className="w-1 h-1 bg-blue-500 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Proven Process
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From initial consultation to final delivery, we follow a streamlined process 
              that ensures quality results and exceptional client experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {process.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-blue-200 transform -translate-y-1/2"></div>
                  )}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{process.title}</h4>
                <p className="text-gray-600 text-sm">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">Tours Created</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">8K</div>
            <div className="text-gray-600">Resolution Quality</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">48hr</div>
            <div className="text-gray-600">Average Turnaround</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
