import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PartnersCarousel from "@/components/PartnersCarousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ExternalLink, 
  Calendar, 
  Tag, 
  ArrowRight,
  Globe,
  Smartphone,
  ShoppingBag,
  Palette,
  TrendingUp
} from "lucide-react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Fashion Forward E-commerce",
      category: "E-commerce",
      description: "Complete Shopify store for premium fashion brand with custom theme and advanced features.",
      image: "/placeholder-project-1.jpg",
      tags: ["Shopify", "Custom Theme", "Fashion"],
      date: "2024",
      link: "#"
    },
    {
      id: 2,
      title: "Tech Startup Platform",
      category: "B2B",
      description: "Modern e-commerce platform for tech products with custom integrations and analytics.",
      image: "/placeholder-project-2.jpg",
      tags: ["E-commerce", "Analytics", "Tech"],
      date: "2024",
      link: "#"
    },
    {
      id: 3,
      title: "Artisan Marketplace",
      category: "Marketplace",
      description: "Multi-vendor platform connecting artisans with customers worldwide.",
      image: "/placeholder-project-3.jpg",
      tags: ["Multi-vendor", "Marketplace", "Artisan"],
      date: "2024",
      link: "#"
    },
    {
      id: 4,
      title: "Fitness Brand Store",
      category: "Health & Fitness",
      description: "High-converting store for fitness equipment and supplements.",
      image: "/placeholder-project-4.jpg",
      tags: ["Fitness", "Health", "Supplements"],
      date: "2024",
      link: "#"
    },
    {
      id: 5,
      title: "Luxury Jewelry Store",
      category: "Luxury",
      description: "Elegant e-commerce experience for high-end jewelry and accessories.",
      image: "/placeholder-project-5.jpg",
      tags: ["Luxury", "Jewelry", "Premium"],
      date: "2024",
      link: "#"
    },
    {
      id: 6,
      title: "Home Decor Boutique",
      category: "Home & Garden",
      description: "Stylish online store for modern home decor and furniture.",
      image: "/placeholder-project-6.jpg",
      tags: ["Home Decor", "Furniture", "Interior"],
      date: "2024",
      link: "#"
    }
  ];

  const categories = [
    "All",
    "E-commerce",
    "B2B",
    "Marketplace",
    "Health & Fitness",
    "Luxury",
    "Home & Garden"
  ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "2.5M+", label: "Revenue Generated" },
    { number: "35+", label: "Industries Served" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-muted/20">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 px-6">
          <div className="container mx-auto text-center">
            <Badge className="mb-6" variant="secondary">
              Our Work
            </Badge>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Portfolio
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Discover the success stories we've built for businesses across various industries. 
              From startup launches to enterprise transformations, see how we turn visions into 
              high-converting e-commerce experiences.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-6 bg-muted/30">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Filter Categories */}
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category, index) => (
                <Button 
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  size="sm"
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="px-6 pb-20">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Card key={project.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <ShoppingBag className="w-12 h-12 text-primary/50" />
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <Button size="sm" variant="secondary">
                        View Project
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs">
                        {project.category}
                      </Badge>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3 mr-1" />
                        {project.date}
                      </div>
                    </div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="line-clamp-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="ghost" size="sm" className="w-full group">
                      View Case Study
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-muted/30">
          <div className="container mx-auto text-center">
            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-12">
                <div className="mb-6">
                  <TrendingUp className="w-16 h-16 text-primary mx-auto mb-4" />
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                  Ready to Be Our Next Success Story?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Join the growing list of businesses that have transformed their online presence 
                  with our e-commerce solutions. Let's create something amazing together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button size="lg" className="w-full sm:w-auto">
                      Start Your Project
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                  <Link to="/pricing">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto">
                      View Our Packages
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <PartnersCarousel />
      <Footer />
    </div>
  );
};

export default Portfolio;