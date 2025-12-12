import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface PackageSelectionData {
  selectedPackage: string;
}

interface PackageSelectionStepProps {
  data: PackageSelectionData;
  onChange: (data: PackageSelectionData) => void;
}

const packages = [
  {
    id: "basic",
    name: "Basic",
    price: "R2,000",
    description: "Perfect for startups",
    features: [
      "3-5 Shopify pages",
      "10-15 products uploaded",
      "Basic branding",
      "Payment gateway setup",
      "Mobile responsive",
      "2-day support",
    ],
  },
  {
    id: "standard",
    name: "Standard",
    price: "R4,500",
    popular: true,
    description: "For growing brands",
    features: [
      "Everything in Basic +",
      "Up to 25 products",
      "Collections setup",
      "Email notifications",
      "Product reviews",
      "7-day priority support",
    ],
  },
  {
    id: "advanced",
    name: "Advanced",
    price: "R7,500",
    description: "For established brands",
    features: [
      "Everything in Standard +",
      "7-10 custom pages",
      "Up to 50 products",
      "Email marketing setup",
      "Advanced SEO",
      "15-day priority support",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    price: "R12,000",
    description: "Full service package",
    features: [
      "Everything in Advanced +",
      "50-100 products",
      "Full brand identity",
      "Funnel setup",
      "Ads setup",
      "30-day VIP support",
    ],
  },
];

const PackageSelectionStep = ({ data, onChange }: PackageSelectionStepProps) => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="font-display text-2xl font-semibold text-foreground mb-2">
          Choose your package
        </h2>
        <p className="text-muted-foreground">
          Select the package that best fits your needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {packages.map((pkg) => (
          <button
            key={pkg.id}
            type="button"
            onClick={() => onChange({ selectedPackage: pkg.id })}
            className={cn(
              "relative p-6 rounded-2xl border-2 text-left transition-all",
              data.selectedPackage === pkg.id
                ? "border-primary bg-primary/10"
                : "border-border hover:border-primary/50",
              pkg.popular && "ring-2 ring-primary/30"
            )}
          >
            {pkg.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                Most Popular
              </span>
            )}
            
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-display text-xl font-semibold">{pkg.name}</h3>
                <p className="text-sm text-muted-foreground">{pkg.description}</p>
              </div>
              <div className={cn(
                "w-6 h-6 rounded-full border-2 flex items-center justify-center",
                data.selectedPackage === pkg.id
                  ? "border-primary bg-primary"
                  : "border-muted-foreground"
              )}>
                {data.selectedPackage === pkg.id && (
                  <Check className="w-4 h-4 text-primary-foreground" />
                )}
              </div>
            </div>

            <div className="font-display text-3xl font-bold text-primary mb-4">
              {pkg.price}
            </div>

            <ul className="space-y-2">
              {pkg.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PackageSelectionStep;
