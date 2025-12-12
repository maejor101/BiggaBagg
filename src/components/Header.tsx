import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/assets/Bigga bagg.co.svg" 
            alt="Bigga Bagg" 
            className="w-auto"
            style={{ 
              height: '200px',
              filter: 'brightness(0) invert(1)'
            }}
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link to="/portfolio" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            Portfolio
          </Link>
          <Link to="/pricing" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            Pricing
          </Link>
          <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            About Us
          </Link>
          <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/onboarding">
            <Button variant="hero" size="sm">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
