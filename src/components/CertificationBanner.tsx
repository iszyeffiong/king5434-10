const CertificationBanner = () => {
  return (
    <div className="bg-primary text-primary-foreground py-3">
      <div className="container mx-auto px-4">
        <div className="text-center text-sm overflow-hidden whitespace-nowrap">
          <div className="animate-marquee inline-block">
            We are ISO 9001:2015 and ISO14001:2015 certified. We are also a beneficiary of the NCDMB Project 100 Scheme.
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationBanner;