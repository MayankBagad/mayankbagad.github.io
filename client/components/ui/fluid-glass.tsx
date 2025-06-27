import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FluidGlassProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "intense" | "subtle";
  interactive?: boolean;
  rounded?: "sm" | "md" | "lg" | "xl" | "full";
}

const FluidGlass: React.FC<FluidGlassProps> = ({
  children,
  className,
  variant = "default",
  interactive = false,
  rounded = "lg",
}) => {
  const variants = {
    default: "bg-black/20 border-white/8",
    intense: "bg-black/25 border-white/12",
    subtle: "bg-black/15 border-white/6",
  };

  const roundedClasses = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
  };

  return (
    <div
      className={cn(
        // Base glass styling
        "backdrop-blur-xl backdrop-saturate-150",
        "border shadow-lg",
        "transition-all duration-300 ease-out",

        // Variant styling
        variants[variant],

        // Rounded corners
        roundedClasses[rounded],

        // Interactive effects
        interactive && [
          "hover:bg-black/60 hover:border-white/20",
          "hover:shadow-xl hover:shadow-white/5",
          "hover:-translate-y-0.5",
          "active:scale-[0.98]",
        ],

        // Additional effects
        "before:absolute before:inset-0 before:rounded-[inherit]",
        "before:bg-gradient-to-br before:from-white/10 before:to-transparent",
        "before:opacity-50 before:pointer-events-none",
        "relative overflow-hidden",

        className,
      )}
      style={{
        boxShadow: `
          0 0 0 1px rgba(255, 255, 255, 0.05),
          0 2px 4px rgba(0, 0, 0, 0.1),
          0 8px 16px rgba(0, 0, 0, 0.2),
          inset 0 1px 0 rgba(255, 255, 255, 0.15),
          inset 0 -1px 0 rgba(255, 255, 255, 0.05)
        `,
      }}
    >
      {/* Shimmer effect overlay */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background: `
            linear-gradient(
              110deg,
              transparent 40%,
              rgba(255, 255, 255, 0.2) 50%,
              transparent 60%
            )
          `,
          transform: "translateX(-100%)",
          animation: interactive ? "shimmer 3s ease-in-out infinite" : "none",
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default FluidGlass;
