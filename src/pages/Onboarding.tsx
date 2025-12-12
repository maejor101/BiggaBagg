import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OnboardingProgress from "@/components/onboarding/OnboardingProgress";
import BusinessInfoStep from "@/components/onboarding/BusinessInfoStep";
import BrandingStep from "@/components/onboarding/BrandingStep";
import ProductDetailsStep from "@/components/onboarding/ProductDetailsStep";
import PackageSelectionStep from "@/components/onboarding/PackageSelectionStep";

const steps = ["Business", "Branding", "Products", "Package"];

const Onboarding = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(0);

  const [businessInfo, setBusinessInfo] = useState({
    businessName: "",
    businessType: "",
    industry: "",
    description: "",
    website: "",
    email: "",
    phone: "",
  });

  const [branding, setBranding] = useState({
    hasLogo: "",
    colorPreference: "",
    stylePreference: "",
    inspirationLinks: "",
    brandValues: "",
  });

  const [productDetails, setProductDetails] = useState({
    productCount: "",
    hasVariants: false,
    hasInventory: false,
    productCategories: "",
    shippingRegions: "",
    paymentMethods: [] as string[],
  });

  const [packageSelection, setPackageSelection] = useState({
    selectedPackage: "",
  });

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSubmit = () => {
    // For now, just show a toast and navigate
    toast({
      title: "Onboarding Complete!",
      description: "We'll be in touch soon to get started on your project.",
    });
    navigate("/");
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <BusinessInfoStep data={businessInfo} onChange={setBusinessInfo} />;
      case 1:
        return <BrandingStep data={branding} onChange={setBranding} />;
      case 2:
        return <ProductDetailsStep data={productDetails} onChange={setProductDetails} />;
      case 3:
        return <PackageSelectionStep data={packageSelection} onChange={setPackageSelection} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Start Your Project</span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Let's build your dream store
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Complete this quick onboarding to help us understand your needs and create the perfect Shopify store for your business.
            </p>
          </div>

          {/* Progress */}
          <OnboardingProgress currentStep={currentStep} steps={steps} />

          {/* Form Card */}
          <div className="bg-card border border-border rounded-2xl p-6 md:p-10">
            {renderStep()}

            {/* Navigation */}
            <div className="flex justify-between mt-10 pt-6 border-t border-border">
              <Button
                variant="ghost"
                onClick={handleBack}
                disabled={currentStep === 0}
                className="gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>

              {currentStep === steps.length - 1 ? (
                <Button
                  variant="hero"
                  onClick={handleSubmit}
                  disabled={!packageSelection.selectedPackage}
                  className="gap-2"
                >
                  Submit
                  <Sparkles className="w-4 h-4" />
                </Button>
              ) : (
                <Button
                  variant="hero"
                  onClick={handleNext}
                  className="gap-2"
                >
                  Continue
                  <ArrowRight className="w-4 h-4" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Onboarding;
