import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const LicensingInfo = () => {
  const whyChooseUs = [
    "Proven track record of over 15 years in the industry",
    "Highly qualified team of geoscientists, environmental scientists, engineers, economists and other associated disciplines",
    "State-of-the-art equipment and advanced analytical capabilities",
    "Commitment to sustainable and environmentally responsible practices",
    "Local expertise with international standards",
    "Cost-effective solutions tailored to client needs"
  ];

  const licensedBy = [
    "Corporate Affairs Commission (CAC) - Nigeria",
    "Nigerian Upstream Petroleum Regulatory Commission (NUPRC)",
    "Federal Ministry of Environment (FME)",
    "Nigerian Petroleum Exchange (NipeX)",
    "NNPC Upstream Investment Services (NUIS), formally National Petroleum Investment Management Services, NAPIMS",
    "National Oil Spill Detection and Response Agency (NOSDRA), Nigeria",
    "Nigerian Content Development and Monitoring Board (NCDMB)",
    "Rivers State Ministry of Environment (RSME)",
    "Bureau of Public Procurement (BPP)",
    "Federal Inland Revenue Service (FIRS)",
    "Industrial Training Fund (ITF)",
    "Lagos State Internal Revenue Service (LIRS)",
    "Rivers State Internal Revenue Services (RIRS)",
    "National Pension Commission (PENCOM)",
    "Nigeria Social Insurance Trust Fund (NSITF), et cetera",
    "Nigerian Society of Engineers (NSE)"
  ];

  const registeredWith = [
    "Nigerian National Petroleum Company Limited (NNPCL)",
    "NNPC Exploration & Petroleum Limited (NEPL)",
    "Federal Ministry of Environment - Hydrocarbon Pollution Remediation Project (HYPREP)",
    "Shell Nigerian Exploration and Production Company (SNEPCO)",
    "Chevron Nigeria Limited (CNL)",
    "Shell Petroleum Development Company of Nigeria Limited (SPDC, now Renaissance Africa Energy Company Ltd)",
    "Total Energies Nigeria",
    "Nigerian Agip Exploration (NAE)",
    "EXXONMOBIL Nigeria / Mobil Producing Nigeria Unlimited (MPNU)",
    "ADDAX, (former Operator of OML 123, 124, 126 & 137)",
    "Renaissance Africa Energy Company Ltd (formerly SPDC)",
    "FIRST Exploration and Petroleum Development Company Ltd",
    "Enageed Resources Limited /Sahara Group",
    "Platform Petroleum Limited",
    "South Atlantic Petroleum (SAPETRO)",
    "Nigeria Liquefied Natural Gas (NLNG)",
    "Antan Producing Limited (APL), New Operator of OML 123, 124, 126 & 137",
    "Oando Plc (New Operator of Nigerian Agip Oil Company (NAOC) Ltd Assets",
    "WalterSmith Petroman Oil Limited",
    "Ammi International Petroleum Development Company Limited",
    "Heirs Energies Limited",
    "Seplat Energy, new operator of MPNU OML 67,68,70 & 104, Qua Iboe Export Terminal, Yoho FSO, Bonny River Terminal (BRT) NGL recovery plant",
    "Nigerian Gas Association (NGA)"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-primary/5 py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <Link to="/who-we-are" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6">
              <ArrowLeft className="w-4 h-4" />
              Back to Who We Are
            </Link>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Licensing & Registration
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Complete information about our licenses and registrations
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-background">
        <div className="container mx-auto px-4 lg:px-6">
          <Card className="max-w-4xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl lg:text-3xl mb-4">Why Choose Geoterrain</CardTitle>
              <p className="text-muted-foreground">Discover what sets us apart in the industry</p>
            </CardHeader>
            <CardContent>
              <ul className="grid md:grid-cols-2 gap-4">
                {whyChooseUs.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Licensing & Registration Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Credentials
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Fully licensed and registered with leading organizations and regulatory bodies
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="text-xl">Geoterrain Nigeria Limited is fully licensed by:</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {licensedBy.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="text-xl">Geoterrain Nigeria Limited is fully registered with:</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {registeredWith.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mt-8">
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="text-xl">Geoterrain Nigeria Limited is fully licensed by:</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {licensedBy.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="text-xl">Geoterrain Nigeria Limited is fully registered with:</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {registeredWith.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default LicensingInfo;