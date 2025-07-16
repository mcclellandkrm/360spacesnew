'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const footerLinks = {
  Services: [
    { name: 'Essential Package', href: '/services#essential' },
    { name: 'Professional Package', href: '/services#professional' },
    { name: 'Premium Package', href: '/services#premium' },
    { name: 'Enterprise Solutions', href: '/services#enterprise' },
  ],
  Industries: [
    { name: 'Hospitality', href: '/industries/hospitality' },
    { name: 'Automotive', href: '/industries/automotive' },
    { name: 'Retail & Design', href: '/industries/retail' },
    { name: 'Industrial', href: '/industries/industrial' },
    { name: 'Education', href: '/industries/education' },
    { name: 'Real Estate', href: '/industries/real-estate' },
  ],
  Company: [
    { name: 'About Us', href: '/about' },
    { name: 'Technology', href: '/technology' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ],
  Support: [
    { name: 'Help Center', href: '/help' },
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
}

const socialLinks = [
  { name: 'LinkedIn', href: '#', icon: '💼' },
  { name: 'Twitter', href: '#', icon: '🐦' },
  { name: 'Instagram', href: '#', icon: '📸' },
  { name: 'YouTube', href: '#', icon: '📺' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/" className="text-2xl font-bold text-blue-400 mb-4 block">
                360Spaces
              </Link>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Transforming businesses with professional 360° virtual tours. 
                From high-qualityGoogle Street View, Maps and Search integration to enterprise 3DVista solutions, 
                we help you showcase your space, instill confidence and engage customers like never before.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center">
                  <span className="mr-2">📍</span>
                  <span>Mt. Vernon House, Second Floor, Belfast, BT364BA</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">📞</span>
                  <a href="tel:+447960044486" className="hover:text-blue-400 transition-colors">
                    +44 7960 044 486
                  </a>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">📧</span>
                  <a href="mailto:info@360spaces.co.uk" className="hover:text-blue-400 transition-colors">
                    info@360spaces.co.uk
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-gray-800"
        >
          <div className="max-w-md">
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4">
              Receive updates, offers, trends, case studies, and industry insights.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-gray-800 border border-gray-700 rounded-l-lg px-4 py-2 text-sm focus:outline-none focus:border-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-r-lg text-sm font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 360Spaces. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label={social.name}
              >
                <span className="text-lg">{social.icon}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 pt-6 border-t border-gray-800 text-center"
        >
          <p className="text-gray-500 text-xs mb-4">Certified & Licensed</p>
          <div className="flex justify-center space-x-8 text-gray-600 text-sm">
            <span>Google Street View Trusted Partner</span>
            <span>3DVista Professional Tour Creator</span>
            <span>CAA Licensed Drone Pilot</span>
            <span>Insured & Bonded</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
