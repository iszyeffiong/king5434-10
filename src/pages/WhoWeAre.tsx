import { useState } from "react";
import { ChevronDown, ChevronUp, Users, Award, Building2, Shield } from "lucide-react";
import { Link } from "react-router-dom";
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
      shortDescription: "Geoterrain Nigeria Limited is among the leading consulting companies in Nigeria rendering consultancy services in the following areas, which meets the Nigerian Upstream Petroleum Regulatory Commission (NUPRC), Federal Ministry of Environment (FME) and NNPCL-NUIS-NipeX (formerly NNPC-NAPIMS-NIPEX) requirements: ",
      fullContent: {
        whyGeoterrain: [
          "Hydrocarbon Exploration and Production",
          "Acreage Evaluation",
          "Integrated Environmental Studies",
          "Oil Spill Response and Remediation",
          "Oceanography and Marine",
          "Geospatial Information technology",
          "New Ventures, Project and Asset Management",
          "Training"
        ],
        licensedBy: [
          "Federal Ministry of Environment (FME)",
          "Nigerian Upstream Petroleum Regulatory Commission (NUPRC)",
          "Nigerian Petroleum Exchange (NipeX)",
          "NNPC Upstream Investment Services (NUIS), formally National Petroleum Investment Management Services, NAPIMS",
          "Nigerian Content Development and Monitoring Board (NCDMB)",
          "National Oil Spill Detection and Response Agency (NOSDRA), Nigeria",
          "Rivers State Ministry of Environment (RSME)",
          "Bureau of Public Procurement (BPP)", 
          "Federal Inland Revenue Service (FIRS)",
          "Industrial Training Fund (ITF)",
          "Lagos State Internal Revenue Service (LIRS)",
          "Rivers State Internal Revenue Services (RIRS)",
          "National Pension Commission (PENCOM)",
          "Nigeria Social Insurance Trust Fund (NSITF), et cetera"
        ],
        registeredWith: [
           "Shell Petroleum Development Company Of Nigeria Limited (SPDC)", 
          "Shell Nigeria Exploration and Production Company Limited (SNEPCo)",
          "Addax Petroleum Exploration (Nigeria) Limited",
          "Chevron Nigeria Limited (CNL)",
          "ExxonMobil",
          "Elf Petroleum Nigeria Limited (EPNL)",
          "Nigerian Agip Oil Company (NAOC)",
          "TotalEnergies - Total Nigeria Plc",
          "First Exploration and Production Development Company Limited (First  E&P)",
          "Nigerian National Petroleum Company Energy Services Limited (NNPC Enserve)",
          "Nigeria Liquefied Natural Gas (NLNG)",
          "Nigerian National Petroleum Company Limited (NNPCL)",
          "Nigerian National Petroleum Company Exploration and Production Limited (NEPL)",
          "NNPC Engineering & Technical Company Limited (NETCO)",
          "Pan Ocean Oil Corporation (Nigeria) Limited",
          "Platform Petroleum Limited",
          "Enageed (Sahara Energy Resource Limited)",
          "South Atlantic Petroleum (SAPETRO)",
          "Seplat Energy"
        ],
        certifications: [
          
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
        description: "Geoterrain Nigeria Limited seeks partnerships with both local and international reputable companies including local, well renowned Institutions. Some of which include:",
        indigenous: [
          "Jawura Environmental Services Limited (JESL)",
          "Halden Nigeria Limited Laboratory",
          "Ebic Integrated Services Limited Laboratory (EISL)",
          "Global Energy Nigeria Limited",
          "Laser Engineering Laboratory",
          "Verity GeoSolution Nigeria Limited",
          "NNPC Engineering & Technical Company Limited (NETCO)",
          "UNILAG CONSULTS, University of Lagos, Nigeria"
        ],
        
        international: [
          "ALS Environmental Laboratories, Chester, UK.",
          "i2 Environmental Laboratory, Watford, UK",
          "Peak Processing, UK",
          "Columbia Technologies, USA",
          "Total Environmental Concept, Maryland, USA",
          "Stratum Reservoir (formerly Weatherford Laboratories, Houston, USA).",
          "Peiyang Chemical Equipment Co. (refer to PCC)"
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
          experience: ["Dr. Adekunle ADESIDA is a qualified geologist, a proven environmentalist and oil finder with over 43 years’ industry experience in upstream and downstream management, technical and commercial roles. In addition, he currently sits as Director on the board of PNG Gas Limited and MOS Energy.",
          "He started his career with Shell Petroleum Development Company of Nigeria (SPDC) and contributed to the Exploration and Production development in multifarious and diverse ways as Head - Geological Laboratory, Nigeria; Head - Northern Swamp Evaluation Team, Exploration, Nigeria; Head - Waste and Spills Management; and Business Manager – Commercial Crude and Gas Handling, Nigeria and served in different capacities across the globe (i.e. Nigeria, Netherland, Scotland, and Sultanate of Brunei, Southeast Asia) in his 28 years with SPDC.",
          "He served as President, Africa Region of American Association of Petroleum Geologists (AAPG) from 2003 - 2005 and Chairman, AAPG International from 2010 - 2014. He is a Fellow of the Nigerian Association of Petroleum Explorationists (NAPE), Fellow of the Nigerian Association of Engineering Geology and Environment (NAEGE), an honorary member of AAPG, and active member of the Nigerian Mining and Geosciences Society (NMGS).",],
          achievements: [
            "Waste and Spills Management; and Business Manager",
            "Commercial Crude and Gas Handling, Nigeria",
            "He was on a cross-posting assignment in Holland/Scotland and the Sultanate of Brunei, Southeast Asia",
            "Worked in Warri, Port Harcourt, and Lagos for SPDC",
            "Spent about 29 years with Shell"
          ]
        },
       management:  [
          /*  {
            name: "Engr. Funmilayo Adeyemi",
            title: "Head of Environmental Services",
            qualification: "M.Eng. Environmental Engineering, 15 years experience"
          },
          {
            name: "Dr. Chukwuma Okoro",
            title: "Head of Geochemical Services", 
            qualification: "Ph.D. Geochemistry, 12 years experience"
          },
          {
            name: "Geol. Aisha Mahmud",
            title: "Head of Marine & Oceanography",
            qualification: "M.Sc. Marine Geology, 10 years experience"
          } */
        ], 
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
                              <h4 className="font-semibold mb-3">Geoterrain Nigeria Limited is fully licensed by:</h4>
                              <ul className="space-y-1">
                                {section.fullContent.licensedBy.slice(0, 3).map((item, idx) => (
                                  <li key={idx} className="text-muted-foreground text-sm">• {item}</li>
                                ))}
                              </ul>
                              <Link to="/licensing-info">
                                <Button variant="outline" size="sm" className="mt-3">
                                  Read More
                                </Button>
                              </Link>
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
                                        {section.fullContent.ceo.experience.map((paragraph: string, idx: number) => (
                                          <p key={idx} className="text-muted-foreground mb-4">{paragraph}</p>
                                        ))}
                                                                          
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