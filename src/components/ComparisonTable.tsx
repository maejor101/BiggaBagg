import { Check, Minus } from "lucide-react";

interface Feature {
  name: string;
  basic: string | boolean;
  standard: string | boolean;
  advanced: string | boolean;
  premium: string | boolean;
}

const features: Feature[] = [
  { name: "Shopify Pages", basic: "3-5", standard: "Up to 5", advanced: "7-10", premium: "7-10+" },
  { name: "Products Added", basic: "10-15", standard: "25", advanced: "50", premium: "50-100" },
  { name: "Apps Installed", basic: "1-2", standard: "Up to 5", advanced: "Up to 10", premium: "10+" },
  { name: "Revisions", basic: "1", standard: "2", advanced: "3", premium: "Unlimited" },
  { name: "Support Duration", basic: "2 Days", standard: "7 Days", advanced: "15 Days", premium: "30 Days VIP" },
  { name: "Basic Branding", basic: true, standard: true, advanced: true, premium: true },
  { name: "Advanced Branding Kit", basic: false, standard: false, advanced: true, premium: true },
  { name: "Full Brand Identity", basic: false, standard: false, advanced: false, premium: true },
  { name: "Basic SEO", basic: true, standard: true, advanced: true, premium: true },
  { name: "Advanced SEO", basic: false, standard: false, advanced: true, premium: true },
  { name: "Payment Gateway Setup", basic: true, standard: true, advanced: true, premium: true },
  { name: "Inventory Management", basic: false, standard: true, advanced: true, premium: true },
  { name: "Reviews Integration", basic: false, standard: true, advanced: true, premium: true },
  { name: "Email Notifications", basic: false, standard: true, advanced: true, premium: true },
  { name: "Email Marketing Setup", basic: false, standard: false, advanced: "Welcome Flow", premium: "Full System" },
  { name: "Custom Shopify Sections", basic: false, standard: false, advanced: true, premium: true },
  { name: "Store Automations", basic: false, standard: false, advanced: true, premium: true },
  { name: "Conversion Tools", basic: false, standard: true, advanced: true, premium: true },
  { name: "High-Converting Funnel", basic: false, standard: false, advanced: false, premium: true },
  { name: "Professional Copywriting", basic: false, standard: false, advanced: false, premium: "5-7 Pages" },
  { name: "Ads Setup (Technical)", basic: false, standard: false, advanced: false, premium: true },
  { name: "Loyalty & Rewards", basic: false, standard: false, advanced: false, premium: true },
  { name: "Theme Revamp/Custom", basic: false, standard: false, advanced: false, premium: true },
];

const ComparisonTable = () => {
  const renderValue = (value: string | boolean) => {
    if (typeof value === "boolean") {
      return value ? (
        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
          <Check className="w-3 h-3 text-primary" />
        </div>
      ) : (
        <Minus className="w-4 h-4 text-muted-foreground/50 mx-auto" />
      );
    }
    return <span className="text-sm text-foreground">{value}</span>;
  };

  return (
    <div className="glass-card rounded-2xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left p-4 font-display text-lg font-semibold text-foreground">
                Feature
              </th>
              <th className="text-center p-4 font-semibold text-foreground min-w-[120px]">
                <span className="text-xs tracking-wider text-muted-foreground block mb-1">STARTER</span>
                Basic
              </th>
              <th className="text-center p-4 font-semibold text-foreground min-w-[120px]">
                <span className="text-xs tracking-wider text-muted-foreground block mb-1">GROWTH</span>
                Standard
              </th>
              <th className="text-center p-4 font-semibold text-foreground min-w-[120px]">
                <span className="text-xs tracking-wider text-muted-foreground block mb-1">SCALING</span>
                Advanced
              </th>
              <th className="text-center p-4 min-w-[120px] bg-primary/10">
                <span className="text-xs tracking-wider text-primary block mb-1">ENTERPRISE</span>
                <span className="font-semibold gradient-text">Premium</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr key={index} className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
                <td className="p-4 text-sm text-foreground">{feature.name}</td>
                <td className="p-4 text-center">{renderValue(feature.basic)}</td>
                <td className="p-4 text-center">{renderValue(feature.standard)}</td>
                <td className="p-4 text-center">{renderValue(feature.advanced)}</td>
                <td className="p-4 text-center bg-primary/5">{renderValue(feature.premium)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComparisonTable;
