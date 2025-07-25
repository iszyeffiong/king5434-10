  import { useState } from "react";
  import heroImage from "@/assets/hero-landscape.jpg";
  import { ArrowRight, X } from "lucide-react";
  import { Document, Page } from "react-pdf";
 import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;



  const HeroSection = () => {
    const [open, setOpen] = useState(false);
    const [numPages, setNumPages] = useState<number>(1);

    const handleLoadSuccess = ({ numPages }: { numPages: number }) => {
      setNumPages(numPages);
    };

    return (
      <section className="relative min-h-screen overflow-hidden flex items-center">
        {/* Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110 transition-transform duration-700 hover:scale-105"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/60 to-earth-blue/70"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-float"></div>
          <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-earth-gold/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-white/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-4xl">
            <div className="animate-fade-in-up">
              <p className="text-2xl md:text-6xl lg:text-4xl font-bold text-white mb-8 leading-tight">
                Excellence in Geosciences, Environmental, Oceanography, Project and 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-earth-gold to-white"> 
                  Asset Management Solutions
                </span>
              </p>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl">
                We are committed to excellence in job execution and maintain high international ethical standards
              </p>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl">
                Leading consulting company in Nigeria rendering geosciences, environmental, and oceanographic solutions in line with NUPRC, FME, NOSDRA and other regulatory / statutory requirements.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <a href="/services">
                <button className="group bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
              </a>

              {/* Management Policy Button */}
              <button
                onClick={() => setOpen(true)}
                className="group bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center"
              >
                Management Policy
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
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

        {/* Management Policy Modal */}
       {open && (
  <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
    <div className="bg-white rounded-xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden relative">
      <button
        onClick={() => setOpen(false)}
        className="absolute top-3 right-3 text-gray-400 hover:text-red-500 z-10"
      >
        <X className="w-6 h-6" />
      </button>

      <h2 className="text-lg font-semibold p-4 border-b">Management Policy Preview</h2>

      {/* PDF in iframe */}
      <iframe
        src="/pdfs/Management-Policy.pdf"
        title="Management Policy PDF"
        className="w-full h-[70vh] border-none"
      />

      <div className="flex justify-end p-4 border-t">
        <a
          href="/pdfs/Management-Policy.pdf"
          download
          className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark"
        >
          Download PDF
        </a>
      </div>
    </div>
  </div>
)}



      </section>
    );
  };

  export default HeroSection;
