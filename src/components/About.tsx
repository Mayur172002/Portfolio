import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Globe,          // React (worldwide reach, web-based)
  Rocket,         // Next.js (performance, fast launch)
  Code,           // TypeScript
  Stack,          // Redux/Redux Toolkit (state stack)
  Lightning,      // JavaScript (power/speed)
  Database,       // TanStack Query (data fetching/caching)
  ShareNetwork,   // Socket.IO (real-time communication)
  PaintBrush,     // CSS/SCSS (styling)
  Swatches        // Tailwind CSS/MUI (UI frameworks/design systems)
} from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const skills = [
    { icon: Globe, name: 'React', level: 95 },
    { icon: Rocket, name: 'Next.js', level: 80 },
    { icon: Code, name: 'TypeScript', level: 90 },
    { icon: Stack, name: 'Redux/Redux Toolkit', level: 85 },
    { icon: Lightning, name: 'JavaScript', level: 88 },
    { icon: Database, name: 'TanStack Query', level: 60 },
    { icon: ShareNetwork, name: 'Socket.IO', level: 75 },
    { icon: PaintBrush, name: 'CSS/SCSS', level: 92 },
    { icon: Swatches, name: 'Tailwind CSS/MUI', level: 95 }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image animation
      gsap.from(imageRef.current, {
        x: -100,
        opacity: 0,
        filter: "blur(10px)",
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%"
        }
      });

      // Content animation
      gsap.from(contentRef.current?.children || [], {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%"
        }
      });

      // Skills animation
      gsap.from(skillsRef.current?.children || [], {
        y: 30,
        opacity: 0,
        scale: 0.9,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 85%"
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 px-6 relative overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div ref={imageRef} className="relative">
            <div className="relative w-80 h-80 mx-auto lg:mx-0">
              {/* Glowing frame */}
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-30 animate-pulse" />

              {/* Image container */}
              <div className="relative w-full h-full glass rounded-full p-2 hover:shadow-glow-primary transition-all duration-500 group">
                <div className="w-full h-full rounded-full overflow-hidden bg-gradient-secondary">
                  <img
                    src="/lovable-uploads/3672d966-2332-46df-b75f-ce4ff8888587.png"
                    alt="Milad - Web Developer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/30 rounded-full animate-float" />
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4">
                About <span className="text-primary-glow">Me</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-primary rounded-full mb-6" />
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate front-end developer focused on building fast, responsive, and scalable web applications. I specialize in React, Next.js, TypeScript, and Redux Toolkit, creating clean, maintainable code and seamless user experiences.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              With strong skills in JavaScript, CSS/SCSS, Tailwind CSS, and MUI, I design consistent and visually appealing interfaces. I also use TanStack Query for efficient data fetching and Socket.IO for real-time features.
            </p>
             <p className="text-lg text-muted-foreground leading-relaxed">
             Always eager to learn and improve, I stay up to date with modern tools and best practices, bringing a problem-solving mindset to every project I take on.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="glass px-4 py-2 rounded-lg">
                <span className="text-primary-glow font-medium">1+</span>
                <span className="text-muted-foreground ml-1">Years Experience</span>
              </div>
              <div className="glass px-4 py-2 rounded-lg">
                <span className="text-secondary-glow font-medium">5+</span>
                <span className="text-muted-foreground ml-1">Projects Completed</span>
              </div>
              <div className="glass px-4 py-2 rounded-lg">
                <span className="text-accent-glow font-medium">100%</span>
                <span className="text-muted-foreground ml-1">Client Satisfaction</span>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="mt-20">
          <h3 className="text-3xl font-light text-center text-foreground mb-12">
            My <span className="text-primary-glow">Skills</span>
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="glass p-6 rounded-xl hover:shadow-glow-primary transition-all duration-300 hover:scale-105 group"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:animate-bounce">
                    <skill.icon size={24} className="text-primary-foreground" />
                  </div>

                  <h4 className="text-lg font-medium text-foreground">{skill.name}</h4>

                  {/* Progress Bar */}
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-gradient-primary h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>

                  <span className="text-primary-glow font-medium">{skill.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
    </section>
  );
};

export default About;