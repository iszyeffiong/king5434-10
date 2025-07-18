const ClientsSection = () => {
  const clients = [
    { name: "", logo: "https://i.ibb.co/gL567tyy/image.png " },
    { name: "", logo: "https://i.ibb.co/qGJcYK3/unnamed-18.jpg" },
    { name: "", logo: "https://i.ibb.co/cK8KQ4ds/unnamed-21.jpg" },
    { name: "", logo: "https://i.ibb.co/QFM4cfkh/download.jpg" },
    { name: "", logo: "https://i.ibb.co/2YMmPyrr/unnamed-23.jpg" },
    { name: "", logo: "https://i.ibb.co/mVVDwXVX/image.png" },
    { name: "", logo: "https://i.ibb.co/DfzSDWG1/unnamed-24.jpg" },
    { name: "", logo: "https://i.ibb.co/SX33fHKS/unnamed-7.png" }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Our Clients</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-center">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="bg-card p-4 rounded-lg shadow-sm border hover:shadow-md transition-shadow w-[120px] h-20 flex items-center justify-center"
            >
              <img 
                src={client.logo.trim()} 
                alt={client.name || `Client ${index + 1}`} 
                className="h-12 mx-auto object-contain"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground max-w-3xl mx-auto">
            We are proud to work with leading organizations in the oil and gas industry, providing them with expert consulting services that meet international standards and regulatory requirements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
