import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const GeochemicalServices = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const services = [
   
 

  ];

  const gallery = [
    { title: "Laboratory Analysis", image: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?w=800&h=600" },
    { title: "Sample Preparation", image: "https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?w=800&h=600" },
    { title: "Analytical Equipment", image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800&h=600" },
    { title: "Data Analysis", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600" },
    { title: "Chemical Testing", image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=600" },
    { title: "Research Facility", image: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?w=800&h=600" }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-muted/30 py-4">
        <div className="container mx-auto px-4 lg:px-6">
          <nav className="text-sm">
            <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
            <span className="mx-2 text-muted-foreground">/</span>
            <Link to="/services" className="text-muted-foreground hover:text-primary">Services</Link>
            <span className="mx-2 text-muted-foreground">/</span>
            <span className="text-foreground">Geochemical Services</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-primary/5 py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Geochemical Services
            </h1>
          
            <h4 className="text-4xl lg:text-3xl font-bold text-foreground mb-6">
              High Quality Geochemical Solutions
            </h4>
                  
            <p className="text-lg text-muted-foreground">
              Geoterrain provides geochemical solutions that helps to evaluate the hydrocarbon potential of our client’s oil wells as part of its exploration and delineation activities. The main objective of this service is to investigate the richness and state the maturity of the hydrocarbon source rocks of our client wells. This, undoubtedly, will provide our clients with improved decision tools and enhance the robustness of their portfolio.

            </p> <br />
             <p className="text-lg text-muted-foreground">
              Based on our experiences, availability of cutting-edge technology and techniques, seasoned Partners and in-depth knowledge base from similar geochemical services or study works that we have successfully carried out within the Niger Delta Basin, we provide independent expertise in geochemical consulting services that satisfies E&P need for oil and gas and mineral exploration industries. In conjunction with our partners, we specialize in providing a sound and applicable geochemical data processing and interpretation that add value through reduced drilling risk, increased chance of success and cost effective management. We are well positioned to carry out various geochemical services which include:
            <li>Total organic carbon determination </li>
            <li>Determination of source rock properties by Rock-Eval pyrolysis </li>
            <li>Optical examination of organic matter </li>
            <li>Vitrinite reflectance analysis  </li>
            <li>Kerogen description analysis </li>
            </p> <br />
              <img 
                      src="https://i.ibb.co/Kp4t6jdw/Whats-App-Image-2025-07-16-at-23-42-23-8088a3dc.jpg" 
                      alt="Example from the web" 
                      style={{ width: '800px', height: 'auto' }} 
                    /> <br />

            <p className="text-lg text-muted-foreground">
              We provide independent expertise in geochemical consulting services that satisfy E&P needs for oil and gas and mineral exploration industries. In conjunction with our partners, we specialize in providing sound and applicable geochemical data processing and interpretation that add value through reduced drilling risk, increased chance of success, and cost-effective management. We are well-positioned to carry out various geochemical services which include
            <li>Total organic carbon determination </li>
            <li>Determination of source rock properties by Rock-Eval pyrolysis </li>
            <li>Optical examination of organic matter  </li>
            <li>Vitrinite reflectance analysis and </li>
            <li>Kerogen description analysis</li>
            </p> 
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {services.map((service, idx) => (
              <Card key={idx} className="h-full overflow-hidden">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{service.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

       
          

          {/* CTA Section */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-6">Contact us to discuss your geochemical service needs</p>
            <div className="space-x-4">
              <Button asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/services">Back to Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default GeochemicalServices;