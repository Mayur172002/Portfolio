import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, GithubLogo, Globe } from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: 1,
      title: "3D Interactive Email Platform",
      description: "Advanced email platform with 3D animations and interactive elements using React and Three.js",
      image: "/lovable-uploads/73e770a1-aa94-4028-be9c-16fe83deeb82.png",
      tech: ["React", "Three.js", "GSAP", "TypeScript"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Next-Level Gaming UI",
      description: "Modern gaming interface with advanced animations and real-time data visualization",
      image: "/lovable-uploads/748f47e3-662b-4962-bf68-8f399e9b181c.png",
      tech: ["React", "GSAP", "WebGL", "Socket.IO"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "3D Portfolio Website",
      description: "Interactive portfolio with Spline 3D integration and smooth animations",
      image: "/lovable-uploads/9884bdbb-4d9a-4736-a0de-cbe6f04759a1.png",
      tech: ["React", "Spline", "GSAP", "Tailwind"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Gaming Character Dashboard",
      description: "Interactive character selection and stats dashboard for gaming platforms",
      image: "/lovable-uploads/c65ad7c0-c82e-41ad-aa89-451df414f9f1.png",
      tech: ["React", "Three.js", "Framer Motion", "CSS3"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Animation Tools Platform",
      description: "Professional platform for web animation tools and tutorials",
      image: "/lovable-uploads/0e27af01-701f-4e15-aa2c-8b464415d1c5.png",
      tech: ["React", "GSAP", "WebGL", "Node.js"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Animated Portfolio Tutorial",
      description: "Step-by-step tutorial platform for creating animated portfolios",
      image: "/lovable-uploads/c70f1304-dbd9-45df-b616-58d7547bba9e.png",
      tech: ["React", "GSAP", "Locomotive", "CSS3"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current?.children || [], {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%"
        }
      });

      // Projects animation
      gsap.from(containerRef.current?.children || [], {
        y: 100,
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%"
        }
      });

      // Hover animations for project cards
      const cards = containerRef.current?.children;
      if (cards) {
        Array.from(cards).forEach((card) => {
          const element = card as HTMLElement;
          
          element.addEventListener('mouseenter', () => {
            gsap.to(element, {
              y: -10,
              scale: 1.02,
              duration: 0.3,
              ease: "power2.out"
            });
          });

          element.addEventListener('mouseleave', () => {
            gsap.to(element, {
              y: 0,
              scale: 1,
              duration: 0.3,
              ease: "power2.out"
            });
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="projects"
      ref={sectionRef}
      className="py-20 px-6 relative overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4">
            Featured <span className="text-primary-glow">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my expertise in modern web development and creative problem-solving.
          </p>
        </div>

        {/* Projects Grid */}
        <div 
          // ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <div 
              key={project.id}
              className="glass rounded-xl overflow-hidden hover:shadow-glow-primary transition-all duration-500 group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Overlay buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={project.liveUrl}
                    className="w-10 h-10 bg-primary/90 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-200"
                  >
                    <Globe size={18} className="text-primary-foreground" />
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="w-10 h-10 bg-secondary/90 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-secondary transition-colors duration-200"
                  >
                    <GithubLogo size={18} className="text-secondary-foreground" />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary-glow transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary-glow text-xs rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Project */}
                <a 
                  href={project.liveUrl}
                  className="inline-flex items-center gap-2 text-primary-glow hover:text-primary transition-colors duration-300 group/link"
                >
                  View Project
                  <ArrowUpRight 
                    size={16} 
                    className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gradient-secondary text-secondary-foreground rounded-lg hover:shadow-glow-secondary transition-all duration-300 hover:scale-105">
            View All Projects
          </button>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2" />
    </section>
  );
};

export default Projects;