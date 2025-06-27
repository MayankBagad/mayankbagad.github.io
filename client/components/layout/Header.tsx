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
    <header className="sticky top-0 z-50 w-full py-4">
      <div className="container flex h-16 items-center justify-between">
        {/* Left Glass Container - Logo */}
        <div className="flex items-center">
          <div className="flex items-center space-x-3 px-6 py-3 backdrop-blur-xl bg-black/30 border border-white/10 rounded-full shadow-lg">
            <div className="flex items-center justify-center w-8 h-8 bg-minecraft-green rounded-lg">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-minecraft-green">
              VoltSystems
            </span>
          </div>
        </div>

        {/* Right Glass Container - Navigation & Actions */}
        <div className="hidden md:flex items-center">
          <div className="flex items-center space-x-1 px-6 py-3 backdrop-blur-xl bg-black/30 border border-white/10 rounded-full shadow-lg">
            {/* Navigation Links */}
            <nav className="flex items-center space-x-6 mr-6">
              <a
                href="#features"
                className="text-sm font-medium hover:text-minecraft-green transition-colors px-3 py-2 rounded-lg hover:bg-white/5"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-sm font-medium hover:text-minecraft-green transition-colors px-3 py-2 rounded-lg hover:bg-white/5"
              >
                Pricing
              </a>
              <a
                href="#support"
                className="text-sm font-medium hover:text-minecraft-green transition-colors px-3 py-2 rounded-lg hover:bg-white/5"
              >
                Contact
              </a>
            </nav>

            {/* Separator */}
            <div className="w-px h-6 bg-white/20 mx-2"></div>

            {/* Actions */}
            <div className="flex items-center space-x-3 ml-2">
              <ThemeToggle />
              <MinecraftButton
                variant="outline"
                size="sm"
                className="h-8 px-4 text-xs"
              >
                Login
              </MinecraftButton>
              <MinecraftButton size="sm" className="h-8 px-4 text-xs">
                Get Started
              </MinecraftButton>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center">
          <div className="flex items-center space-x-3 px-4 py-3 backdrop-blur-xl bg-black/30 border border-white/10 rounded-full shadow-lg">
            <ThemeToggle />
            <button
              onClick={toggleMobileMenu}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
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
            <div className="backdrop-blur-xl bg-black/30 border border-white/10 rounded-2xl shadow-lg p-6 space-y-6">
              <nav className="flex flex-col space-y-4">
                <a
                  href="#features"
                  className="text-sm font-medium hover:text-minecraft-green transition-colors py-2 px-3 rounded-lg hover:bg-white/5"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Features
                </a>
                <a
                  href="#pricing"
                  className="text-sm font-medium hover:text-minecraft-green transition-colors py-2 px-3 rounded-lg hover:bg-white/5"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Pricing
                </a>
                <a
                  href="#support"
                  className="text-sm font-medium hover:text-minecraft-green transition-colors py-2 px-3 rounded-lg hover:bg-white/5"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </nav>
              <div className="border-t border-white/10 pt-4 flex flex-col space-y-3">
                <MinecraftButton variant="outline" size="sm">
                  Login
                </MinecraftButton>
                <MinecraftButton size="sm">Get Started</MinecraftButton>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
