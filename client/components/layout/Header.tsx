import { ThemeToggle } from "@/components/ui/theme-toggle";
import { MinecraftButton } from "@/components/ui/minecraft-button";
import { Menu, X, Zap } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/30 backdrop-blur-xl supports-[backdrop-filter]:bg-black/20">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-8 h-8 bg-minecraft-green rounded-md">
            <Zap className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold text-minecraft-green">
            VoltSystems
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#features"
            className="text-sm font-medium hover:text-minecraft-green transition-colors"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="text-sm font-medium hover:text-minecraft-green transition-colors"
          >
            Pricing
          </a>
          <a
            href="#support"
            className="text-sm font-medium hover:text-minecraft-green transition-colors"
          >
            Support
          </a>
          <a
            href="#about"
            className="text-sm font-medium hover:text-minecraft-green transition-colors"
          >
            About
          </a>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          <MinecraftButton variant="outline" size="sm">
            Login
          </MinecraftButton>
          <MinecraftButton size="sm">Get Started</MinecraftButton>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center space-x-2">
          <ThemeToggle />
          <button
            onClick={toggleMobileMenu}
            className="p-2 hover:bg-accent rounded-md transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container py-4 space-y-4">
            <nav className="flex flex-col space-y-4">
              <a
                href="#features"
                className="text-sm font-medium hover:text-minecraft-green transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-sm font-medium hover:text-minecraft-green transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#support"
                className="text-sm font-medium hover:text-minecraft-green transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Support
              </a>
              <a
                href="#about"
                className="text-sm font-medium hover:text-minecraft-green transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
            </nav>
            <div className="flex flex-col space-y-2 pt-4 border-t">
              <MinecraftButton variant="outline" size="sm">
                Login
              </MinecraftButton>
              <MinecraftButton size="sm">Get Started</MinecraftButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
