import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import ServicesNavSubmenu from "./ServicesNavSubmenu";
import logo from "@/assets/geoterrain-logo.webp";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    {
      title: "Geological Services",
      path: "/services/geological-services"
    },
    {
      title: "Environmental Services", 
      path: "/services/environmental-services"
    },
    {
      title: "Oceanography & Marine",
      path: "/services/oceanography-marine"
    },
    {
      title: "Geochemical Services",
      path: "/services/geochemical-services"
    },
    {
      title: "New Ventures & Asset Mgt",
      path: "/services/new-ventures-asset-mgt"
    }
  ];

  return (
    <header className="bg-background/80 backdrop-blur-md border-b border-border/50 sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img 
                src={logo} 
                alt="GeoTerrain Nigeria Limited" 
                className="h-14 w-auto transition-transform hover:scale-105"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary font-medium transition-all duration-300 relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/who-we-are" className="text-foreground hover:text-primary font-medium transition-all duration-300 relative group">
              Who we are
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <div className="relative group">
              <ServicesNavSubmenu />
            </div>
            <Link to="/projects" className="text-foreground hover:text-primary font-medium transition-all duration-300 relative group">
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary font-medium transition-all duration-300 relative group">
              Contact us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/career" className="text-foreground hover:text-primary font-medium transition-all duration-300 relative group">
              Career
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden hover:bg-primary/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Side Overlay */}
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Side Panel */}
            <div className="lg:hidden fixed top-0 right-0 h-full w-80 max-w-[80vw] bg-white border-l border-border shadow-2xl z-50 transform transition-transform duration-300">
              <div className="flex items-center justify-between p-6 border-b border-border">
                <img 
                  src={logo} 
                  alt="GeoTerrain Nigeria Limited" 
                  className="h-10 w-auto"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:bg-primary/10"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
              
              <nav className="p-6 space-y-2 overflow-y-auto bg-white">
                <Link 
                  to="/" 
                  className="block text-gray-900 hover:text-primary font-medium py-3 px-4 rounded-lg hover:bg-primary/5 transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                
                <Link 
                  to="/who-we-are" 
                  className="block text-gray-900 hover:text-primary font-medium py-3 px-4 rounded-lg hover:bg-primary/5 transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Who we are
                </Link>
                
                <Collapsible open={isServicesOpen} onOpenChange={setIsServicesOpen}>
                  <CollapsibleTrigger className="flex items-center justify-between w-full text-gray-900 hover:text-primary font-medium py-3 px-4 rounded-lg hover:bg-primary/5 transition-all">
                    Services
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-1 mt-1">
                    <Link 
                      to="/services" 
                      className="block pl-8 pr-4 py-2 text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      All Services
                    </Link>
                    {services.map((service) => (
                      <Link 
                        key={service.path} 
                        to={service.path} 
                        className="block pl-8 pr-4 py-2 text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {service.title}
                      </Link>
                    ))}
                  </CollapsibleContent>
                </Collapsible>
                
                <Link 
                  to="/projects" 
                  className="block text-gray-900 hover:text-primary font-medium py-3 px-4 rounded-lg hover:bg-primary/5 transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </Link>
                
                <Link 
                  to="/contact" 
                  className="block text-gray-900 hover:text-primary font-medium py-3 px-4 rounded-lg hover:bg-primary/5 transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact us
                </Link>
                
                <Link 
                  to="/career" 
                  className="block text-gray-900 hover:text-primary font-medium py-3 px-4 rounded-lg hover:bg-primary/5 transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Career
                </Link>
              </nav>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;