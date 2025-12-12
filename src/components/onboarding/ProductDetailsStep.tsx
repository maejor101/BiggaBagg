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
import { Checkbox } from "@/components/ui/checkbox";

interface ProductDetailsData {
  productCount: string;
  hasVariants: boolean;
  hasInventory: boolean;
  productCategories: string;
  shippingRegions: string;
  paymentMethods: string[];
}

interface ProductDetailsStepProps {
  data: ProductDetailsData;
  onChange: (data: ProductDetailsData) => void;
}

const paymentOptions = [
  { id: "payfast", label: "PayFast" },
  { id: "paystack", label: "Paystack" },
  { id: "yoco", label: "Yoco" },
  { id: "stripe", label: "Stripe" },
  { id: "paypal", label: "PayPal" },
];

const ProductDetailsStep = ({ data, onChange }: ProductDetailsStepProps) => {
  const handleChange = (field: keyof ProductDetailsData, value: any) => {
    onChange({ ...data, [field]: value });
  };

  const togglePaymentMethod = (methodId: string) => {
    const current = data.paymentMethods || [];
    const updated = current.includes(methodId)
      ? current.filter((m) => m !== methodId)
      : [...current, methodId];
    handleChange("paymentMethods", updated);
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="font-display text-2xl font-semibold text-foreground mb-2">
          Your product catalog
        </h2>
        <p className="text-muted-foreground">
          Tell us about the products you'll be selling
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="productCount">Estimated Number of Products *</Label>
          <Select
            value={data.productCount}
            onValueChange={(value) => handleChange("productCount", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1-15">1-15 products</SelectItem>
              <SelectItem value="16-25">16-25 products</SelectItem>
              <SelectItem value="26-50">26-50 products</SelectItem>
              <SelectItem value="51-100">51-100 products</SelectItem>
              <SelectItem value="100+">100+ products</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="shippingRegions">Shipping Regions</Label>
          <Select
            value={data.shippingRegions}
            onValueChange={(value) => handleChange("shippingRegions", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select regions" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="local">Local only (same city)</SelectItem>
              <SelectItem value="national">National (South Africa)</SelectItem>
              <SelectItem value="africa">Africa-wide</SelectItem>
              <SelectItem value="international">International</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-4">
        <Label>Product Features</Label>
        <div className="flex flex-wrap gap-6">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="hasVariants"
              checked={data.hasVariants}
              onCheckedChange={(checked) => handleChange("hasVariants", !!checked)}
            />
            <Label htmlFor="hasVariants" className="cursor-pointer">
              Products have variants (sizes, colors, etc.)
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="hasInventory"
              checked={data.hasInventory}
              onCheckedChange={(checked) => handleChange("hasInventory", !!checked)}
            />
            <Label htmlFor="hasInventory" className="cursor-pointer">
              Need inventory tracking
            </Label>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="productCategories">Product Categories</Label>
        <Textarea
          id="productCategories"
          placeholder="List your main product categories (e.g., Dresses, Tops, Accessories...)"
          value={data.productCategories}
          onChange={(e) => handleChange("productCategories", e.target.value)}
        />
      </div>

      <div className="space-y-4">
        <Label>Preferred Payment Gateways</Label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {paymentOptions.map((option) => (
            <div key={option.id} className="flex items-center space-x-2">
              <Checkbox
                id={option.id}
                checked={data.paymentMethods?.includes(option.id)}
                onCheckedChange={() => togglePaymentMethod(option.id)}
              />
              <Label htmlFor={option.id} className="cursor-pointer">
                {option.label}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsStep;
