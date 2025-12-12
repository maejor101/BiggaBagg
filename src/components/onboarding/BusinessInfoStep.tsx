import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface BusinessInfoData {
  businessName: string;
  businessType: string;
  industry: string;
  description: string;
  website: string;
  email: string;
  phone: string;
}

interface BusinessInfoStepProps {
  data: BusinessInfoData;
  onChange: (data: BusinessInfoData) => void;
}

const BusinessInfoStep = ({ data, onChange }: BusinessInfoStepProps) => {
  const handleChange = (field: keyof BusinessInfoData, value: string) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="font-display text-2xl font-semibold text-foreground mb-2">
          Tell us about your business
        </h2>
        <p className="text-muted-foreground">
          Help us understand your brand so we can build the perfect store
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="businessName">Business Name *</Label>
          <Input
            id="businessName"
            placeholder="Your Brand Name"
            value={data.businessName}
            onChange={(e) => handleChange("businessName", e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="businessType">Business Type *</Label>
          <Select
            value={data.businessType}
            onValueChange={(value) => handleChange("businessType", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="new">New Business (Startup)</SelectItem>
              <SelectItem value="existing">Existing Business</SelectItem>
              <SelectItem value="rebranding">Rebranding</SelectItem>
              <SelectItem value="expansion">Business Expansion</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="industry">Industry *</Label>
          <Select
            value={data.industry}
            onValueChange={(value) => handleChange("industry", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select industry" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="fashion">Fashion & Apparel</SelectItem>
              <SelectItem value="beauty">Beauty & Cosmetics</SelectItem>
              <SelectItem value="electronics">Electronics</SelectItem>
              <SelectItem value="home">Home & Living</SelectItem>
              <SelectItem value="food">Food & Beverages</SelectItem>
              <SelectItem value="health">Health & Wellness</SelectItem>
              <SelectItem value="sports">Sports & Fitness</SelectItem>
              <SelectItem value="toys">Toys & Games</SelectItem>
              <SelectItem value="jewelry">Jewelry & Accessories</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="website">Current Website (if any)</Label>
          <Input
            id="website"
            placeholder="https://example.com"
            value={data.website}
            onChange={(e) => handleChange("website", e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@biggabagg.com"
            value={data.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            placeholder="+27 73 342 7383"
            value={data.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Business Description *</Label>
        <Textarea
          id="description"
          placeholder="Tell us about your business, what you sell, and your goals..."
          className="min-h-[120px]"
          value={data.description}
          onChange={(e) => handleChange("description", e.target.value)}
        />
      </div>
    </div>
  );
};

export default BusinessInfoStep;
