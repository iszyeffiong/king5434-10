import { MapPin, Phone, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Geoterrain NIGERIA LIMITED</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 text-primary" />
                <div>
                  <p className="font-semibold">Lagos Office:</p>
                  <p className="text-sm opacity-90">
                    1A, Dele Adeyemi Street, off Agungi Ajiran Street, 
                    Agungi East Estate, Lekki, Lagos.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 text-primary" />
                <div>
                  <p className="font-semibold">Port Harcourt Office:</p>
                  <p className="text-sm opacity-90">
                    Plot HC 50, Enugu Street, Rumuobiakani, 
                    Port Harcourt, Nigeria.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+2348175250107" className="hover:text-primary transition-colors">
                  +234-8175250107
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm mb-6">
              <li><a href="/index.html" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="/who-we-are.html" className="hover:text-primary transition-colors">Who we are</a></li>
              <li><a href="/contact.html" className="hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
            
            <h4 className="font-bold mb-4">Connect With Us</h4>
            <a 
              href="mailto:supportgroup@geoterrainltd.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-colors"
            >email Us </a>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm opacity-75">
          <p>Copyright © 2025 Geoterrain - All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;