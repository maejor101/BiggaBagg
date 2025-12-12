import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Star } from "lucide-react";

interface PackageCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  tier: string;
  slug?: string;
}

const PackageCard = ({ name, price, description, features, popular = false, tier, slug }: PackageCardProps) => {
  const packageLink = slug ? `/packages/${slug}` : "#";
  
  return (
    <div 
      className={`
        relative rounded-2xl p-6 transition-all duration-300 hover:translate-y-[-4px]
        ${popular 
          ? 'bg-gradient-to-br from-primary/20 to-accent/10 border-2 border-primary/50 shadow-lg shadow-primary/20' 
          : 'glass-card'
        }
      `}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-xs font-semibold text-primary-foreground">
            <Star className="w-3 h-3" />
            Most Popular
          </span>
        </div>
      )}

      <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-2">
        {tier}
      </p>
      
      <h3 className="font-display text-2xl font-bold text-foreground mb-2">
        {name}
      </h3>
      
      <div className="flex items-baseline gap-1 mb-3">
        <span className="font-display text-4xl font-bold text-foreground">{price}</span>
      </div>
      
      <p className="text-sm text-muted-foreground mb-6 min-h-[48px]">
        {description}
      </p>

      <div className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-2">
            <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${popular ? 'bg-primary/30' : 'bg-primary/20'}`}>
              <Check className="w-3 h-3 text-primary" />
            </div>
            <span className="text-sm text-foreground">{feature}</span>
          </div>
        ))}
      </div>

      <Link to={packageLink}>
        <Button 
          variant={popular ? "hero" : "outline"} 
          size="lg" 
          className="w-full"
        >
          View Details
          <ArrowRight className="w-4 h-4" />
        </Button>
      </Link>
    </div>
  );
};

export default PackageCard;
