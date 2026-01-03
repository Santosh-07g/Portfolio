import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone, FaTwitter } from 'react-icons/fa' 
import { FaEnvelope } from 'react-icons/fa' 

const Contact = () => {
  return (
    <motion.div
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
      className="py-20 bg-dark-200">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-4">
                Get in <span className="text-purple">Touch</span>
            </h2>
            <p className="text-gray-400 text-center max-w-2xl mx-auto">
                Have a project in mind or want to collaborate? Feel free to reach out!
            </p>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto mt-12'>
                {/* contact form */}
                <div>
                    <form>
                        <div>
                            <label htmlFor="name" className="block text-gray-300 mb-1 mt-1">Your Name</label>
                            <input className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none' type="text"/>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-300 mb-1 mt-2">Your Email</label>
                            <input className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none' type="email"/>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-gray-300 mb-1 mt-2">Your Message</label>
                            <textarea className='w-full h-40 bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none' type="text"/>
                        </div>
                        <button type="submit" className='w-full px-6 py-3 bg-purple font-medium rounded-lg
                         hover:bg-purple-700 transition duration-300 cursor-pointer'>Send Message</button>
                    </form> 
                </div>
                {/* contact info */}
                    <div className="space-y-8">
                    {/* Location */}
                    <div className="flex items-start mt-5">
                        <div className="text-purple text-2xl mr-4">
                        <FaMapMarkerAlt />
                        </div>
                            <div>
                            <h3 className="text-lg font-semibold mb-1">Location</h3>
                            <p className="text-gray-400">Bangalore, Karnataka</p>
                            </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start">
                        <div className="text-purple text-2xl mr-4">
                        <FaEnvelope />
                        </div>
                        <div>
                            <h2>Email</h2>
                            <a href="mailto:santoshgurkhe602@gmail.com" className="text-gray-400 hover:text-purple">
                                santoshgurkhe602@gmail.com
                            </a>

                        </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start">
                        <div className="text-purple text-2xl mr-4">
                        <FaPhone />
                        </div>
                        <div>
                            <h2>Phone</h2>
                            <a href="tel:+919880232612" className="text-gray-400 hover:text-purple">
                            +91 9880232612
                            </a>
                        </div>
                    </div>
                    <div className='pt-4'>
                        <h3 className='text-lg font-semibold mb-4'>Follow Me </h3>
                        <div className="flex space-x-4">
                            <a href="https://github.com/dashboard" className='w-12 h-12 bg-dark-300 flex items-center justify-center 
                            rounded-full text-white hover:bg-purple hover:text-white transition duration-300'>
                               <FaGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/santosh49/" className='w-12 h-12 bg-dark-300 flex items-center justify-center 
                            rounded-full text-blue-800 hover:bg-blue-800 hover:text-white transition duration-300'>
                               <FaLinkedin />
                            </a>
                            <a href="https://x.com/home" className='w-12 h-12 bg-dark-300 flex items-center justify-center 
                            rounded-full text-blue hover:bg-blue hover:text-white transition duration-300'>
                               <FaTwitter />
                            </a>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    </motion.div>

  )
}

export default Contact