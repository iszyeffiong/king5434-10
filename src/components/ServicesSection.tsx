import { Layers, FlaskConical, Waves, TestTube, TrendingUp, GraduationCap } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Layers,
      title: "Geolo gy & Geophysics",
      description: "Comprehensive geological and geophysical consulting services including seismic interpretation, structural geology, and reservoir characterization.",
      features: ["Seismic Analysis", "Structural Mapping", "Rock Physics"]
    },
    {
      icon: TestTube,
      title: "Geochemical Services", 
      description: "Advanced geochemical analysis and consulting for hydrocarbon exploration and environmental assessment.",
      features: ["Fluid Analysis", "Rock Geochemistry", "Source Rock Evaluation"]
    },
    {
      icon: FlaskConical,
      title: "Environmental Services",
      description: "Environmental impact assessment and management solutions for sustainable development projects.",
      features: ["EIA Studies", "Remediation", "Compliance Monitoring"]
    },
    {
      icon: Waves,
      title: "Oceanography & Marine",
      description: "Marine and oceanographic consulting services for offshore operations and coastal management.",
      features: ["Marine Surveys", "Coastal Studies", "Offshore Planning"]
    },
    {
      icon: TrendingUp,
      title: "New Ventures & Asset Management",
      description: "Strategic consulting for new ventures and asset optimization in the energy sector.",
      features: ["Asset Evaluation", "Risk Assessment", "Portfolio Management"]
    },
    {
      icon: GraduationCap,
      title: "Training & Capacity Building",
      description: "Professional training and capacity building programs for industry professionals.",
      features: ["Technical Training", "Certification Programs", "Workshops"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-earth-blue rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="animate-fade-in-up">
            <span className="text-primary font-semibold text-lg mb-4 block">What We Offer</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Service Categories</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive geosciences solutions backed by international certifications and decades of expertise
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="group bg-card border border-border/50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-in relative overflow-hidden"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Card Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent size={56} strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 line-height-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <button className="mt-6 text-primary font-semibold hover:text-primary-dark transition-colors duration-200 flex items-center group/btn">
                    Learn More
                    <svg className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
          <div className="bg-gradient-to-r from-primary to-earth-blue p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Get in touch with our experts to discuss how we can help with your geosciences and environmental needs.
            </p>
            <a href="/contact">
              <button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors">
                Contact Our Experts
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;