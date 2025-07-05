import React, { useEffect, useRef, useState } from 'react';
import { Award, Calendar } from 'lucide-react';

const Certifications = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const certifications = [
    {
      title: 'IBM Professional Data Science',
      issuer: 'IBM',
      date: 'Mar 2025',
      description: 'Comprehensive program covering data science methodology, Python programming, data analysis, machine learning, and data visualization.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Intro to Data Science, AI, DL',
      issuer: 'Infosys Springboard',
      date: 'Aug 2024',
      description: 'Foundational certification in data science, artificial intelligence, and deep learning concepts.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'AI Primer',
      issuer: 'Infosys Springboard',
      date: 'Aug 2024',
      description: 'Introduction to artificial intelligence fundamentals and practical applications.',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      title: 'Generative AI',
      issuer: 'Infosys Springboard',
      date: 'Aug 2024',
      description: 'Advanced certification in generative AI technologies and large language models.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'AI/ML for Geodata',
      issuer: 'IIRS',
      date: 'Oct 2024',
      description: 'Specialized certification in applying AI and ML techniques to geospatial data analysis.',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Journey to Cloud',
      issuer: 'IBM',
      date: 'Sep 2024',
      description: 'Comprehensive cloud computing certification covering IBM Cloud services and deployment.',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Data Science',
      issuer: 'Intrnforte',
      date: 'Sep-Nov 2024',
      description: 'Practical data science certification with hands-on project experience.',
      gradient: 'from-yellow-500 to-orange-500'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.3 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="certifications" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Certifications
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Professional certifications that validate my expertise in AI, data science, cloud computing, and emerging technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                ref={(el) => (itemRefs.current[index] = el)}
                data-index={index}
                className={`group bg-slate-700/50 rounded-xl border border-slate-600/50 overflow-hidden hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${
                  visibleItems.includes(index)
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`h-2 bg-gradient-to-r ${cert.gradient}`}></div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${cert.gradient} group-hover:scale-110 transition-transform duration-300`}>
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-200">
                          {cert.title}
                        </h3>
                        <p className="text-cyan-400 font-semibold">{cert.issuer}</p>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar size={16} className="mr-1" />
                      {cert.date}
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed text-sm">
                    {cert.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 px-6 py-3 rounded-lg border border-cyan-500/30">
              <Award className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-semibold">Continuously Learning & Growing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;