import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";

interface ServiceItem {
  name: string;
  description: string;
}

interface GalleryItem {
  title: string;
  image: string;
}

interface ServiceSubmenuProps {
  serviceId: string;
  subheader: string;
  services: ServiceItem[];
  gallery: GalleryItem[];
}

const ServiceSubmenu = ({ serviceId, subheader, services, gallery }: ServiceSubmenuProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <CardContent className="pt-0">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-primary mb-6 text-center">
          {subheader}
        </h3>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {services.map((item, idx) => (
            <div key={idx} className="p-4 border border-border rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-semibold mb-3 text-primary">{item.name}</h4>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
        
        {/* Gallery Section */}
        <div className="bg-muted/30 p-6 rounded-xl">
          <h4 className="font-semibold text-lg mb-4 text-center">Gallery</h4>
          <div className="relative">
            <div className="aspect-video rounded-lg overflow-hidden mb-4">
              <img
                src={gallery[currentImageIndex].image}
                alt={gallery[currentImageIndex].title}
                className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => goToImage((currentImageIndex + 1) % gallery.length)}
              />
            </div>
            
            <div className="flex items-center justify-between mb-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevImage}
                className="rounded-full"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              
              <div className="text-center">
                <p className="font-medium">{gallery[currentImageIndex].title}</p>
                <p className="text-sm text-muted-foreground">
                  {currentImageIndex + 1} of {gallery.length}
                </p>
              </div>
              
              <Button
                variant="outline"
                size="icon"
                onClick={nextImage}
                className="rounded-full"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="flex justify-center gap-2">
              {gallery.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToImage(idx)}
                  className={`w-3 h-3 rounded-full transition-colors hover:scale-110 ${
                    idx === currentImageIndex ? 'bg-primary' : 'bg-muted hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </CardContent>
  );
};

export default ServiceSubmenu;