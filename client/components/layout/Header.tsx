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
    <header className="sticky top-0 z-50 w-full py-6 border-b border-white/5">
      <div className="container flex h-16 items-center justify-between">
        {/* Left Glass Container - Logo */}
        <div className="flex items-center">
          <div className="flex items-center space-x-3 px-6 py-3 rounded-3xl backdrop-blur-xl bg-white/8 border border-white/15 shadow-lg shadow-green-500/15">
            <div className="flex items-center justify-center w-8 h-8 minecraft-gradient-grass minecraft-block">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-minecraft-grass general-sans">
              VoltSystems
            </span>
          </div>
        </div>

        {/* Right Glass Container - Navigation & Actions */}
        <div className="hidden md:flex items-center justify-center">
          <div className="flex items-center justify-center gap-3">
            {/* Navigation Links */}
            <a
              href="#features"
              className="text-lg font-medium hover:text-white transition-all duration-300 px-6 py-3 rounded-2xl backdrop-blur-xl bg-white/8 hover:bg-white/15 hover:backdrop-blur-2xl hover:shadow-lg hover:shadow-white/15 border border-white/15 hover:border-white/25 pixel-font"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-lg font-medium hover:text-white transition-all duration-300 px-6 py-3 rounded-2xl backdrop-blur-xl bg-white/8 hover:bg-white/15 hover:backdrop-blur-2xl hover:shadow-lg hover:shadow-white/15 border border-white/15 hover:border-white/25 pixel-font"
            >
              Pricing
            </a>
            <a
              href="#support"
              className="text-lg font-medium hover:text-white transition-all duration-300 px-6 py-3 rounded-2xl backdrop-blur-xl bg-white/8 hover:bg-white/15 hover:backdrop-blur-2xl hover:shadow-lg hover:shadow-white/15 border border-white/15 hover:border-white/25 pixel-font"
            >
              Contact
            </a>

            {/* Separator */}
            <div className="w-px h-8 bg-white/20 mx-3"></div>

            {/* Actions */}
            <div className="flex items-center p-2 rounded-2xl backdrop-blur-xl bg-white/8 border border-white/15">
              <ThemeToggle />
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center">
          <div className="flex items-center space-x-3 px-4 py-3 rounded-3xl backdrop-blur-xl bg-white/8 border border-white/15 shadow-lg shadow-green-500/15">
            <ThemeToggle />
            <button
              onClick={toggleMobileMenu}
              className="p-2 hover:bg-white/10 rounded-xl backdrop-blur-sm transition-all duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="container px-4 mt-4">
            <div className="p-6 rounded-3xl backdrop-blur-xl bg-white/8 border border-white/15 shadow-2xl shadow-cyan-500/20">
              <nav className="flex flex-col space-y-3">
                <a
                  href="#features"
                  className="text-lg font-medium hover:text-white transition-all duration-300 py-3 px-4 rounded-2xl backdrop-blur-xl bg-white/8 hover:bg-white/15 hover:backdrop-blur-2xl hover:shadow-lg hover:shadow-white/15 border border-white/15 hover:border-white/25 pixel-font"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Features
                </a>
                <a
                  href="#pricing"
                  className="text-lg font-medium hover:text-white transition-all duration-300 py-3 px-4 rounded-2xl backdrop-blur-xl bg-white/8 hover:bg-white/15 hover:backdrop-blur-2xl hover:shadow-lg hover:shadow-white/15 border border-white/15 hover:border-white/25 pixel-font"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Pricing
                </a>
                <a
                  href="#support"
                  className="text-lg font-medium hover:text-white transition-all duration-300 py-3 px-4 rounded-2xl backdrop-blur-xl bg-white/8 hover:bg-white/15 hover:backdrop-blur-2xl hover:shadow-lg hover:shadow-white/15 border border-white/15 hover:border-white/25 pixel-font"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
