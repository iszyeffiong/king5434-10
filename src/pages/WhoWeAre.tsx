import { useState } from "react";
import { ChevronDown, ChevronUp, Users, Award, Building2, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const WhoWeAre = () => {
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const sections = [
    {
      id: "about",
      title: "About Geoterrain",
      icon: Building2,
      shortDescription: "Leading geological and environmental consulting firm in Nigeria, providing comprehensive earth science solutions with cutting-edge technology and expertise.",
      fullContent: {
        whyGeoterrain: [
          "Proven track record of over 15 years in the industry",
          "State-of-the-art equipment and advanced analytical capabilities",
          "Highly qualified team of geologists, environmental scientists, and engineers",
          "Commitment to sustainable and environmentally responsible practices",
          "Local expertise with international standards",
          "Cost-effective solutions tailored to client needs"
        ],
        licensedBy: [
          "Department of Petroleum Resources (DPR) - Nigeria",
          "Nigerian Mining Cadastre Office (MCO)",
          "Federal Ministry of Environment",
          "Nigerian Society of Engineers (NSE)"
        ],
        registeredWith: [
          "Corporate Affairs Commission (CAC) - Nigeria",
          "Nigerian Content Development and Monitoring Board (NCDMB)",
          "Oil Producers Trade Section (OPTS)",
          "International Association of Geophysical Contractors (IAGC)"
        ],
        certifications: [
          "ISO 9001:2015 - Quality Management System",
          "ISO 14001:2015 - Environmental Management System",
          "ISO 45001:2018 - Occupational Health and Safety Management",
          "Nigerian Institute of Safety Professionals (NISP) Certification"
        ]
      }
    },
    {
      id: "partners",
      title: "Our Partners",
      icon: Users,
      shortDescription: "Strategic partnerships with leading indigenous and international companies driving our success and expanding our capabilities across Africa and beyond.",
      fullContent: {
        tagline: "Our Partners - Our Success",
        description: "We believe in the power of collaboration. Our strategic partnerships enable us to deliver world-class solutions while maintaining our commitment to local content development and knowledge transfer.",
        indigenous: [
          "Seplat Petroleum Development Company Plc",
          "Nigerian National Petroleum Corporation (NNPC)",
          "Oando Exploration & Production Limited",
          "Aiteo Eastern E&P Company Limited",
          "Lekoil Nigeria Limited",
          "Platform Petroleum Limited"
        ],
        international: [
          "Schlumberger Limited",
          "Halliburton Company",
          "Baker Hughes",
          "CGG Geophysics",
          "Fugro N.V.",
          "TotalEnergies SE"
        ]
      }
    },
    {
      id: "team",
      title: "Our Team Lead",
      icon: Award,
      shortDescription: "Led by experienced professionals with decades of expertise in geology, environmental science, and project management across diverse terrains and challenges.",
      fullContent: {
        ceo: {
          name: "Kunle ADESIDA, PhD",
          title: "Managing Director/CEO",
          qualifications: [
            "Ph.D. in  Geology - University of Benin",
            "M.Sc. in Geology - University of Ife",
            "B.Sc. in Geology - University of Ibadan",
            "Professional Geologist (P.Geol) - Nigerian Association of Petroleum Explorationists"
          ],
          experience: "Dr. Adeesida started his career with Shell Petroleum Development Company of Nigeria (SPDC) and served in different capacities as Head of - Geological Laboratory, Nigeria; Head - Northern Swamp Evaluation Team, Exploration, Nigeria. He retired. After retirement, he established Geoterrain Nigeria Limited (GtN). He is a fellow of the Nigerian Association of Petroleum Explorationists (NAPE), an honorary member of American Association of Petroleum Geologists (AAPG), active member of Nigerian Mining and Geosciences Society (NMGS) a member of Nigerian Association of Engineering Geology and Environment (NAEGE) and active member of Society of Exploration Geophysicists. He served as President, Africa Region of AAPG from 2003 - 2005 and Chairman, AAPG International from 2010 - 2014. He earned BSc, MSc and PhD in Geology and Applied Geology.; ",
          achievements: [
            "Waste and Spills Management; and Business Manager",
            "Commercial Crude and Gas Handling, Nigeria",
            "He was on a cross-posting assignment in Holland/Scotland and the Sultanate of Brunei, Southeast Asia",
            "Worked in Warri, Port Harcourt, and Lagos for SPDC",
            "Spent about 29 years with Shell"
          ]
        },
        management: [
          // {
          //   name: "Engr. Funmilayo Adeyemi",
          //   title: "Head of Environmental Services",
          //   qualification: "M.Eng. Environmental Engineering, 15 years experience"
          // },
          // {
          //   name: "Dr. Chukwuma Okoro",
          //   title: "Head of Geochemical Services", 
          //   qualification: "Ph.D. Geochemistry, 12 years experience"
          // },
          // {
          //   name: "Geol. Aisha Mahmud",
          //   title: "Head of Marine & Oceanography",
          //   qualification: "M.Sc. Marine Geology, 10 years experience"
          // }
        ]
      }
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
              Who We Are
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover our expertise, partnerships, and the people behind GeoTerrain Nigeria Limited
            </p>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="space-y-8">
            {sections.map((section) => {
              const Icon = section.icon;
              const isExpanded = expandedSections[section.id];
              
              return (
                <Card key={section.id} className="overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                      <div className="flex items-center gap-4 flex-1">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-2xl">{section.title}</CardTitle>
                          <CardDescription className="mt-2 text-base">
                            {section.shortDescription}
                          </CardDescription>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleSection(section.id)}
                        className="lg:ml-auto self-start lg:self-center"
                      >
                        {isExpanded ? (
                          <>
                            <ChevronUp className="w-4 h-4 mr-2" />
                            Show Less
                          </>
                        ) : (
                          <>
                            <ChevronDown className="w-4 h-4 mr-2" />
                            Read More
                          </>
                        )}
                      </Button>
                    </div>
                  </CardHeader>
                  
                  {isExpanded && (
                    <CardContent className="pt-0">
                      {section.id === "about" && (
                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                              <Shield className="w-5 h-5 text-primary" />
                              Why Choose Geoterrain
                            </h4>
                            <ul className="space-y-2">
                              {section.fullContent.whyGeoterrain.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                                  <span className="text-muted-foreground">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="space-y-6">
                            <div>
                              <h4 className="font-semibold mb-3">Licensed By</h4>
                              <ul className="space-y-1">
                                {section.fullContent.licensedBy.map((item, idx) => (
                                  <li key={idx} className="text-muted-foreground text-sm">• {item}</li>
                                ))}
                              </ul>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold mb-3">Registered With</h4>
                              <ul className="space-y-1">
                                {section.fullContent.registeredWith.map((item, idx) => (
                                  <li key={idx} className="text-muted-foreground text-sm">• {item}</li>
                                ))}
                              </ul>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold mb-3">Our Certifications</h4>
                              <ul className="space-y-1">
                                {section.fullContent.certifications.map((item, idx) => (
                                  <li key={idx} className="text-muted-foreground text-sm">• {item}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {section.id === "partners" && (
                        <div>
                          <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-primary mb-4">
                              {section.fullContent.tagline}
                            </h3>
                            <p className="text-muted-foreground max-w-3xl mx-auto">
                              {section.fullContent.description}
                            </p>
                          </div>
                          
                          <div className="grid md:grid-cols-2 gap-8">
                            <div>
                              <h4 className="font-semibold text-lg mb-4">Indigenous Institutions/Companies</h4>
                              <div className="grid gap-3">
                                {section.fullContent.indigenous.map((partner, idx) => (
                                  <div key={idx} className="p-3 bg-muted/50 rounded-lg">
                                    <span className="font-medium">{partner}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold text-lg mb-4">International Companies</h4>
                              <div className="grid gap-3">
                                {section.fullContent.international.map((partner, idx) => (
                                  <div key={idx} className="p-3 bg-muted/50 rounded-lg">
                                    <span className="font-medium">{partner}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {section.id === "team" && (
                        <div>
                          <div className="mb-8">
                            <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-6 rounded-xl">
                              <div className="flex items-start gap-6">
                                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                                  <span className="text-2xl font-bold text-primary">
                                    {section.fullContent.ceo.name.split(' ').map(n => n[0]).join('')}
                                  </span>
                                </div>
                                <div className="flex-1">
                                  <h3 className="text-2xl font-bold mb-1">{section.fullContent.ceo.name}</h3>
                                  <p className="text-primary font-semibold mb-4">{section.fullContent.ceo.title}</p>
                                  <p className="text-muted-foreground mb-4">{section.fullContent.ceo.experience}</p>
                                  
                                  <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                      <h4 className="font-semibold mb-3">Qualifications</h4>
                                      <ul className="space-y-1">
                                        {section.fullContent.ceo.qualifications.map((qual, idx) => (
                                          <li key={idx} className="text-sm text-muted-foreground">• {qual}</li>
                                        ))}
                                      </ul>
                                    </div>
                                    
                                    <div>
                                      <h4 className="font-semibold mb-3">Key Achievements</h4>
                                      <ul className="space-y-1">
                                        {section.fullContent.ceo.achievements.map((achievement, idx) => (
                                          <li key={idx} className="text-sm text-muted-foreground">• {achievement}</li>
                                        ))}
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-lg mb-4">Management Team</h4>
                            <div className="grid md:grid-cols-3 gap-4">
                              {section.fullContent.management.map((member, idx) => (
                                <div key={idx} className="p-4 border border-border rounded-lg">
                                  <h5 className="font-semibold mb-1">{member.name}</h5>
                                  <p className="text-primary text-sm font-medium mb-2">{member.title}</p>
                                  <p className="text-xs text-muted-foreground">{member.qualification}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  )}
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default WhoWeAre;