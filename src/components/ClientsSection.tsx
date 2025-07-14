const ClientsSection = () => {
  const clients = [
    "Shell",
    "Chevron", 
    "NNPC",
    "HYPREP",
    "Addax",
    "First EP",
    "Engaged"
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Our Clients</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="bg-card p-4 rounded-lg shadow-sm border hover:shadow-md transition-shadow w-full h-20 flex items-center justify-center"
            >
              <span className="text-muted-foreground font-semibold text-sm text-center">
                {client}
              </span>
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