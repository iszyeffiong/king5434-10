import iso9001Badge from "@/assets/iso-9001-badge.png";
import iso14001Badge from "@/assets/iso-14001-badge.png";

const CertificationsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary-light to-earth-blue text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Certifications</h2>
            <div className="w-24 h-1 bg-primary-foreground mx-auto mb-4"></div>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Certified to international standards, ensuring the highest quality in our services
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-12 lg:gap-20">
          <div className="group animate-scale-in" style={{animationDelay: '0.2s'}}>
            <div className="bg-background p-8 rounded-2xl shadow-2xl transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-3xl">
              <img 
                src={"https://i.ibb.co/39KMCgC1/Whats-App-Image-2025-07-17-at-12-31-59-fe4d5dd9.jpg "} 
                alt="ISO 9001:2015 Certified" 
                className="h-32 w-auto mx-auto mb-4"
              />
              <div className="text-center">
                <h3 className="text-xl font-bold text-foreground mb-2">ISO 9001:2015</h3>
                <p className="text-muted-foreground">Quality Management System</p>
              </div>
            </div>
          </div>
          
          <div className="group animate-scale-in" style={{animationDelay: '0.4s'}}>
            <div className="bg-background p-8 rounded-2xl shadow-2xl transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-3xl">
              <img 
                src={"https://i.ibb.co/Rkb35j3k/Whats-App-Image-2025-07-17-at-12-32-01-179bc75c.jpg"} 
                alt="ISO 14001:2015 Certified" 
                className="h-32 w-auto mx-auto mb-4"
              />
              <div className="text-center">
                <h3 className="text-xl font-bold text-foreground mb-2">ISO 14001:2015</h3>
                <p className="text-muted-foreground">Environmental Management System</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">NCDMB Project 100 Beneficiary</h3>
            <p className="text-primary-foreground/90 text-lg">
              Proud beneficiary of the Nigerian Content Development and Monitoring Board Project 100, 
              demonstrating our commitment to local content development and capacity building.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;