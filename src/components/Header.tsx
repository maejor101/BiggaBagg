import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-display text-xl font-semibold text-foreground">
            Bigga Bagg
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            Services
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            Portfolio
          </a>
          <Link to="/pricing" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            Pricing
          </Link>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            About Us
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm">
            Login
          </Button>
          <Button variant="hero" size="sm">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
