import { ThemeToggle } from "@/components/ui/theme-toggle";
import { MinecraftButton } from "@/components/ui/minecraft-button";
import FluidGlass from "@/components/ui/fluid-glass";
import { Menu, X, Zap } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full py-6">
      <div className="container flex h-16 items-center justify-between">
        {/* Left Glass Container - Logo */}
        <div className="flex items-center">
          <FluidGlass
            variant="subtle"
            rounded="sm"
            interactive
            className="px-6 py-3 shadow-lg shadow-green-500/20 minecraft-block"
          >
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-8 h-8 minecraft-gradient-grass minecraft-block">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-minecraft-grass minecraft-font">
                VoltSystems
              </span>
            </div>
          </FluidGlass>
        </div>

        {/* Right Glass Container - Navigation & Actions */}
        <div className="hidden md:flex items-center">
          <FluidGlass
            variant="subtle"
            rounded="sm"
            interactive
            className="px-6 py-3 shadow-lg shadow-cyan-500/20 minecraft-block"
          >
            <div className="flex items-center space-x-1">
              {/* Navigation Links */}
              <nav className="flex items-center space-x-6 mr-4">
                <a
                  href="#features"
                  className="text-lg font-semibold hover:text-minecraft-gold transition-colors px-3 py-2 rounded minecraft-block hover:bg-white/10 pixel-font"
                >
                  Features
                </a>
                <a
                  href="#pricing"
                  className="text-lg font-semibold hover:text-minecraft-gold transition-colors px-3 py-2 rounded minecraft-block hover:bg-white/10 pixel-font"
                >
                  Pricing
                </a>
                <a
                  href="#support"
                  className="text-lg font-semibold hover:text-minecraft-gold transition-colors px-3 py-2 rounded minecraft-block hover:bg-white/10 pixel-font"
                >
                  Contact
                </a>
              </nav>

              {/* Separator */}
              <div className="w-1 h-6 bg-white/20 mx-2 minecraft-block"></div>

              {/* Actions */}
              <div className="flex items-center ml-2">
                <ThemeToggle />
              </div>
            </div>
          </FluidGlass>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center">
          <FluidGlass
            variant="subtle"
            rounded="sm"
            interactive
            className="px-4 py-3 shadow-lg shadow-green-500/20 minecraft-block"
          >
            <div className="flex items-center space-x-3">
              <ThemeToggle />
              <button
                onClick={toggleMobileMenu}
                className="p-2 hover:bg-white/10 rounded minecraft-block transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </FluidGlass>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="container px-4 mt-4">
            <FluidGlass
              variant="subtle"
              rounded="lg"
              className="p-6 shadow-lg shadow-cyan-500/30 minecraft-block"
            >
              <nav className="flex flex-col space-y-4">
                <a
                  href="#features"
                  className="text-lg font-semibold hover:text-minecraft-gold transition-colors py-2 px-3 rounded minecraft-block hover:bg-white/10 pixel-font"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Features
                </a>
                <a
                  href="#pricing"
                  className="text-lg font-semibold hover:text-minecraft-gold transition-colors py-2 px-3 rounded minecraft-block hover:bg-white/10 pixel-font"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Pricing
                </a>
                <a
                  href="#support"
                  className="text-lg font-semibold hover:text-minecraft-gold transition-colors py-2 px-3 rounded minecraft-block hover:bg-white/10 pixel-font"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </nav>
            </FluidGlass>
          </div>
        </div>
      )}
    </header>
  );
}
