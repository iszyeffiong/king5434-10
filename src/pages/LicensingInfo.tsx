import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const LicensingInfo = () => {
  const licensedBy = [
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
  ];

  const registeredWith = [
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

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Geoterrain Nigeria Limited is fully licensed by:</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {licensedBy.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Geoterrain Nigeria Limited is fully registered with:</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {registeredWith.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
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