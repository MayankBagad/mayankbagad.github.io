import { Zap, Github, Twitter, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-8 h-8 bg-minecraft-green rounded-md">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-minecraft-green">
                VoltSystems
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Premium Minecraft server hosting with lightning-fast performance
              and 24/7 support.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-minecraft-green transition-colors"
                aria-label="Discord"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-minecraft-green transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-minecraft-green transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-minecraft-green transition-colors"
                >
                  Minecraft Hosting
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-minecraft-green transition-colors"
                >
                  Modded Servers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-minecraft-green transition-colors"
                >
                  VPS Hosting
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-minecraft-green transition-colors"
                >
                  Dedicated Servers
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-minecraft-green transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-minecraft-green transition-colors"
                >
                  Tutorials
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-minecraft-green transition-colors"
                >
                  Contact Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-minecraft-green transition-colors"
                >
                  Server Status
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-minecraft-green transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-minecraft-green transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-minecraft-green transition-colors"
                >
                  Refund Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-minecraft-green transition-colors"
                >
                  Acceptable Use
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} VoltSystems. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
