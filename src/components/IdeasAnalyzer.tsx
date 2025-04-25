
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Rocket, ArrowRight, Lightbulb } from "lucide-react";

const IdeasAnalyzer = () => {
  const [ideaText, setIdeaText] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  
  const handleAnalyze = () => {
    if (!ideaText.trim()) return;
    
    setIsAnalyzing(true);
    // Simulate analysis delay
    setTimeout(() => {
      setIsAnalyzing(false);
      setIsComplete(true);
    }, 2000);
  };
  
  const handleReset = () => {
    setIdeaText("");
    setIsComplete(false);
  };

  return (
    <div className="glass p-6 md:p-8 rounded-xl max-w-3xl w-full mx-auto my-8 relative overflow-hidden">
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-startup-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-startup-orange/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-4">
          <Lightbulb className="h-6 w-6 text-startup-purple" />
          <h2 className="text-2xl font-bold">Startup Idea Analyzer</h2>
        </div>
        
        <p className="text-gray-600 mb-6">
          Describe your startup idea in detail. Our AI will analyze its viability, investment needs,
          and provide a roadmap for success.
        </p>
        
        {!isComplete ? (
          <>
            <Textarea 
              placeholder="Describe your startup idea here... (e.g., 'I want to create an app that helps remote workers find ideal coworking spaces based on their preferences and work style.')"
              className="min-h-[150px] mb-4 bg-white/70"
              value={ideaText}
              onChange={(e) => setIdeaText(e.target.value)}
            />
            
            <Button 
              onClick={handleAnalyze}
              className="w-full bg-startup-purple hover:bg-startup-purple/90"
              disabled={!ideaText.trim() || isAnalyzing}
            >
              {isAnalyzing ? (
                <span className="flex items-center gap-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  Analyzing your idea...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Rocket className="h-4 w-4" />
                  Analyze My Idea
                  <ArrowRight className="h-4 w-4" />
                </span>
              )}
            </Button>
          </>
        ) : (
          <div className="animate-fade-in">
            <div className="glass py-4 px-6 rounded-lg mb-4">
              <div className="flex gap-2 items-center mb-2">
                <div className="bg-green-100 p-1 rounded-full">
                  <Rocket className="h-4 w-4 text-green-600" />
                </div>
                <h3 className="font-medium">Idea Analysis Complete!</h3>
              </div>
              <p className="text-gray-700">{ideaText}</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="glass p-4 rounded-lg">
                <h3 className="font-semibold text-startup-purple mb-2">Investment Required</h3>
                <p className="text-2xl font-bold">$18,000 - $25,000</p>
                <p className="text-sm text-gray-500">Estimated startup cost</p>
              </div>
              
              <div className="glass p-4 rounded-lg">
                <h3 className="font-semibold text-startup-purple mb-2">Team Recommendation</h3>
                <p className="font-medium">3-4 Team Members</p>
                <ul className="text-sm text-gray-600">
                  <li>• Full-stack Developer</li>
                  <li>• UX Designer</li>
                  <li>• Marketing Specialist</li>
                </ul>
              </div>
              
              <div className="glass p-4 rounded-lg">
                <h3 className="font-semibold text-startup-purple mb-2">Market Potential</h3>
                <div className="flex items-center gap-1">
                  <div className="h-3 w-3/4 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">High</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">Growing remote work trend</p>
              </div>
              
              <div className="glass p-4 rounded-lg">
                <h3 className="font-semibold text-startup-purple mb-2">Timeline to MVP</h3>
                <p className="font-medium">4-6 Months</p>
                <p className="text-sm text-gray-500">For minimum viable product</p>
              </div>
            </div>
            
            <div className="flex justify-between">
              <Button 
                onClick={handleReset}
                variant="outline"
              >
                Start New Analysis
              </Button>
              
              <Button 
                className="bg-startup-purple hover:bg-startup-purple/90"
              >
                View Full Report
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IdeasAnalyzer;
