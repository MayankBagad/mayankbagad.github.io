import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const minecraftButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-semibold tracking-wide",
  {
    variants: {
      variant: {
        default:
          "bg-minecraft-green text-white hover:bg-minecraft-dark-green shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200",
        destructive:
          "bg-minecraft-redstone text-white hover:opacity-90 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200",
        outline:
          "border-2 border-minecraft-green text-minecraft-green hover:bg-minecraft-green hover:text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200",
        secondary:
          "bg-minecraft-blue text-white hover:bg-minecraft-dark-blue shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-minecraft-green underline-offset-4 hover:underline",
        gold: "bg-minecraft-gold text-black hover:opacity-90 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 font-bold",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface MinecraftButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof minecraftButtonVariants> {
  asChild?: boolean;
}

const MinecraftButton = React.forwardRef<
  HTMLButtonElement,
  MinecraftButtonProps
>(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(minecraftButtonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
});
MinecraftButton.displayName = "MinecraftButton";

export { MinecraftButton, minecraftButtonVariants };
