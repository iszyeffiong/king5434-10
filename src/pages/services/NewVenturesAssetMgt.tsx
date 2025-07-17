import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const NewVenturesAssetMgt = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const services = [
    {
      name: "New Ventures, Engineering Projects, and Asset Management",
      description: "Geoterrain provides engineering project management from project initiation through execution to closure, and advisory services including pipeline survey, crude and gas handling, field development planning, and other engineering support services. Consequently, the clients are assured of receiving the highest quality, most cost-effective solutions to meet their program objectives. Key services include: Pipeline survey and construction | Gas processing plant and | Bitumen exploitation.",
      image: "https://i.ibb.co/tM1b5tqv/takr.png"
    },
    {
      name: "Enhanced Management Training",
      description: "Geoterrain provides specialist training for the company in response to increasing demand from Exploration and Production Asset Teams, resulting from the need for the continued successful expansion of your company. Our training programme is extended to understanding the following concepts: Sequence Stratigraphic | Environmental Site Assessment (Tier 1 and Tier 2) | Tier 2 Modelling using the Risk-Based Corrective Action (RBCA) | Oil Spill Clean-up and Remediation | Oceanographic Management",
      image: "https://i.ibb.co/d023wR7N/unnamed-20.jpg"
    },
    {
      name: "Provision of Core Boxes for Coring Program",
      description: "We at Geoterrain, with our partners, supply new storage core boxes with a lid made of sturdy, yet light weight plastic materials that are durable, much lighter and easy to carry, heat resistant, easy to stack, with no snags or damage that could be caused by metal wires. It is also reusable to fit your needs. This core box provides stable stacking and can withstand the weight of several boxes full of cores stacked on its top. Since it is made of plastic material, it will hold up under freezing conditions and has a UV inhibitor to withstand sunlight. It provides the best protection and is easy to transport. Our coring, handling, and preservation programme are conducted in a manner that prevents both losses of interstitial fluids and contamination with foreign fluids.",
      image: "https://i.ibb.co/3ywrVQrz/image.jpg"
    },
     {
      name: "Portfolio Management",
      description: "We own a couple of non–intrusive geophysical survey, remediation, environmental studies sampling, and monitoring equipment which are available for lease. The equipment includes but not limited to: 20 Foot Site office / Caravan | ABEM Terrameter LS 2 | Delta Epsilon Wireline Logging Machine| MALA RAMAC Ground Penetrating Radar (GPR) equipment with 100MHz, 250MHz, and 500MHz. |Geotech oil and water level interface meter with 50m reel and padded carrying case. | Hands-held digital Garmin Global Positioning System (GPS 72) and Getac digital cameras| Soil sampling tools for soil collection | Surface water pump for borehole purging  | Groundwater bailer for collection of water samples and purging of monitoring boreholes",
      image: "https://i.ibb.co/5XKN3JnW/unnamed-19.jpg"
    }
  ];

    const gallery = [
    { title: "Provision of Core Boxes for Coring Program", image: "https://i.ibb.co/3ywrVQrz/image.jpg" },
    { title: "Portfolio Management", image: "https://i.ibb.co/5XKN3JnW/unnamed-19.jpg" },
    { title: "Enhanced Management Training", image: "https://i.ibb.co/d023wR7N/unnamed-20.jpg" },
    { title: "New Ventures, Engineering Projects, and Asset Management", image: "https://i.ibb.co/tM1b5tqv/takr.png" },
    { title: "", image: "https://i.ibb.co/KkCjzwB/unnamed-17.jpg" },
    { title: "", image: "" }
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
            <span className="text-foreground">New Ventures & Asset Management</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-primary/5 py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              New Ventures & Asset Management
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Strategic Asset Development
            </p>
            <p className="text-lg text-muted-foreground">
              Strategic consulting for new venture development, asset optimization, and portfolio management in the energy and natural resources sector.
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
            <p className="text-muted-foreground mb-6">Contact us to discuss your venture and asset management needs</p>
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

export default NewVenturesAssetMgt;