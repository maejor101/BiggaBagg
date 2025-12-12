import { Link } from "react-router-dom";
import { Check, ArrowLeft, Sparkles, ShoppingBag, Palette, Globe, BarChart3, Smartphone, Search, CreditCard, Package, Image, Share2, Clock, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const features = [
  {
    category: "Pages & Products",
    icon: ShoppingBag,
    items: [
      "1 Premium Landing Page (clean, modern, high converting)",
      "Up to 3-5 Shopify Pages (Home, About, Contact OR your choice)",
      "10-15 Products Added",
    ]
  },
  {
    category: "Branding & Design",
    icon: Palette,
    items: [
      "Basic Store Branding (simple logo, colours, fonts)",
      "Custom Banner Design (1-2 homepage banners)",
      "Mobile Responsive Design",
    ]
  },
  {
    category: "Technical Setup",
    icon: Globe,
    items: [
      "Payment Gateway Setup (PayFast, Paystack, Yoco)",
      "Shipping Setup",
      "Domain Connection",
      "1-2 Basic Apps Installed",
    ]
  },
  {
    category: "SEO & Analytics",
    icon: BarChart3,
    items: [
      "Basic SEO Setup (titles, descriptions, image alt text)",
      "Analytics Setup (Google Analytics)",
      "Facebook Pixel Integration",
      "TikTok Pixel (if needed)",
    ]
  },
  {
    category: "Social Media",
    icon: Share2,
    items: [
      "Instagram Integration",
      "Facebook Integration",
      "Social sharing buttons",
    ]
  },
  {
    category: "Support",
    icon: MessageSquare,
    items: [
      "1 Revision",
      "2-Days Support After Launch",
    ]
  },
];

const limits = [
  { label: "Pages", value: "3-5" },
  { label: "Products", value: "10-15" },
  { label: "Apps", value: "1-2" },
  { label: "Banners", value: "1-2" },
  { label: "Revisions", value: "1" },
  { label: "Support", value: "2 Days" },
];

const PackageBasic = () => {
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Perfect for Startups
              </div>
              
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Basic Package
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                A clean, simple, ready-to-sell Shopify store for new businesses that want to launch quickly and professionally.
              </p>
              
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-5xl font-display font-bold gradient-text">R2,000</span>
                <span className="text-muted-foreground">once-off</span>
              </div>
              
              <Link to="/onboarding">
                <Button variant="hero" size="lg" className="w-full sm:w-auto">
                  Get Started
                </Button>
              </Link>
            </div>
            
            {/* Package Limits Card */}
            <div className="glass-card p-8 rounded-2xl">
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
        
        {/* What's Included */}
        <section className="container mx-auto px-4 mb-16">
          <h2 className="text-3xl font-display font-bold mb-12 text-center">What's Included</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="glass-card p-6 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold">{feature.category}</h3>
                </div>
                <ul className="space-y-3">
                  {feature.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
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
          <div className="glass-card p-8 rounded-2xl max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-display font-bold mb-4">This Package is Perfect For:</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>✔ New businesses that want a clean, simple Shopify setup</li>
              <li>✔ Startups with 10-15 products to sell</li>
              <li>✔ Entrepreneurs who need to launch quickly</li>
              <li>✔ Small businesses on a budget</li>
            </ul>
          </div>
        </section>
        
        {/* CTA */}
        <section className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-display font-bold mb-4">Ready to Launch Your Store?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Get your professional Shopify store up and running in no time.
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

export default PackageBasic;
