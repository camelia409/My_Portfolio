import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle, Download } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const mailtoLink = `mailto:abinandida4@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    
    setIsSubmitting(false);
  };

  const handleDownloadResume = () => {
    // This would generate a PDF from resume data
    const link = document.createElement('a');
    link.href = '/ProfessionalResume.pdf';
    link.download = 'Abinandida_R_Resume.pdf';
    link.click();
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'abinandida4@gmail.com',
      link: 'mailto:abinandida4@gmail.com',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      value: 'Coimbatore, India',
      link: null,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'Let\'s Connect',
      value: 'Open to opportunities',
      link: null,
      gradient: 'from-green-500 to-teal-500'
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: 'GitHub',
      url: 'https://github.com/camelia409',
      gradient: 'from-gray-600 to-gray-800'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/abinandida-r-377128258',
      gradient: 'from-blue-600 to-blue-800'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      name: 'Email',
      url: 'mailto:abinandida4@gmail.com',
      gradient: 'from-red-500 to-red-700'
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about AI and technology. Let's connect!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-4 group">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${info.gradient} group-hover:scale-110 transition-transform duration-300`}>
                        <div className="text-white">{info.icon}</div>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">{info.title}</h4>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-400">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Follow Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-lg bg-gradient-to-r ${social.gradient} text-white hover:scale-110 transition-transform duration-200`}
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                <h4 className="text-xl font-bold text-white mb-4">Quick Actions</h4>
                <div className="space-y-3">
                  <button
                    onClick={handleDownloadResume}
                    className="flex items-center space-x-2 w-full bg-gradient-to-r from-cyan-500 to-purple-500 px-4 py-3 rounded-lg text-white font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-200 transform hover:scale-105"
                  >
                    <Download size={20} />
                    <span>Download Resume</span>
                  </button>
                  <a
                    href="mailto:abinandida4@gmail.com?subject=Job Opportunity"
                    className="flex items-center space-x-2 w-full border-2 border-cyan-400 px-4 py-3 rounded-lg text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-200 text-center justify-center"
                  >
                    <MessageCircle size={20} />
                    <span>Hire Me</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors duration-200"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-300 font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors duration-200"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors duration-200 resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 px-6 py-3 rounded-lg text-white font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={20} />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;