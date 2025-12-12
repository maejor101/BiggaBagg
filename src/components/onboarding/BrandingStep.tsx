import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface BrandingData {
  hasLogo: string;
  colorPreference: string;
  stylePreference: string;
  inspirationLinks: string;
  brandValues: string;
}

interface BrandingStepProps {
  data: BrandingData;
  onChange: (data: BrandingData) => void;
}

const colorOptions = [
  { value: "warm", label: "Warm", colors: ["#FF6B6B", "#FFA07A", "#FFD93D"] },
  { value: "cool", label: "Cool", colors: ["#6B5B95", "#88B7D5", "#3EB489"] },
  { value: "neutral", label: "Neutral", colors: ["#2C3E50", "#95A5A6", "#ECF0F1"] },
  { value: "bold", label: "Bold", colors: ["#E91E63", "#9C27B0", "#FF5722"] },
  { value: "pastel", label: "Pastel", colors: ["#FFB6C1", "#B5EAD7", "#C3B1E1"] },
];

const styleOptions = [
  { value: "minimal", label: "Minimal & Clean", description: "Simple, lots of white space" },
  { value: "modern", label: "Modern & Sleek", description: "Contemporary, professional" },
  { value: "playful", label: "Playful & Fun", description: "Colorful, energetic" },
  { value: "luxury", label: "Luxury & Elegant", description: "Premium, sophisticated" },
  { value: "bold", label: "Bold & Edgy", description: "Strong typography, high contrast" },
];

const BrandingStep = ({ data, onChange }: BrandingStepProps) => {
  const handleChange = (field: keyof BrandingData, value: string) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="font-display text-2xl font-semibold text-foreground mb-2">
          Define your brand style
        </h2>
        <p className="text-muted-foreground">
          Let's capture the look and feel of your brand
        </p>
      </div>

      <div className="space-y-4">
        <Label>Do you have an existing logo?</Label>
        <RadioGroup
          value={data.hasLogo}
          onValueChange={(value) => handleChange("hasLogo", value)}
          className="flex gap-4"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="yes" id="logo-yes" />
            <Label htmlFor="logo-yes" className="cursor-pointer">Yes, I have a logo</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id="logo-no" />
            <Label htmlFor="logo-no" className="cursor-pointer">No, I need one designed</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="refresh" id="logo-refresh" />
            <Label htmlFor="logo-refresh" className="cursor-pointer">Need a refresh</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-4">
        <Label>Color Palette Preference</Label>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {colorOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => handleChange("colorPreference", option.value)}
              className={`p-4 rounded-xl border-2 transition-all ${
                data.colorPreference === option.value
                  ? "border-primary bg-primary/10"
                  : "border-border hover:border-primary/50"
              }`}
            >
              <div className="flex gap-1 mb-2">
                {option.colors.map((color) => (
                  <div
                    key={color}
                    className="w-6 h-6 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              <span className="text-sm font-medium">{option.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <Label>Design Style</Label>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {styleOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => handleChange("stylePreference", option.value)}
              className={`p-4 rounded-xl border-2 text-left transition-all ${
                data.stylePreference === option.value
                  ? "border-primary bg-primary/10"
                  : "border-border hover:border-primary/50"
              }`}
            >
              <span className="font-medium block mb-1">{option.label}</span>
              <span className="text-sm text-muted-foreground">{option.description}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="inspirationLinks">Inspiration Links (optional)</Label>
        <Textarea
          id="inspirationLinks"
          placeholder="Share links to stores or websites you love..."
          value={data.inspirationLinks}
          onChange={(e) => handleChange("inspirationLinks", e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="brandValues">Brand Values & Keywords</Label>
        <Input
          id="brandValues"
          placeholder="e.g., sustainable, premium, fun, innovative..."
          value={data.brandValues}
          onChange={(e) => handleChange("brandValues", e.target.value)}
        />
      </div>
    </div>
  );
};

export default BrandingStep;
