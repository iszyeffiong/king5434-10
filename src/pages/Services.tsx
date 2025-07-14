import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {

  const services = [
    {
      id: "geological",
      title: "Geological Services",
      subheader: "Our World of Geological Services",
      shortDescription: "Comprehensive geological consulting services including acreage evaluation, stratigraphic studies, and advanced data management solutions for the energy sector.",
      services: [
        {
          name: "Acreage Evaluation for Licensing Rounds",
          description: "Comprehensive assessment of petroleum acreage for licensing opportunities, including structural analysis, play concept evaluation, and risk assessment."
        },
        {
          name: "Sequence Stratigraphic Studies",
          description: "Detailed sequence stratigraphic analysis to understand depositional environments, reservoir architecture, and hydrocarbon migration pathways."
        },
        {
          name: "Geological Data Management and Analysis",
          description: "State-of-the-art geological data management systems with advanced interpretation software for comprehensive subsurface analysis."
        }
      ],
      gallery: [
        { title: "Seismic Data Interpretation", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600" },
        { title: "Core Sample Analysis", image: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?w=800&h=600" },
        { title: "Geological Mapping", image: "https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?w=800&h=600" },
        { title: "Laboratory Testing", image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600" }
      ]
    },
    {
      id: "environmental",
      title: "Environmental Services",
      subheader: "Comprehensive Environmental Solutions",
      shortDescription: "Environmental impact assessments, remediation services, and sustainability consulting to ensure compliance with international environmental standards.",
      services: [
        {
          name: "Environmental Impact Assessment",
          description: "Comprehensive environmental impact assessments for oil and gas projects, including baseline studies and mitigation measures."
        },
        {
          name: "Environmental Monitoring & Compliance",
          description: "Continuous environmental monitoring programs and regulatory compliance services for industrial operations."
        },
        {
          name: "Site Remediation & Restoration",
          description: "Advanced remediation technologies for contaminated sites including soil and groundwater treatment solutions."
        }
      ],
      gallery: [
        { title: "Environmental Sampling", image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&h=600" },
        { title: "Water Quality Testing", image: "https://images.unsplash.com/photo-1576671081837-49000212a370?w=800&h=600" },
        { title: "Soil Analysis", image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600" },
        { title: "Ecosystem Assessment", image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600" }
      ]
    },
    {
      id: "oceanography",
      title: "Oceanography & Marine",
      subheader: "Marine and Coastal Expertise",
      shortDescription: "Specialized marine geological and oceanographic services including offshore surveys, coastal engineering, and marine environmental assessments.",
      services: [
        {
          name: "Marine Geological Surveys",
          description: "Comprehensive marine geological surveys including bathymetric mapping, seafloor sampling, and subsurface profiling."
        },
        {
          name: "Coastal Engineering Studies",
          description: "Coastal stability assessments, erosion control solutions, and marine infrastructure design support."
        },
        {
          name: "Offshore Environmental Assessment",
          description: "Marine environmental impact assessments for offshore oil and gas operations and renewable energy projects."
        }
      ],
      gallery: [
        { title: "Marine Survey Vessel", image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600" },
        { title: "Underwater Equipment", image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&h=600" },
        { title: "Coastal Monitoring", image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=600" },
        { title: "Marine Sampling", image: "https://images.unsplash.com/photo-1436585556909-4a13b3c84caa?w=800&h=600" }
      ]
    },
    {
      id: "geochemical",
      title: "Geochemical Services",
      subheader: "Advanced Geochemical Analysis",
      shortDescription: "State-of-the-art geochemical analysis and interpretation services for petroleum exploration, environmental monitoring, and mineral resource evaluation.",
      services: [
        {
          name: "Petroleum Geochemistry",
          description: "Comprehensive petroleum geochemical analysis including source rock evaluation, oil-oil correlations, and thermal maturity assessment."
        },
        {
          name: "Environmental Geochemistry",
          description: "Geochemical analysis for environmental contamination assessment, remediation monitoring, and regulatory compliance."
        },
        {
          name: "Mineral Geochemistry",
          description: "Geochemical exploration and analysis for mineral resource evaluation including rare earth elements and precious metals."
        }
      ],
      gallery: [
        { title: "Laboratory Analysis", image: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?w=800&h=600" },
        { title: "Sample Preparation", image: "https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?w=800&h=600" },
        { title: "Analytical Equipment", image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800&h=600" },
        { title: "Data Analysis", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600" }
      ]
    },
    {
      id: "ventures",
      title: "New Ventures & Asset Management",
      subheader: "Strategic Asset Development",
      shortDescription: "Strategic consulting for new venture development, asset optimization, and portfolio management in the energy and natural resources sector.",
      services: [
        {
          name: "Venture Opportunity Assessment",
          description: "Comprehensive evaluation of new venture opportunities including technical, commercial, and risk assessments."
        },
        {
          name: "Asset Performance Optimization",
          description: "Strategic asset management and optimization services to maximize value and extend field life."
        },
        {
          name: "Portfolio Management",
          description: "Portfolio optimization strategies including asset rationalization, divestment support, and acquisition due diligence."
        }
      ],
      gallery: [
        { title: "Strategic Planning", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600" },
        { title: "Asset Evaluation", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600" },
        { title: "Project Management", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600" },
        { title: "Financial Analysis", image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&h=600" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-primary/5 py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive geological, environmental, and technical consulting services for the energy sector
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.shortDescription}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    asChild 
                    className="w-full"
                  >
                    <Link to={`/services/${service.id === 'geological' ? 'geological-services' : 
                                     service.id === 'environmental' ? 'environmental-services' :
                                     service.id === 'oceanography' ? 'oceanography-marine' :
                                     service.id === 'geochemical' ? 'geochemical-services' :
                                     'new-ventures-asset-mgt'}`}>
                      Learn More
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;