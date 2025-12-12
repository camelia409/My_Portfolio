import { useState } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, MessageCircle, Download } from 'lucide-react';

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
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">
                Get In Touch
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8 rounded-full"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about AI and technology. Let's connect!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="glass-panel p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-4 group p-4 rounded-xl hover:bg-white/5 transition-colors duration-300">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${info.gradient} group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <div className="text-white">{info.icon}</div>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">{info.title}</h4>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 block"
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

              <div className="glass-panel p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">Follow Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 rounded-xl bg-gradient-to-r ${social.gradient} text-white hover:scale-110 hover:shadow-lg transition-all duration-300`}
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div className="glass-panel p-8 rounded-2xl">
                <h4 className="text-xl font-bold text-white mb-4">Quick Actions</h4>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={handleDownloadResume}
                    className="flex items-center justify-center space-x-2 w-full bg-gradient-to-r from-cyan-500 to-purple-500 px-4 py-3 rounded-xl text-white font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25"
                  >
                    <Download size={20} />
                    <span>Resume</span>
                  </button>
                  <a
                    href="mailto:abinandida4@gmail.com?subject=Job Opportunity"
                    className="flex items-center justify-center space-x-2 w-full border border-cyan-500/50 bg-cyan-500/10 px-4 py-3 rounded-xl text-cyan-400 font-semibold hover:bg-cyan-500/20 transition-all duration-200"
                  >
                    <MessageCircle size={20} />
                    <span>Hire Me</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-panel p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 font-medium mb-2 text-sm uppercase tracking-wider">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="glass-input w-full px-4 py-3 rounded-xl outline-none"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 font-medium mb-2 text-sm uppercase tracking-wider">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="glass-input w-full px-4 py-3 rounded-xl outline-none"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-300 font-medium mb-2 text-sm uppercase tracking-wider">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="glass-input w-full px-4 py-3 rounded-xl outline-none"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 font-medium mb-2 text-sm uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="glass-input w-full px-4 py-3 rounded-xl outline-none resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 px-6 py-4 rounded-xl text-white font-bold text-lg hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
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