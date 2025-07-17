import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const OceanographyMarine = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const services = [
    {
      name: "ADCP Data Acquisition",
      description: "A good understanding of oceanographic conditions reduce uncertainty in engineering specifications, provide help in operational planning, leading to reduced costs, and enhances safety and operational efficiency. Geoterrain is in a position to provide commercial oceanographic consulting services, especially in assisting coastal, frontier road infrastructure and construction for all creeks, estuaries, rivers, and marine works. Our experts use the state of the art equipment and software to collect, process and interpret current velocities, tidal wave, water flux, ocean current, and met-ocean data. Coastal and marine hazard like erosion, siltation, and scouring, buried pipelines or other metallic debris, flooding assessment and storm surge monitoring are also part of our in-house expertise. Geoterrain can assist you in conducting numerous types of field studies, including habitat and sensitivity mapping, biological sampling and analysis for wetlands, creeks bays, harbours, pipeline surveys, near surface geological and hazard structures and open coastal environments; water quality sampling and analysis; mitigation planning and monitoring studies for wetlands, bays, harbours, and open coastal habitats; and technical report.",
      image: "https://i.ibb.co/XxmDrTD9/image.png"
    },
    {
      name: "Environmental Assessments",
      description: "Geoterrain is able to ensure the most efficient handling of quality meteorological and oceanography surveys, bathymetry, depth sounding and cartography. The data generated can be used as a pre-impact assessment of the area. Geoterrain has expertise for modelling the physical processes in coastal areas, estuaries, lakes, lagoon, et cetera. Geoterrain developed a range of models and can produce 2D and 3D models, flow and surge simulation models, sediment transport models, and contaminant dispersion models of oceanographic condition reduces uncertainty in engineering specifications, provides help in operational planning, leads to reduced costs, d enhances safety and operational efficiency.",
      image: "https://i.ibb.co/HT0gv10N/image.png"
    }
  ];  

  const gallery = [
    { title: "ADCP Data Acquisition", image: "https://i.ibb.co/XxmDrTD9/image.png" },
    { title: "Environmental Assessments", image: "https://i.ibb.co/HT0gv10N/image.png" }
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
            <span className="text-foreground">Oceanography & Marine</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-primary/5 py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Oceanography & Marine
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              OCEANOGRAPHIC, COASTAL MANAGEMENT AND MARINE GEOLOGICAL STUD
            </p>
            <p className="text-lg text-muted-foreground">
              Specialized marine geological and oceanographic services including offshore surveys, coastal engineering, and marine environmental assessments.
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
            <p className="text-muted-foreground mb-6">Contact us to discuss your marine service needs</p>
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

export default OceanographyMarine;