import { Link } from "react-router-dom";
import { Check, ArrowLeft, Crown, ShoppingBag, Palette, Layers, Mail, PenTool, Target, Gift, HeartHandshake, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const includedFeatures = [
  "Everything in Basic",
  "Everything in Standard",
  "Everything in Advanced",
  "7-10 Custom Pages",
  "50 Products",
  "Advanced Branding Kit",
  "Custom Shopify Sections",
  "Advanced SEO",
  "Welcome Email Flow",
  "10 Apps Installed",
  "Pixel & Tracking Setup",
  "Store Automations",
];

const premiumFeatures = [
  {
    category: "Theme & Design",
    icon: Layers,
    items: [
      "Full Theme Revamp OR Custom Shopify Theme",
      "Custom Layouts",
      "Custom UX Sections",
      "High-End Animations",
      "Premium User Interface Styling",
    ]
  },
  {
    category: "Products & Catalog",
    icon: ShoppingBag,
    items: [
      "50-100 Products Upload",
      "20+ Collections Setup",
      "Premium Product Pages",
    ]
  },
  {
    category: "Complete Brand Identity",
    icon: Palette,
    items: [
      "Premium Logo + Sub-Logos",
      "Custom Icon Set",
      "Color and Typography System",
      "Brand Patterns",
      "Product Highlight Templates",
    ]
  },
  {
    category: "High-Converting Funnels",
    icon: Target,
    items: [
      "Upsell Funnel (Post-Purchase)",
      "One-Page Checkout Funnel",
      "Bundle Deals Page",
      "Offer Landing Page",
      "Free Shipping Threshold Setup",
    ]
  },
  {
    category: "Full Email Automation",
    icon: Mail,
    items: [
      "Welcome Series (3-5 emails)",
      "Abandoned Cart Flow",
      "Browse Abandon Flow",
      "Order Follow-Up Flow",
      "Klaviyo or Shopify Email Setup",
    ]
  },
  {
    category: "Professional Copywriting",
    icon: PenTool,
    items: [
      "Home Page Copy",
      "About Page Copy",
      "Shop Intro Copy",
      "Product Descriptions",
      "FAQ Page",
      "Contact Page",
      "Brand Story",
    ]
  },
  {
    category: "Ads Setup",
    icon: Sparkles,
    items: [
      "Pixel + Domain Verification",
      "Events & API Setup",
      "Campaign Structure",
      "3 Professionally Written Ad Copies",
      "3 Audience Setup",
    ]
  },
  {
    category: "Loyalty & Rewards",
    icon: Gift,
    items: [
      "Points System",
      "Referral Program",
      "VIP Tiers",
      "Cashback Setup",
    ]
  },
  {
    category: "VIP Support",
    icon: HeartHandshake,
    items: [
      "30-Day VIP Priority Support",
      "Faster Response Time",
      "Monthly Store Health Check (1 Session)",
      "Conversions Review",
      "SEO & Speed Audit",
      "Customer Experience Recommendations",
      "10 Minor Revisions",
    ]
  },
];

const limits = [
  { label: "Pages", value: "10+" },
  { label: "Products", value: "100" },
  { label: "Collections", value: "20+" },
  { label: "Apps", value: "50" },
  { label: "Email Flows", value: "3" },
  { label: "Funnels", value: "4" },
  { label: "Revisions", value: "10" },
  { label: "Support", value: "30 Days" },
];

const PackagePremium = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-16">
          <Link to="/pricing" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Pricing
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
                <Crown className="w-4 h-4" />
                Full-Service Premium
              </div>
              
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Premium Package
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                Full-scale ecommerce + marketing starter. For serious brands that want a complete online business, not just a website.
              </p>
              
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-5xl font-display font-bold gradient-text">R12,000</span>
                <span className="text-muted-foreground">once-off</span>
              </div>
              
              <Link to="/onboarding">
                <Button variant="hero" size="lg" className="w-full sm:w-auto">
                  Get Started
                </Button>
              </Link>
            </div>
            
            {/* Package Limits Card */}
            <div className="glass-card p-8 rounded-2xl border-2 border-primary/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full" />
              <h3 className="text-xl font-display font-semibold mb-6">Package Limits</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {limits.map((limit, index) => (
                  <div key={index} className="text-center p-4 rounded-xl bg-background/50">
                    <div className="text-2xl font-bold gradient-text">{limit.value}</div>
                    <div className="text-sm text-muted-foreground">{limit.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Includes Previous */}
        <section className="container mx-auto px-4 mb-16">
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-xl font-display font-semibold mb-6 flex items-center gap-2">
              <Check className="w-5 h-5 text-primary" />
              Includes Everything in Basic + Standard + Advanced Packages
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {includedFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Premium Features */}
        <section className="container mx-auto px-4 mb-16">
          <h2 className="text-3xl font-display font-bold mb-4 text-center">Plus These Premium Upgrades</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            The complete package for brands ready to dominate their market
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {premiumFeatures.map((feature, index) => (
              <div key={index} className="glass-card p-6 rounded-2xl border border-primary/10 hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold">{feature.category}</h3>
                </div>
                <ul className="space-y-2">
                  {feature.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        
        {/* Best For Section */}
        <section className="container mx-auto px-4 mb-16">
          <div className="glass-card p-8 rounded-2xl max-w-3xl mx-auto text-center border-2 border-primary/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-br-full" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-primary/10 to-transparent rounded-tl-full" />
            <h3 className="text-2xl font-display font-bold mb-4 relative">This Package is Perfect For:</h3>
            <ul className="text-muted-foreground space-y-2 relative">
              <li>✔ Serious brands needing full-service solution</li>
              <li>✔ Stores with 50-100 products</li>
              <li>✔ Businesses wanting custom theme design</li>
              <li>✔ Brands ready for complete email automation</li>
              <li>✔ Businesses needing professional copywriting</li>
              <li>✔ Stores wanting high-converting funnels</li>
              <li>✔ Brands launching with ads & marketing</li>
            </ul>
          </div>
        </section>
        
        {/* CTA */}
        <section className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-display font-bold mb-4">Ready for the Complete Package?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Get everything you need to launch and grow a successful ecommerce brand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/onboarding">
                <Button variant="hero" size="lg">
                  Get Started Now
                </Button>
              </Link>
              <Link to="/pricing">
                <Button variant="outline" size="lg">
                  Compare Packages
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PackagePremium;
