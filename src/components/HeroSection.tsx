import heroImage from "@/assets/hero-landscape.jpg";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">
      {/* Modern Background with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110 transition-transform duration-700 hover:scale-105"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/60 to-earth-blue/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-earth-gold/30 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-white/30 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Modern Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Excellence in 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-earth-gold to-white"> 
                Geosciences
              </span>
            </h1>
          </div>
          
          <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-4 font-light">
              We are committed to excellence in job execution and maintain high international ethical standards
            </p>
          </div>

          <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl">
              Leading consulting company in Nigeria rendering geosciences, environmental, and oceanographic solutions that meet NUPRC and NNPCL standards.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <a href="/services">
                <button className="group bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
              </a>
            
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">1.2m+</div>
              <div className="text-white/80 text-sm uppercase tracking-wider">MAN-HOURS WITHOUT LTI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">15+</div>
              <div className="text-white/80 text-sm uppercase tracking-wider">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">332+</div>
              <div className="text-white/80 text-sm uppercase tracking-wider">Projects Completed</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;