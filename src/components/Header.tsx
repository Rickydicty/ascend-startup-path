
import { Bell, Menu, MessageCircle, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();

  const handleNavigation = (section: string) => {
    setIsMenuOpen(false);
    toast({
      title: "Coming Soon",
      description: `The ${section} section will be available after connecting to Supabase!`,
    });
  };

  return (
    <header className="w-full py-4 px-4 md:px-8 flex items-center justify-between bg-white/70 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="flex items-center">
        <a href="/" className="text-2xl font-bold bg-gradient-to-r from-startup-purple to-startup-bright-blue bg-clip-text text-transparent">
          StartUpStart
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-1">
        <Button variant="ghost" onClick={() => handleNavigation('Dashboard')}>Dashboard</Button>
        <Button variant="ghost" onClick={() => handleNavigation('Projects')}>My Projects</Button>
        <a href="#investment-cards"><Button variant="ghost">Invest</Button></a>
        <a href="#pricing"><Button variant="ghost">Plans</Button></a>
        
        <div className="ml-4 flex items-center space-x-1">
          {['Notifications', 'Messages', 'Profile'].map((item) => (
            <Button 
              key={item}
              variant="ghost" 
              size="icon"
              onClick={() => handleNavigation(item)}
            >
              {item === 'Notifications' && <Bell className="h-5 w-5" />}
              {item === 'Messages' && <MessageCircle className="h-5 w-5" />}
              {item === 'Profile' && <User className="h-5 w-5" />}
            </Button>
          ))}
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 right-0 left-0 bg-white shadow-lg rounded-b-lg md:hidden p-4 animate-fade-in">
          <div className="flex flex-col space-y-2">
            <Button variant="ghost" className="justify-start" onClick={() => handleNavigation('Dashboard')}>
              Dashboard
            </Button>
            <Button variant="ghost" className="justify-start" onClick={() => handleNavigation('Projects')}>
              My Projects
            </Button>
            <a href="#investment-cards" className="w-full">
              <Button variant="ghost" className="w-full justify-start">Invest</Button>
            </a>
            <a href="#pricing" className="w-full">
              <Button variant="ghost" className="w-full justify-start">Plans</Button>
            </a>
            
            <div className="flex justify-around pt-2 border-t">
              {['Notifications', 'Messages', 'Profile'].map((item) => (
                <Button 
                  key={item}
                  variant="ghost" 
                  size="icon"
                  onClick={() => handleNavigation(item)}
                >
                  {item === 'Notifications' && <Bell className="h-5 w-5" />}
                  {item === 'Messages' && <MessageCircle className="h-5 w-5" />}
                  {item === 'Profile' && <User className="h-5 w-5" />}
                </Button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
