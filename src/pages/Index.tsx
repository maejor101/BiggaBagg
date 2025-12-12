import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PackageCard from "@/components/PackageCard";
import PartnersCarousel from "@/components/PartnersCarousel";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, Check, Store, Palette, Package, ShoppingBag, Mail, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const packages = [
    {
      name: "Basic",
      price: "R2,000",
      tier: "STARTER",
      slug: "basic",
      description: "Essential tools to launch your first professional store.",
      features: [
        "Complete Store Setup",
        "Free Theme Installation",
        "Up to 15 Products",
        "Basic Email Support",
      ],
    },
    {
      name: "Standard",
      price: "R4,500",
      tier: "GROWTH",
      slug: "standard",
      description: "Expanded features for growing brands and businesses.",
      features: [
        "Everything in Basic",
        "Premium Theme Setup",
        "Up to 25 Products",
        "SEO Foundation Pack",
        "Standard Chat Support",
      ],
    },
    {
      name: "Advanced",
      price: "R7,500",
      tier: "SCALING",
      slug: "advanced",
      popular: true,
      description: "Powerful tools for businesses scaling up rapidly.",
      features: [
        "Everything in Standard",
        "Custom Liquid Coding",
        "Up to 50 Products",
        "Advanced SEO Suite",
        "Priority Email Support",
      ],
    },
    {
      name: "Premium",
      price: "R12,000",
      tier: "ENTERPRISE",
      slug: "premium",
      description: "Complete ecosystem dominance with dedicated management.",
      features: [
        "Everything in Advanced",
        "VIP 24/7 Dedicated Support",
        "Unlimited Product Uploads",
        "Full Marketing Suite",
        "Dedicated Account Manager",
      ],
    },
  ];

  const whyChooseUs = [
    {
      icon: Store,
      title: "Complete Store Setup",
      description: "From domain to launch, we handle every technical detail so you can focus on your products.",
    },
    {
      icon: Palette,
      title: "Custom Branding",
      description: "Stand out with a unique visual identity that resonates with your target audience.",
    },
    {
      icon: Package,
      title: "Product Management",
      description: "Professional upload and optimization of your products with proper tagging and SEO.",
    },
    {
      icon: ShoppingBag,
      title: "Conversion Optimization",
      description: "Strategic setup of apps and features designed to turn visitors into customers.",
    },
    {
      icon: Mail,
      title: "Email Automation",
      description: "Set up automated flows to nurture leads and recover abandoned carts.",
    },
    {
      icon: TrendingUp,
      title: "Growth Ready",
      description: "Built to scale with your business, from your first sale to your millionth.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Gradient overlays */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <Header />

      <main className="relative pt-24 pb-12">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <section className="text-center py-16 md:py-24">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">
                Ecommerce Growth Partners
              </span>
            </div>
            
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
              Launch your dream<br />
              <span className="gradient-text">Shopify store today.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Choose the perfect growth engine for your business, from startup basics 
              to complete ecosystem dominance.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                variant="hero" 
                size="xl" 
                className="animate-pulse-glow"
                onClick={() => {
                  const packagesSection = document.getElementById('pricing-preview');
                  packagesSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Pricing Packages
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Link to="/portfolio">
                <Button variant="outline" size="xl">
                  See Our Work
                </Button>
              </Link>
            </div>
          </section>

          {/* Pricing Preview */}
          <section className="py-16" id="pricing-preview">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Pricing for every stage
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Whether you're testing the waters or ready to dominate your niche, 
                we have a package tailored to your goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {packages.map((pkg, index) => (
                <PackageCard key={index} {...pkg} />
              ))}
            </div>

            <div className="text-center">
              <Link to="/pricing">
                <Button variant="ghost" size="lg">
                  Compare all features
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-16">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why choose <span className="gradient-text">Bigga Bagg</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                We don't just build stores—we build complete ecommerce ecosystems 
                designed for growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseUs.map((item, index) => (
                <div 
                  key={index} 
                  className="glass-card rounded-xl p-6 transition-all duration-300 hover:border-primary/30 hover:translate-y-[-2px]"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16">
            <div className="glass-card rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5" />
              <div className="relative">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Ready to launch your store?
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                  Join hundreds of successful brands that trust us with their Shopify stores. 
                  Get started today with a package that fits your needs.
                </p>
                <Link to="/pricing">
                  <Button variant="hero" size="xl">
                    Get Started Now
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      <PartnersCarousel />
      <Footer />
    </div>
  );
};

export default Index;
