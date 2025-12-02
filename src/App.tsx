import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SectionDivider from './components/SectionDivider';
import ScrollProgress from './components/ScrollProgress';
import JourneyMap from './components/JourneyMap';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <CustomCursor />
      <ScrollProgress />
      <Header />
      
      {/* Story-Driven Sections with Narrative Flow */}
      <main className="relative">
        {/* Chapter 1: Introduction */}
        <section id="hero" className="snap-start">
          <Hero />
        </section>

        {/* Journey Map Section */}
        <section id="journey-map" className="snap-start">
          <JourneyMap />
        </section>

        <SectionDivider 
          chapterNumber={1}
          chapterTitle="Origins"
          subtitle="Where it all began - Building intelligent systems that transform data into insights, and ideas into reality."
          gradient="from-cyan-400 via-purple-400 to-pink-400"
        />

        {/* Chapter 2: Who I Am */}
        <section id="about" className="snap-start">
          <About />
        </section>

        <SectionDivider 
          chapterNumber={2}
          chapterTitle="Building the Foundation"
          subtitle="Sharpening my tools - Mastering the skills and knowledge that power innovation."
          gradient="from-purple-400 via-pink-400 to-cyan-400"
        />

        {/* Chapter 2: Skills */}
        <section id="skills" className="snap-start">
          <Skills />
        </section>

        <SectionDivider 
          chapterNumber={3}
          chapterTitle="Real-World Battles"
          subtitle="From internships to hackathons, every experience shapes the path forward."
          gradient="from-pink-400 via-orange-400 to-red-400"
        />

        {/* Chapter 3: Experience & Achievements */}
        <section id="experience" className="snap-start">
          <Experience />
        </section>

        <Achievements />

        <SectionDivider 
          chapterNumber={4}
          chapterTitle="Creating Impact"
          subtitle="Projects that push boundaries and solve real-world challenges with AI and technology."
          gradient="from-pink-400 via-purple-400 to-cyan-400"
        />

        {/* Chapter 4: Projects */}
        <section id="projects" className="snap-start">
          <Projects />
        </section>

        <SectionDivider 
          chapterNumber={6}
          chapterTitle="Training Arc"
          subtitle="Continuous learning and validation through professional certifications."
          gradient="from-purple-400 via-cyan-400 to-pink-400"
        />

        {/* Chapter 6: Certifications */}
        <section id="certifications" className="snap-start">
          <Certifications />
        </section>

        <SectionDivider 
          chapterNumber={7}
          chapterTitle="Let's Collaborate"
          subtitle="The final chapter - Let's create something extraordinary together."
          gradient="from-pink-400 via-cyan-400 to-purple-400"
        />

        {/* Chapter 7: Contact */}
        <section id="contact" className="snap-start">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;