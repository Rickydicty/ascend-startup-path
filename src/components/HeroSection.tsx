
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative pb-16 pt-24 overflow-hidden">
      {/* Accent circles */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-startup-blue/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 -left-20 w-80 h-80 bg-startup-orange/30 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-startup-purple via-startup-purple-dark to-startup-bright-blue bg-clip-text text-transparent">
            Turn Your Startup Idea Into Reality
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Get AI-powered analysis, investment estimates, team building advice, and a clear roadmap for your startup journey—all in minutes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="text-lg py-6 px-8 bg-startup-purple hover:bg-startup-purple/90"
              asChild
            >
              <Link to="/#analyzer" className="flex items-center gap-2">
                Analyze My Startup Idea
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              className="text-lg py-6 px-8 border-startup-purple text-startup-purple hover:bg-startup-purple/10"
              asChild
            >
              <Link to="/signup">
                Create Account
              </Link>
            </Button>
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row gap-8 justify-center items-center">
            <div className="flex items-center">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i}
                    className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-medium"
                  >
                    {["AR", "JD", "SK", "MP"][i-1]}
                  </div>
                ))}
              </div>
              <p className="ml-4 text-sm text-gray-600">
                <span className="font-semibold">500+</span> entrepreneurs helped
              </p>
            </div>
            
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg 
                  key={star}
                  className="w-5 h-5 text-yellow-400" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ))}
              <p className="text-sm text-gray-600 ml-2">4.9/5 average rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
