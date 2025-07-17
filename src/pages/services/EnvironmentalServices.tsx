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
      name: "Environmental Studies",
      description: "We have the experience and the capacity to carry out a wide array of Environmental Assessments, monitoring, management, and remediation of contaminated soil (surface and subsurface), air, ocean, lagoons, estuaries, and groundwater. Our positive approach to environmental consulting is multidisciplinary, simple and applicable. We access and adapt the best technologies available in the world, systematically investigating and evaluating all potential environmental issues likely to significantly affect the ambient environment and proffer solutions, adapt them where necessary and then deploy them to the project. At Geoterrain, we identify and develop control measures when assessing the environmental consequences of clients’ proposed developmental projects. We provide environmental management and planning support to evaluate and mitigate impacts from anthropogenic activities on the natural environment.",
      image: "https://i.ibb.co/VWSMWR8B/unnamed.jpg"
    },
    {
      name: "Shoreline Clean-up Assessment Technique (SCAT)",
      description: "Shoreline Clean-up Assessment Technique (SCAT) is a comprehensive and systematic oil spill response approach that involves using standard terminology to collect data on shoreline oiling conditions and support decision-making for shoreline clean-up. It is used to identify and establish a correlation between the shallow subsurface lithologies within the study zone and, potentials for human exposure and evaluate the oil spill impact on the biodiversity of the affected site. Hence, it supports decision-making for proper shoreline clean-up. Geoterrain as an indigenous Shoreline Clean-Up Assessment Technique (SCAT) provider and we have carried out SCAT assessment for major oil spill incidences along the coast of the Niger Delta in Nigeria, spanning over 185 km. Based on our experiences and in-depth knowledge from similar SCAT projects, we are well-positioned to assist in reducing your environmental footprints.",
      image: "https://i.ibb.co/7tb0xD71/unnamed-37.jpg"
    },
    {
      name: "Fate and Effect Studies",
      description: "Geoterrain provides the needed services that address the increasing need for quantitative and objective assessments of ecological impacts resulting from the release of toxic substances. These assessments are typically required for spills resulting from conventional and non-conventional events, for planning and management decision-making for remediation.  We are proficient in the use of the Risk-Based Corrective Action (RBCA) software in modelling Site Specific Target Levels (SSTL) for each hydrocarbon components. We also help to predict the transport, fate, and effect of discharged drilling effluents, drilled cuttings, and produced water from hydrocarbon well-bores on all terrains using appropriate technologies so as to make recommendations for future decision-making.",
      image: "https://i.ibb.co/JjNNx79L/unnamed-31.jpg"
    },
     {
      name: "Non-Intrusive Geophysical Survey Investigation",
      description: "Our professionals provide Environmental Assessment services using non – intrusive geophysical techniques such as Ground Penetrating Radar survey (GPR), Electrical Resistivity Tomography ERT, Vertical Electric Sounding-VES and Electromagnetic Conductivity using Very Low-Frequency VLF- EM) to obtain subsurface data about a site. Our multidisciplinary team consist of geologists, geophysicists, hydrogeologist, environmental scientist, and engineers with have many years of experience in conducting major field investigations. ",
      image: "https://i.ibb.co/Mxtyzg0m/unnamed-8.jpg"
    },
    {
      name: "Clean-Up and Remediation (Soil and Groundwater)",
      description: "The main objective of our various remediation services is to restore the impacted site to as close as possible to its pristine condition within the shortest space of time, in line with the principles of sustainable development and guided by applicable laws safely and responsibly. Our soil and groundwater remediation scope of work and operational capabilities include: Thermal Desorption | Incineration | Soil Washing | Biosparging | Pressure Flushing | Contaminated Water Treatment | Stabilization | Pump and Treat | Chemical Oxidation | Air Sparging | Excavation and Disposal into Engineered Landfill ",
      image: "https://i.ibb.co/jZQHZPhf/unnamed-36.jpg"
    },
    {
      name: "Oil Spill Response",
      description: "We have the capability as an indigenous company to undertake crude oil spill containment, recovery clean-up and remediation of crude oil polluted sites. Based on our experiences, availability of cutting-edge technology and techniques, seasoned Partners, and in-depth knowledge base from similar oil spill response services.",
      image: "https://i.ibb.co/VWSMWR8B/unnamed.jpg"
    },
     {
      name: "Subsurface Investigation",
      description: "The objectives of our subsurface investigation include the determination of the physical, mechanical, sequence and nature of the subsurface strata (geologic regime), as well as groundwater conditions (hydrologic regime). We use state of the art technology to carry out soil investigation and analysis. We also use geophysical methods such as Ground Penetrating Radar survey (GPR), Electrical Resistivity Tomography ERT, Vertical Electric Sounding-VES and Electromagnetic Conductivity using Very Low Frequency VLF- EM) to obtain subsurface data about a site. Our multidisciplinary team consist of geologists, geophysicists, hydrogeologist, environmental scientist, and engineers have many years of experience in conducting: | Soil boring | Sand search | Seabed sampling | Cone Penetration Testing (CPT) | Foundation investigations | Buried infrastructure mapping | Industrial water well drilling | Borehole drilling and well installation | Borehole logging (Wire Line Logging, Petrophysical and Borehole Imaging) | Analysis (Sieve, Spud Can, Sedimentation testing, Atterberg Limits test, Triaxial shear Test, Material testing)",
      image: "https://i.ibb.co/JRbBKbKr/unnamed-4.png"
    },
    {
      name: "Waste Management Services",
      description: "The intensity of man’s activities has led to an increasing volume of liquid and solid waste worldwide despite the current level of global technological advancement and industrialization. Landfill/dumpsite serves as the ultimate recipient of municipal and industrial solid waste if not treated. This poses a great threat to human health, the surroundings, and the underlying aquifer. With our integrated environmental professionals, we provide services in the fields of dumpsite and hazardous waste management through the application of state-of-the-art technology. Geoterrain Waste management services include: | Drill cuttings management | Engineered landfill management | Waste stabilization | Effluent treatment  |Sludge tank cleaning and |Thermal desorption", 
      image: "https://i.ibb.co/JjTgL8XJ/unnamed-38.jpg"
    },
    {
      name: "Re-Establisment Survey",
      description: "Surveying is an integral part of construction and refers to the installation of visual reference points and markers (e.g., stakes, beacons, reference markers, etc.) this defines the property limits and guides the construction of projects. At Geoterrain, we conduct detailed topographic surveys using modern state-of-the-art tools and techniques that enable engineers to carry out detailed engineering designs of projects. This includes: Topographical/ boundary of facilities establishment | Re-establishment of lost beacons |Identification of underground piping/facility probing | Structural integrity assessment of facilities",
      image: "https://i.ibb.co/BH2sFCTk/unnamed-11.png"
    }
  ];

  const gallery = [
    { title: "Oil Spill Response", image: "https://i.ibb.co/VWSMWR8B/unnamed.jpg" },
    { title: "Shoreline Clean-up Assessment Technique (SCAT)", image: "https://i.ibb.co/7tb0xD71/unnamed-37.jpg" },
    { title: "Environmental Studies", image: "https://i.ibb.co/1YT0qBC0/unnamed-13.jpg" },
    { title: "Non-Intrusive Geophysical Survey Investigation", image: "https://i.ibb.co/Mxtyzg0m/unnamed-8.jpg" },
    { title: "Clean-Up and Remediation (Soil and Groundwater)", image: "https://i.ibb.co/jZQHZPhf/unnamed-36.jpg" },
    { title: "Fate and Effect Studies", image: "https://i.ibb.co/JjNNx79L/unnamed-31.jpg" },
    { title: "Subsurface Investigation", image: "https://i.ibb.co/JRbBKbKr/unnamed-4.png" },
    { title: "Waste Management Services", image: "https://i.ibb.co/JjTgL8XJ/unnamed-38.jpg" },
    { title: "Re-Establisment Survey", image: "https://i.ibb.co/BH2sFCTk/unnamed-11.png" },
    { title: "Restablishment-Survey", image: "https://i.ibb.co/GQp21Xkv/Restablishment-Survey.jpg" },
    { title: "SCAt", image: "https://i.ibb.co/Gf7Jb19w/SCAt.jpg" },
    { title: "", image: "https://i.ibb.co/jPzYwNsN/unnamed-3.jpg" },
    { title: "", image: "https://i.ibb.co/gbvmPvxy/unnamed-26.jpg" },
    { title: "", image: "https://i.ibb.co/0RgX1Ftr/unnamed-6.jpg" },
    { title: "", image: "https://i.ibb.co/2700sDvy/unnamed-29.jpg" },
    { title: "", image: "https://i.ibb.co/4nMv8Crq/unnamed-33.jpg" },
    { title: "", image: "https://i.ibb.co/dJ23NFWZ/unnamed-41.jpg" },

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