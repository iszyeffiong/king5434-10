import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ServicesNavSubmenu = () => {
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
    <div className="relative group">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="text-foreground hover:text-primary font-medium transition-all duration-300 relative group flex items-center gap-1">
            Services
            <ChevronDown className="h-4 w-4" />
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </button>
        </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-background border border-border shadow-lg z-50 min-w-64">
        <DropdownMenuItem asChild>
          <Link 
            to="/services"
            className="w-full px-3 py-2 text-foreground hover:bg-muted transition-colors font-medium"
          >
            All Services
          </Link>
        </DropdownMenuItem>
        {services.map((service) => (
          <DropdownMenuItem key={service.path} asChild>
            <Link 
              to={service.path}
              className="w-full px-3 py-2 text-foreground hover:bg-muted transition-colors"
            >
              {service.title}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ServicesNavSubmenu;