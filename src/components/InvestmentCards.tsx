import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const InvestmentCards = () => {
  const projects = [
    {
      title: "Mocka AI",
      description: "Interview Practice with AI - Get ready for your next job interview with AI-powered practice sessions.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=500&q=80",
      link: "https://mocka-eosin.vercel.app/sign-in",
    },
    {
      title: "Multilingual Chatbot",
      description: "Chat in multiple languages with an AI assistant that translates and understands context across languages.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&q=80",
      link: "https://multilingual-chatbot-three.vercel.app/",
    },
    {
      title: "Portfolio of Rauf",
      description: "Explore Abdul Rauf Jatoi's portfolio showcasing his development projects and professional experience.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=500&q=80",
      link: "https://rauf-psi.vercel.app/",
    },
  ];

  return (
    <section id="investment-cards" className="my-12 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Investment Opportunities</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore these exciting projects from our ecosystem that are looking for investment and support.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden card-hover transition-transform duration-300 hover:scale-105"
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4 h-20 overflow-hidden">
                {project.description}
              </p>
              <Button 
                className="w-full bg-startup-purple hover:bg-startup-purple/90 transition-colors"
                onClick={() => window.open(project.link, '_blank')}
              >
                <span className="flex items-center gap-2">
                  Visit Project
                  <ExternalLink className="h-4 w-4" />
                </span>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InvestmentCards;
