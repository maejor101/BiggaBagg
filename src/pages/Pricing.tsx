import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PackageCard from "@/components/PackageCard";
import ComparisonTable from "@/components/ComparisonTable";
import { Button } from "@/components/ui/button";
import { Sparkles, Shield, Headphones, Zap, ArrowDown } from "lucide-react";

const Pricing = () => {
  const packages = [
    {
      name: "Basic",
      price: "R2,000",
      tier: "STARTER",
      slug: "basic",
      description: "Essential tools to launch your first professional store.",
      features: [
        "3-5 Shopify Pages",
        "10-15 Products Added",
        "Basic Store Branding",
        "Basic SEO Setup",
        "1-2 Basic Apps",
        "Payment Gateway Setup",
        "Social Media Integration",
        "1 Revision Round",
        "2-Day Post-Launch Support",
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
        "Up to 5 Shopify Pages",
        "25 Products with Variants",
        "Standard Branding Pack",
        "Inventory Management Setup",
        "Reviews Integration",
        "Email Notifications",
        "Conversion Boosters",
        "Up to 5 Apps Installed",
        "2 Revisions, 7-Day Support",
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
        "7-10 Custom Pages",
        "Up to 50 Products",
        "Advanced Branding Kit",
        "Advanced SEO Suite",
        "Custom Shopify Sections",
        "Store Automations",
        "Welcome Email Flow",
        "Up to 10 Apps",
        "3 Revisions, 15-Day Support",
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
        "Full Theme Revamp OR Custom Theme",
        "50-100 Products",
        "Complete Brand Identity",
        "High-Converting Funnel System",
        "Full Email Automation",
        "Pro Copywriting (5-7 Pages)",
        "Complete Ads Setup",
        "Loyalty & Rewards System",
        "30-Day VIP Support",
      ],
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
          <section className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">
                Ecommerce Growth Partners
              </span>
            </div>
            
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground leading-tight mb-6">
              Launch your dream<br />
              <span className="gradient-text">Shopify store today.</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Choose the perfect growth engine for your business, from startup basics 
              to complete ecosystem dominance.
            </p>

            <Button variant="hero" size="xl" className="animate-pulse-glow">
              View Pricing Packages
              <ArrowDown className="w-5 h-5" />
            </Button>
          </section>

          {/* Pricing Header */}
          <section className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pricing for every stage
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Whether you're testing the waters or ready to dominate your niche, 
              we have a package tailored to your goals.
            </p>
          </section>

          {/* Package Cards Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {packages.map((pkg, index) => (
              <PackageCard key={index} {...pkg} />
            ))}
          </section>

          {/* Compare Features Section */}
          <section className="mb-20">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                Compare features
              </h2>
              <Button variant="outline" size="sm">
                Download Spec Sheet
                <ArrowDown className="w-4 h-4" />
              </Button>
            </div>
            <ComparisonTable />
          </section>

          {/* Trust Badges */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="glass-card rounded-xl p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Secure Payment</h3>
                <p className="text-sm text-muted-foreground">SSL Encrypted</p>
              </div>
            </div>
            <div className="glass-card rounded-xl p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                <Headphones className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Expert Support</h3>
                <p className="text-sm text-muted-foreground">Direct Access</p>
              </div>
            </div>
            <div className="glass-card rounded-xl p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Fast Delivery</h3>
                <p className="text-sm text-muted-foreground">5-7 Business Days</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
