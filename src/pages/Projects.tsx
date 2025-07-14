import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Niger Delta Basin Geotechnical Investigation",
      category: "Geotechnical",
      client: "International Oil Company",
      year: "2023",
      description: "Our geotechnical investigations provide valuable information on the properties of soil and rock. We use advanced technology and techniques to evaluate site conditions, providing our clients with comprehensive solutions for foundation design and construction.",
      status: "Completed",
      location: "Niger Delta, Nigeria"
    },
    {
      id: 2,
      title: "Chad Basin Petroleum System Analysis",
      category: "Geological",
      client: "Regional E&P Company",
      year: "2023",
      description: "Comprehensive petroleum system analysis including source rock evaluation, reservoir characterization, and migration pathway modeling for the Chad Basin. Advanced geochemical analysis and seismic interpretation provided critical insights for exploration strategy.",
      status: "Completed",
      location: "Chad Basin, Nigeria"
    },
    {
      id: 3,
      title: "Lagos Coastal Erosion Assessment",
      category: "Environmental",
      client: "Lagos State Government",
      year: "2022",
      description: "Detailed coastal erosion assessment and mitigation strategy development for Lagos coastline. Integration of oceanographic data, geological surveys, and climate modeling to develop sustainable coastal protection measures.",
      status: "Completed",
      location: "Lagos State, Nigeria"
    },
    {
      id: 4,
      title: "Offshore Seabed Mapping Project",
      category: "Marine",
      client: "Offshore Development Company",
      year: "2023",
      description: "High-resolution seabed mapping and geohazard assessment for offshore infrastructure development. Multi-beam bathymetry, side-scan sonar, and sub-bottom profiling provided comprehensive seafloor characterization for safe installation.",
      status: "Ongoing",
      location: "Gulf of Guinea"
    },
    {
      id: 5,
      title: "Anambra Basin Sequence Stratigraphy",
      category: "Geological",
      client: "Indigenous Oil Company",
      year: "2022",
      description: "Detailed sequence stratigraphic framework development for the Anambra Basin including depositional environment analysis, reservoir architecture modeling, and hydrocarbon prospectivity assessment using advanced seismic interpretation techniques.",
      status: "Completed",
      location: "Anambra Basin, Nigeria"
    },
    {
      id: 6,
      title: "Industrial Site Contamination Remediation",
      category: "Environmental",
      client: "Manufacturing Company",
      year: "2023",
      description: "Comprehensive site contamination assessment and remediation for a major manufacturing facility. Implementation of in-situ bioremediation and pump-and-treat systems successfully restored groundwater quality to regulatory standards.",
      status: "Completed",
      location: "Ogun State, Nigeria"
    },
    {
      id: 7,
      title: "Deep Water Geochemical Survey",
      category: "Geochemical",
      client: "International Consortium",
      year: "2023",
      description: "Advanced geochemical survey in deep water environment including surface geochemical prospecting, microseepage detection, and hydrocarbon migration pathway analysis using state-of-the-art analytical techniques and interpretation methodologies.",
      status: "Ongoing",
      location: "Deep Water Nigeria"
    },
    {
      id: 8,
      title: "Asset Portfolio Optimization Study",
      category: "Asset Management",
      client: "Regional Oil Company",
      year: "2022",
      description: "Comprehensive asset portfolio optimization including reservoir performance analysis, enhanced oil recovery potential assessment, and economic modeling. Strategic recommendations increased overall portfolio value by 25% through optimized development strategies.",
      status: "Completed",
      location: "Multiple Fields, Nigeria"
    },
    {
      id: 9,
      title: "Cross River Basin Environmental Baseline",
      category: "Environmental",
      client: "Exploration Company",
      year: "2023",
      description: "Comprehensive environmental baseline study for planned exploration activities including biodiversity assessment, water quality monitoring, soil characterization, and socio-economic impact evaluation in sensitive ecological areas.",
      status: "Ongoing",
      location: "Cross River State, Nigeria"
    },
    {
      id: 10,
      title: "Shallow Water Geological Hazard Assessment",
      category: "Marine",
      client: "Offshore Operator",
      year: "2022",
      description: "Geological hazard assessment for shallow water drilling operations including seafloor instability analysis, shallow gas detection, and foundation suitability evaluation. Risk mitigation strategies ensured safe and efficient drilling operations.",
      status: "Completed",
      location: "Continental Shelf, Nigeria"
    },
    {
      id: 11,
      title: "Petroleum Geochemistry Laboratory Setup",
      category: "Geochemical",
      client: "University Research Institute",
      year: "2023",
      description: "Design and setup of state-of-the-art petroleum geochemistry laboratory including equipment procurement, method development, and staff training. The facility now serves as a regional center of excellence for geochemical analysis.",
      status: "Completed",
      location: "Abuja, Nigeria"
    },
    {
      id: 12,
      title: "New Venture Technical Due Diligence",
      category: "Asset Management",
      client: "Investment Consortium",
      year: "2023",
      description: "Technical due diligence for acquisition of producing oil and gas assets including reserve evaluation, facility assessment, environmental liability review, and development potential analysis. Comprehensive risk assessment supported successful transaction closure.",
      status: "Completed",
      location: "West Africa"
    }
  ];

  const getStatusColor = (status: string) => {
    return status === "Completed" ? "bg-green-500/10 text-green-500" : "bg-blue-500/10 text-blue-500";
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      "Geological": "bg-orange-500/10 text-orange-500",
      "Environmental": "bg-green-500/10 text-green-500",
      "Marine": "bg-blue-500/10 text-blue-500",
      "Geochemical": "bg-purple-500/10 text-purple-500",
      "Geotechnical": "bg-red-500/10 text-red-500",
      "Asset Management": "bg-gray-500/10 text-gray-500"
    };
    return colors[category as keyof typeof colors] || "bg-gray-500/10 text-gray-500";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-primary/5 py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-primary font-semibold">We are proud of our legacy projects</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Our Projects
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Showcasing our expertise through successful project delivery across diverse geological and environmental challenges
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex gap-2 flex-wrap">
                      <Badge variant="secondary" className={getCategoryColor(project.category)}>
                        {project.category}
                      </Badge>
                      <Badge variant="outline" className={getStatusColor(project.status)}>
                        {project.status}
                      </Badge>
                    </div>
                    <span className="text-sm text-muted-foreground">{project.year}</span>
                  </div>
                  <CardTitle className="text-lg leading-tight mb-2">
                    {project.title}
                  </CardTitle>
                  <div className="space-y-1">
                    <p className="text-sm text-primary font-medium">{project.client}</p>
                    <p className="text-sm text-muted-foreground">{project.location}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Next Project?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let our experienced team help you achieve your geological, environmental, and technical objectives with proven expertise and innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Contact Us Today
            </a>
            <a 
              href="/services" 
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              View Our Services
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Projects;