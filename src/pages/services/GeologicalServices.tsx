import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const GeologicalServices = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const services = [
    {
      name: "Acreage Evaluation for Licensing Rounds",
      description: "Geoterrain unrivalled geological expertise can give you the competitive edge when it comes to designing exploration programs to access new license blocks and their potential for oil and gas. We provide you with a unique set of tools including petroleum system evaluation, seismic interpretation, reservoir evaluation, and volumetric evaluation. In addition, our experiences in the Niger Delta basins, Nigeria, West Africa, Ghana, East Africa, Uganda and Southern Africa, Mozambique/Madagascar geological settings, position us to meet your need either locally or internationally.",
      image: "https://i.ibb.co/q3F459kk/unnamed-39.jpg"
    },
    {
      name: "Sequence Stratigraphic Studies",
      description: " Sequence stratigraphic study promotes thorough understanding of the evolution of basins, but also allows for interpretations of potential source rocks and reservoir rocks in both frontier areas, having seismic data but limited well control and in more mature hydrocarbon provinces. Sequences tend to show cyclicity of changes in relative sea level and widespread unconformities, processes of sedimentation and sources of sediments, climate and tectonic activity over time. We help in the prediction of reservoir continuity which is currently a key question in mature hydrocarbon provinces where sequence stratigraphic is being applied.",
      image: "https://i.ibb.co/XfxF7f49/image.png"
    },
    {
      name: "Geological Data Management and Analysis",
      description: "Geoterrain is a reputable consulting company in geological, environmental and oceanographic management that delivers excellent management solutions towards streamlining the process of collection, inventory, analysis and reporting on a daily basis. Our third party software enables easy visualization of your produced data. The software helps you conduct in-depth geological, environmental and oceanographic analyses, interpretations and modelling. We have easy access to applicable third party software that enables appropriate interpretation of your data as required.",
      image: "https://i.ibb.co/B5rZQ51B/unnamed-6.png"
    },
      {
      name: "Pore Pressure Studies",
      description: "Knowledge of formation pore pressure is not only essential for safe and cost-effective drilling of wells, but is also critical for assessing exploration risk factors. An accurately predicted pore pressure is necessary to achieving a safe, efficient and cost effective drilling. When accurately predicted prior to drilling, the possible catastrophic incidents, such as well blowouts and mud volcanoes, lost circulation, stuck pipe, borehole instability, kick and fluid influx are avoided. Accurate estimation not only affects the safety of the drilling operation and personnel, it also affects the time and cost of drilling as well as the condition of the formation for testing and production. Rapid sedimentation rate results to under compaction of shales which is the primary overpressure generating mechanism among other secondary overpressure mechanism.",
      image: "https://i.ibb.co/rPgpf30/image.png"
    },
    {
      name: "Basin Studies, Prospect Evaluation and Modeling",
      description: "This is a tool that assists to analyze and interpret the genetic components that makes up a receiving sedimentary basin. The identification of these genetic components that constitute the petroleum system, i.e., source rocks, reservoir rocks, seals and their associated complex trapping mechanism (stratigraphic or structural traps). Geoterrain is well positioned to assist in identification of these components and their import to refined assessment of: A robust hydrocarbon portfolio | Bypassed compartmentalized hydrocarbon reservoir unit. | Undiscovered and underdeveloped reservoirs and associated resources.",
      image: "https://i.ibb.co/N5LZCzm/image.jpg"
    },
    {
      name: "Shallow Gas Geohazard Studies",
      description: "Site Geohazard surveys are performed to minimize the risk of harm to personnel and equipment, and to protect the natural environment. Geoterrain can assist you in conducting numerous types of Geohazard surveys and studies to identify all possible constraints and hazards from man-made, natural and geological features which may affect the operational or environmental integrity of a proposed drilling operation. We are able to ensure the most efficient use of available data, including 2D or 3D seismic data, well data, velocity data, meteorological and oceanographic surveys, bathymetry, depth sounding and cartography. The data generated can be used as a pre-impact assessment of the area.",
      image: "https://i.ibb.co/C345W374/image.png"
    }
    
  ];

  const gallery = [
    { title: "Shallow Gas Geohazard Studies", image: "https://i.ibb.co/C345W374/image.png" },
    { title: "Basin Studies, Prospect Evaluation and Modeling", image: "https://i.ibb.co/N5LZCzm/image.jpg" },
    { title: "Pore Pressure Studies", image: "https://i.ibb.co/rPgpf30/image.png" },
    { title: "Sequence Stratigraphic Studies", image: "https://i.ibb.co/XfxF7f49/image.png" },
    { title: "Acreage Evaluation for Licensing Rounds", image: "https://i.ibb.co/q3F459kk/unnamed-39.jpg" },
    { title: "Geological Data Management and Analysis", image: "https://i.ibb.co/B5rZQ51B/unnamed-6.png" },
    { title: "", image: "https://i.ibb.co/YTV39s4H/unnamed-15.jpg" },
    { title: "", image: "https://i.ibb.co/dJ23NFWZ/unnamed-41.jpg"},
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
            <span className="text-foreground">Geological Services</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-primary/5 py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Geological Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Our World of Geological Services
            </p>
            <p className="text-lg text-muted-foreground">
              Comprehensive geological consulting services including acreage evaluation, stratigraphic studies, and advanced data management solutions for the energy sector.
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
            <p className="text-muted-foreground mb-6">Contact us to discuss your geological service needs</p>
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

export default GeologicalServices;