import { Zap, MessageCircle, Mail, Activity } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-8 h-8 bg-minecraft-green rounded-md">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-minecraft-green">
                Digicraft Systems
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Premium Minecraft server hosting with lightning-fast performance
              and 24/7 support.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://discord.gg/EpadyruXns"
                target="_blank"
                className="text-muted-foreground hover:text-minecraft-cyan transition-colors cursor-pointer"
                aria-label="Discord Server"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="mailto:minetown456@gmail.com"
                className="text-muted-foreground hover:text-minecraft-cyan transition-colors"
                aria-label="Email Support"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-minecraft-cyan transition-colors"
                aria-label="Server Status"
                title="Server Status"
              >
                <Activity className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#features"
                  className="text-muted-foreground hover:text-minecraft-green transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-muted-foreground hover:text-minecraft-green transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#support"
                  className="text-muted-foreground hover:text-minecraft-green transition-colors"
                >
                  Contact
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
                  href="https://discordapp.com/users/388343727745400834"
                  target="_blank"
                  className="text-muted-foreground hover:text-minecraft-green transition-colors cursor-pointer"
                >
                  Get Help
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/EpadyruXns"
                  target="_blank"
                  className="text-muted-foreground hover:text-minecraft-green transition-colors cursor-pointer"
                >
                  Discord Community
                </a>
              </li>
              <li>
                <a
                  href="mailto:minetown456@gmail.com"
                  className="text-muted-foreground hover:text-minecraft-green transition-colors cursor-pointer"
                >
                  Email Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>Digicraft Systems | Made with 💖 by Volt </p>
        </div>
      </div>
    </footer>
  );
}
