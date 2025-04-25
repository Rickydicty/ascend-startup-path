
import { Bell, Menu, MessageCircle, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full py-4 px-4 md:px-8 flex items-center justify-between bg-white/70 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="flex items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-startup-purple to-startup-bright-blue bg-clip-text text-transparent">
          StartUpStart
        </div>
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
        <Button variant="ghost">Dashboard</Button>
        <Button variant="ghost">My Projects</Button>
        <Button variant="ghost">Invest</Button>
        <Button variant="ghost">Plans</Button>
        
        <div className="ml-4 flex items-center space-x-1">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <MessageCircle className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 right-0 left-0 bg-white shadow-lg rounded-b-lg md:hidden p-4 animate-fade-in">
          <div className="flex flex-col space-y-2">
            <Button variant="ghost" className="justify-start">Dashboard</Button>
            <Button variant="ghost" className="justify-start">My Projects</Button>
            <Button variant="ghost" className="justify-start">Invest</Button>
            <Button variant="ghost" className="justify-start">Plans</Button>
            
            <div className="flex justify-around pt-2 border-t">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <MessageCircle className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
