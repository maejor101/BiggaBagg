import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const PartnersCarousel = () => {
  const partners = [
    {
      name: "Diji",
      logo: "/assets/diji (1).png",
      alt: "Diji Logo"
    },
    {
      name: "Flexipeak Innovations", 
      logo: "/assets/Flexipeak Innovations SVG 1.svg",
      alt: "Flexipeak Innovations Logo"
    },
    {
      name: "Shopify",
      logo: "/assets/shopify_logo_whitebg.svg", 
      alt: "Shopify Logo"
    }
  ];

  return (
    <section className="py-16 px-6 bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
            Our Partners
          </h2>
          <p className="text-muted-foreground">
            Trusted by industry leaders and innovative companies
          </p>
        </div>
        
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
          opts={{
            align: "center",
            loop: true,
            duration: 20,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {partners.map((partner, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3">
                <div className="flex items-center justify-center p-8 bg-background/50 rounded-lg border h-32">
                  <img
                    src={partner.logo}
                    alt={partner.alt}
                    className="max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    style={{ maxHeight: '200px' }}
                  />
                </div>
              </CarouselItem>
            ))}
            {/* Duplicate items for seamless loop */}
            {partners.map((partner, index) => (
              <CarouselItem key={`duplicate-${index}`} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3">
                <div className="flex items-center justify-center p-8 bg-background/50 rounded-lg border h-32">
                  <img
                    src={partner.logo}
                    alt={partner.alt}
                    className="max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    style={{ maxHeight: '200px' }}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default PartnersCarousel;