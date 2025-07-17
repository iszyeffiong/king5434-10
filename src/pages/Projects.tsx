import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "",
      category: "",
      client: "",
      year: "",
      description: "Our team of geologists are experts in mineral exploration. We use the latest technology and techniques to identify and evaluate mineral deposits, providing our clients with valuable data to make informed decisions.",
      status: "",
      location: ""
    },
    {
      id: 2,
      year: "",
      description: "At Geoterrain, we provide comprehensive geological consulting services to help our clients navigate complex geological challenges. Our team of experts has a wealth of experience in a variety of industries, providing innovative solutions to meet our clients' needs.",
      status: "Completed",
     
    },
    {
      id: 3,
      year: "",
      description: "Our geohazard assessment services provide our clients with valuable insights into potential geohazards such as landslides, earthquakes, and volcanic eruptions. We use advanced technology and techniques to assess and mitigate potential risks.",
      status: "Completed",
     
    },
    {
      id: 4,
      year: "",
      description: "We are committed to preserving and protecting the environment. Our environmental remediation services provide effective solutions to clean up contaminated sites, ensuring a safe and healthy environment for all.",
      status: "Completed",
     
    },
    {
      id: 5,
      year: "",
      description: "Our geotechnical investigations provide valuable information on the properties of soil and rock. We use advanced technology and techniques to evaluate site conditions, providing our clients with comprehensive solutions for foundation design and construction.",
      status: "Completed",
     
    },
    {
      id: 6,
      year: "",
      description: "Our geological surveying services provide detailed information on the subsurface geology. We use advanced technology and techniques to create accurate maps that help our clients identify potential risks and opportunities.",
      status: "Completed",
     
    },
    {
      id: 7,
      year: "",
      description: "Our team of geologists are experts in mineral exploration. We use the latest technology and techniques to identify and evaluate mineral deposits, providing our clients with valuable data to make informed decisions.",
      status: "Completed",
     
    },
    {
      id: 8,
      year: "",
      description: "At Geoterrain, we provide comprehensive geological consulting services to help our clients navigate complex geological challenges. Our team of experts has a wealth of experience in a variety of industries, providing innovative solutions to meet our clients' needs.",
      status: "Completed",
     
    },
    {
      id: 9,
      year: "",
      description: "Our geohazard assessment services provide our clients with valuable insights into potential geohazards such as landslides, earthquakes, and volcanic eruptions. We use advanced technology and techniques to assess and mitigate potential risks.",
      status: "Completed",
     
    },
    {
      id: 10,
      year: "",
      description: "We are committed to preserving and protecting the environment. Our environmental remediation services provide effective solutions to clean up contaminated sites, ensuring a safe and healthy environment for all.",
      status: "Completed",
     
    },
    {
      id: 11,
      year: "",
      description: "Our geotechnical investigations provide valuable information on the properties of soil and rock. We use advanced technology and techniques to evaluate site conditions, providing our clients with comprehensive solutions for foundation design and construction.",
      status: "Completed",
     
    },
    {
      id: 12,
      year: "",
      description: "Our geological surveying services provide detailed information on the subsurface geology. We use advanced technology and techniques to create accurate maps that help our clients identify potential risks and opportunities.",
      status: "Completed",
     
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