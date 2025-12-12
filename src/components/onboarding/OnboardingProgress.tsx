import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface OnboardingProgressProps {
  currentStep: number;
  steps: string[];
}

const OnboardingProgress = ({ currentStep, steps }: OnboardingProgressProps) => {
  return (
    <div className="flex items-center justify-center gap-2 mb-8">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center">
          <div className="flex flex-col items-center">
            <div
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all",
                index < currentStep
                  ? "bg-primary text-primary-foreground"
                  : index === currentStep
                  ? "bg-primary/20 border-2 border-primary text-primary"
                  : "bg-muted text-muted-foreground"
              )}
            >
              {index < currentStep ? (
                <Check className="w-5 h-5" />
              ) : (
                index + 1
              )}
            </div>
            <span
              className={cn(
                "text-xs mt-2 hidden sm:block",
                index <= currentStep ? "text-foreground" : "text-muted-foreground"
              )}
            >
              {step}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div
              className={cn(
                "w-12 h-0.5 mx-2",
                index < currentStep ? "bg-primary" : "bg-muted"
              )}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default OnboardingProgress;
