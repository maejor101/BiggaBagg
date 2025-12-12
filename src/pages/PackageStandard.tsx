import { Link } from "react-router-dom";
import { Check, ArrowLeft, TrendingUp, ShoppingBag, Palette, Globe, BarChart3, Mail, Star, Package, Bell, Shield, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const basicFeatures = [
  "1 Premium Landing Page",
  "Up to 3-5 Shopify Pages",
  "10-15 Products Added",
  "Payment Gateway Setup",
  "Basic Store Branding",
  "Custom Banner Design (1-2)",
  "Mobile Responsive Design",
  "Basic SEO Setup",
  "Shipping & Domain Setup",
  "1-2 Basic Apps",
  "Analytics & Pixel Setup",
  "Social Media Integration",
];

const standardFeatures = [
  {
    category: "Pages & Products",
    icon: ShoppingBag,
    items: [
      "Up to 5 Shopify Pages (Home, About, Contact, Shop, FAQ, Policies)",
      "Up to 25 Products Added",
      "Up to 4 Collections Setup",
    ]
  },
  {
    category: "Enhanced Branding",
    icon: Palette,
    items: [
      "Upgraded Logo Design",
      "2-3 Custom Homepage Banners",
      "Hero Slider Designs",
    ]
  },
  {
    category: "Email & Marketing",
    icon: Mail,
    items: [
      "Newsletter Subscription Setup (Klaviyo OR Shopify Email)",
      "Popup Signup Form",
      "Footer Signup Form",
      "Email List Setup",
    ]
  },
  {
    category: "Reviews & Trust",
    icon: Star,
    items: [
      "Product Reviews Integration (Judge.me / Loox)",
      "Trust Badges Installation",
      "Social Proof Elements",
    ]
  },
  {
    category: "Inventory Management",
    icon: Package,
    items: [
      "Stock Tracking Setup",
      "Product Variants (sizes, colors)",
      "SKU System Configuration",
      "Low-Stock Alerts",
    ]
  },
  {
    category: "Notifications",
    icon: Bell,
    items: [
      "Order Confirmation Emails",
      "Shipping Notifications",
      "Customer Welcome Emails",
    ]
  },
  {
    category: "Conversion Tools",
    icon: TrendingUp,
    items: [
      "Countdown Timers",
      "Sticky Add-to-Cart Bar",
      "Low Stock Popup",
      "Trust Badges",
    ]
  },
  {
    category: "Support & Apps",
    icon: MessageSquare,
    items: [
      "Up to 5 Apps Installed",
      "Helpdesk Setup",
      "Contact Forms",
      "Auto-Reply Messages",
      "2 Revisions",
      "7-Days Priority Support",
    ]
  },
];

const limits = [
  { label: "Pages", value: "5" },
  { label: "Products", value: "25" },
  { label: "Collections", value: "4" },
  { label: "Apps", value: "5" },
  { label: "Banners", value: "2-3" },
  { label: "Revisions", value: "2" },
  { label: "Support", value: "7 Days" },
];

const PackageStandard = () => {
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-400 text-sm font-medium mb-6">
                <TrendingUp className="w-4 h-4" />
                Most Popular
              </div>
              
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Standard Package
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                A powerful Shopify setup for growing brands that need more functionality, more products, better branding, and stronger optimization.
              </p>
              
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-5xl font-display font-bold gradient-text">R4,500</span>
                <span className="text-muted-foreground">once-off</span>
              </div>
              
              <Button variant="hero" size="lg" className="w-full sm:w-auto">
                Get Started
              </Button>
            </div>
            
            {/* Package Limits Card */}
            <div className="glass-card p-8 rounded-2xl border-2 border-green-500/30">
              <h3 className="text-xl font-display font-semibold mb-6">Package Limits</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
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
        
        {/* Includes Basic */}
        <section className="container mx-auto px-4 mb-16">
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-xl font-display font-semibold mb-6 flex items-center gap-2">
              <Check className="w-5 h-5 text-primary" />
              Includes Everything in Basic Package
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {basicFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Standard Features */}
        <section className="container mx-auto px-4 mb-16">
          <h2 className="text-3xl font-display font-bold mb-4 text-center">Plus These Upgrades</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Everything in Basic, plus powerful features for growing brands
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {standardFeatures.map((feature, index) => (
              <div key={index} className="glass-card p-6 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-green-400" />
                  </div>
                  <h3 className="font-display font-semibold text-sm">{feature.category}</h3>
                </div>
                <ul className="space-y-2">
                  {feature.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
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
          <div className="glass-card p-8 rounded-2xl max-w-3xl mx-auto text-center border-2 border-green-500/30">
            <h3 className="text-2xl font-display font-bold mb-4">This Package is Perfect For:</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>✔ Growing brands that need more features</li>
              <li>✔ Businesses with up to 25 products</li>
              <li>✔ Stores needing email marketing setup</li>
              <li>✔ Brands wanting product reviews & trust elements</li>
              <li>✔ Businesses ready for inventory management</li>
            </ul>
          </div>
        </section>
        
        {/* CTA */}
        <section className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-display font-bold mb-4">Ready to Grow Your Store?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Get a powerful, feature-rich Shopify store designed for growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Get Started Now
              </Button>
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

export default PackageStandard;
