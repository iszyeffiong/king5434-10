import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const EnvironmentalServices = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const services = [
    {
      name: "Environmental Impact Assessment",
      description: "Comprehensive environmental impact assessments for oil and gas projects, including baseline studies and mitigation measures. Our assessments comply with international standards and regulatory requirements.",
      image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=400&h=300"
    },
    {
      name: "Environmental Monitoring & Compliance",
      description: "Continuous environmental monitoring programs and regulatory compliance services for industrial operations. We provide real-time data and reporting systems for environmental management.",
      image: "https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=300"
    },
    {
      name: "Site Remediation & Restoration",
      description: "Advanced remediation technologies for contaminated sites including soil and groundwater treatment solutions. Our restoration services help restore ecosystems to their natural state.",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&h=300"
    }
  ];

  const gallery = [
    { title: "Environmental Sampling", image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&h=600" },
    { title: "Water Quality Testing", image: "https://images.unsplash.com/photo-1576671081837-49000212a370?w=800&h=600" },
    { title: "Soil Analysis", image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600" },
    { title: "Ecosystem Assessment", image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600" },
    { title: "Air Quality Monitoring", image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600" },
    { title: "Wildlife Conservation", image: "https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?w=800&h=600" }
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
            <span className="text-foreground">Environmental Services</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-primary/5 py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Environmental Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive Environmental Solutions
            </p>
            <p className="text-lg text-muted-foreground">
              Environmental impact assessments, remediation services, and sustainability consulting to ensure compliance with international environmental standards.
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

          {/* Gallery Section */}
          <Card className="p-8">
            <h2 className="text-3xl font-bold text-center mb-8">Project Gallery</h2>
            <div className="relative max-w-4xl mx-auto">
              <div className="aspect-video rounded-lg overflow-hidden mb-6">
                <img
                  src={gallery[currentImageIndex].image}
                  alt={gallery[currentImageIndex].title}
                  className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={() => goToImage((currentImageIndex + 1) % gallery.length)}
                />
              </div>
              
              <div className="flex items-center justify-between mb-6">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevImage}
                  className="rounded-full"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                
                <div className="text-center">
                  <p className="font-medium text-lg">{gallery[currentImageIndex].title}</p>
                  <p className="text-sm text-muted-foreground">
                    {currentImageIndex + 1} of {gallery.length}
                  </p>
                </div>
                
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextImage}
                  className="rounded-full"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="flex justify-center gap-2 mb-8">
                {gallery.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToImage(idx)}
                    className={`w-3 h-3 rounded-full transition-colors hover:scale-110 ${
                      idx === currentImageIndex ? 'bg-primary' : 'bg-muted hover:bg-muted-foreground/50'
                    }`}
                  />
                ))}
              </div>

              {/* Thumbnail Grid */}
              <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                {gallery.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToImage(idx)}
                    className={`aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                      idx === currentImageIndex ? 'border-primary' : 'border-transparent hover:border-muted-foreground'
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </Card>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-6">Contact us to discuss your environmental service needs</p>
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

export default EnvironmentalServices;