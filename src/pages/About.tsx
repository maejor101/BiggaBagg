import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PartnersCarousel from "@/components/PartnersCarousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Sparkles, 
  Target, 
  Users, 
  Award, 
  Zap, 
  Heart, 
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Globe,
  Shield,
  Lightbulb
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for perfection in every store we build, ensuring your business stands out from the competition."
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We work closely with our clients, treating your success as our own and building lasting relationships."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We stay ahead of e-commerce trends, implementing cutting-edge solutions for modern businesses."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "We're passionate about helping entrepreneurs and businesses succeed in the digital marketplace."
    }
  ];

  const team = [
    {
      name: "S. Godwana",
      role: "Sales Executive",
      company: "Dijonova Technologies",
      description: "Responsible for driving business growth by identifying new sales opportunities, building relationships and closing deals.",
      image: "/assets/team1.png"
    },
    {
      name: "K. Mabasa",
      role: "Digital Business Consultant",
      company: "Bigga Bagg",
      description: "A digital business consultant specialising in Shopify store setup and online business systems, helping entrepreneurs launch professional e-commerce stores with clarity and confidence.",
      image: "/assets/team2.png"
    },
    {
      name: "V. Tswai",
      role: "Technical Lead",
      company: "Dijonova Technologies",
      description: "Experienced developer specializing in e-commerce solutions and system integrations, ensuring seamless technical execution.",
      image: "/assets/team3.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-muted/20">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 px-6">
          <div className="container mx-auto text-center">
            <Badge className="mb-6" variant="secondary">
              About Bigga Bagg
            </Badge>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
              Building{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Digital Success
              </span>{" "}
              Stories
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              We're a team of passionate e-commerce experts dedicated to transforming businesses 
              through beautiful, high-converting online stores. Your success is our mission.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground">
                From humble beginnings to becoming a leading e-commerce agency
              </p>
            </div>
            
            <div className="space-y-8">
              <Card>
                <CardContent className="p-8">
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    Founded in 2019, Bigga Bagg started with a simple mission: to help small and medium businesses 
                    thrive in the digital marketplace. We saw too many great products and services struggling to 
                    find their audience online due to poor e-commerce experiences.
                  </p>
                  
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    What began as a two-person team working from a small office has grown into a full-service 
                    e-commerce agency with over 50 specialists. We've helped hundreds of businesses transform 
                    their online presence and achieve remarkable growth.
                  </p>
                  
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Today, we're proud to be trusted partners with major e-commerce platforms and continue 
                    to innovate in the space, always putting our clients' success first.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-6 bg-muted/30">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Our Values
              </h2>
              <p className="text-lg text-muted-foreground">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Meet Our Strategic Alliance
              </h2>
              <p className="text-lg text-muted-foreground">
                The talented people behind your success
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {team.map((member, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader>
                    <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-center">{member.name}</CardTitle>
                    <CardDescription className="text-center font-medium text-primary">
                      {member.role}
                    </CardDescription>
                    <div className="text-center mt-2">
                      <span className="text-sm font-semibold text-accent">{member.company}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground text-center">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto text-center">
            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-12">
                <div className="mb-6">
                  <Sparkles className="w-16 h-16 text-primary mx-auto mb-4" />
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                  Ready to Start Your Success Story?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Join hundreds of satisfied clients who have transformed their businesses with our 
                  e-commerce solutions. Let's build something amazing together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button size="lg" className="w-full sm:w-auto">
                      Get Started Today
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

export default About;