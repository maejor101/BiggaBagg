import { Link } from "react-router-dom";
import { Check, ArrowLeft, Zap, ShoppingBag, Palette, Globe, BarChart3, Mail, Star, Package, Layers, Target, Settings, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const includedFeatures = [
  "Everything in Basic Package",
  "Everything in Standard Package",
  "Up to 5 Pages",
  "Up to 25 Products",
  "Standard Branding",
  "4 Collections",
  "Email Notifications",
  "Reviews Integration",
  "Newsletter Setup",
  "Inventory Management",
  "Conversion Tools",
  "5 Apps Installed",
];

const advancedFeatures = [
  {
    category: "Pages & Products",
    icon: ShoppingBag,
    items: [
      "7-10 Custom Pages (Home, About, Contact, Shop, FAQ, Blog, Collections, Policies, Services)",
      "Up to 50 Products Added",
      "Up to 10 Collections Setup",
    ]
  },
  {
    category: "Advanced Branding",
    icon: Palette,
    items: [
      "Premium, Detailed Logo",
      "Full Brand Guideline Mini Kit",
      "Custom Color Palette",
      "Custom Icons",
      "Button & UI Design Style Guide",
    ]
  },
  {
    category: "Custom Sections",
    icon: Layers,
    items: [
      "Before/After Slider",
      "Comparison Tables",
      "Feature Highlights",
      "Custom Forms",
      "Image Grids",
      "Testimonials Slider",
    ]
  },
  {
    category: "Advanced SEO",
    icon: Target,
    items: [
      "Keyword Optimization",
      "Meta Tags + Structured Data",
      "Image Optimization",
      "URL Structure Improvements",
    ]
  },
  {
    category: "Email Marketing",
    icon: Mail,
    items: [
      "Welcome Flow (3-5 emails)",
      "List Segmentation",
      "Custom Email Design",
      "Klaviyo or Shopify Email Setup",
    ]
  },
  {
    category: "Pixel & Tracking",
    icon: BarChart3,
    items: [
      "Abandoned Cart Email",
      "Facebook Pixel",
      "Google Analytics",
      "TikTok Pixel",
      "Events Tracking",
    ]
  },
  {
    category: "Store Automations",
    icon: Settings,
    items: [
      "Order Status Updates",
      "Back-in-Stock Alerts",
      "Customer Win-Back Automation",
    ]
  },
  {
    category: "Advanced Conversions",
    icon: Zap,
    items: [
      "Carts Upsell",
      "Post-Purchase Upsells",
      "Frequently Bought Together",
      "Free Shipping Bar",
      "Upsell Drawer",
    ]
  },
  {
    category: "Apps & Support",
    icon: MessageSquare,
    items: [
      "Up to 10 Apps Installed (Reviews, Popups, Automation, Fulfilment, Upsells, Loyalty)",
      "3 Revisions",
      "15-Days Priority Support",
    ]
  },
];

const limits = [
  { label: "Pages", value: "7-10" },
  { label: "Products", value: "50" },
  { label: "Collections", value: "10" },
  { label: "Apps", value: "10" },
  { label: "Email Flows", value: "1" },
  { label: "Revisions", value: "3" },
  { label: "Support", value: "15 Days" },
];

const PackageAdvanced = () => {
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-400 text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                For Established Brands
              </div>
              
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Advanced Package
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                A complete, high-performance Shopify store with deeper branding, automation, advanced SEO, and professional-level features.
              </p>
              
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-5xl font-display font-bold gradient-text">R7,500</span>
                <span className="text-muted-foreground">once-off</span>
              </div>
              
              <Button variant="hero" size="lg" className="w-full sm:w-auto">
                Get Started
              </Button>
            </div>
            
            {/* Package Limits Card */}
            <div className="glass-card p-8 rounded-2xl border-2 border-orange-500/30">
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
        
        {/* Includes Previous */}
        <section className="container mx-auto px-4 mb-16">
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-xl font-display font-semibold mb-6 flex items-center gap-2">
              <Check className="w-5 h-5 text-primary" />
              Includes Everything in Basic + Standard Packages
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
        
        {/* Advanced Features */}
        <section className="container mx-auto px-4 mb-16">
          <h2 className="text-3xl font-display font-bold mb-4 text-center">Plus These Advanced Features</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Professional-level features for brands ready to scale
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advancedFeatures.map((feature, index) => (
              <div key={index} className="glass-card p-6 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-orange-400" />
                  </div>
                  <h3 className="font-display font-semibold">{feature.category}</h3>
                </div>
                <ul className="space-y-2">
                  {feature.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
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
          <div className="glass-card p-8 rounded-2xl max-w-3xl mx-auto text-center border-2 border-orange-500/30">
            <h3 className="text-2xl font-display font-bold mb-4">This Package is Perfect For:</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>✔ Established brands scaling operations</li>
              <li>✔ Stores with up to 50 products</li>
              <li>✔ Businesses needing advanced branding</li>
              <li>✔ Brands wanting email marketing automation</li>
              <li>✔ Stores requiring custom Shopify sections</li>
              <li>✔ Businesses focused on conversions & upsells</li>
            </ul>
          </div>
        </section>
        
        {/* CTA */}
        <section className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-display font-bold mb-4">Ready to Scale Your Brand?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Get a complete, high-performance store built for growth.
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

export default PackageAdvanced;
