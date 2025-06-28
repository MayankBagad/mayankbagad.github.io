import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MinecraftButton } from "@/components/ui/minecraft-button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Zap,
  Shield,
  Clock,
  Users,
  Server,
  Wifi,
  HardDrive,
  Cpu,
  Star,
  Check,
  ArrowRight,
  Play,
  Download,
  Globe,
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-minecraft-grass/20 via-background to-minecraft-cyan/15"></div>
        <div className="container relative">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-4 minecraft-gradient-grass text-white border-minecraft-grass/30 minecraft-block pixel-font">
              🇮🇳 India-Based Servers
            </Badge>
            <h1 className="text-4xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-minecraft-grass to-minecraft-cyan bg-clip-text text-transparent premium-heading">
              Premium Minecraft
              <br />
              Server Hosting
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto pixel-font">
              Power your Minecraft world with VoltSystems. Lightning-fast
              performance, 99.9% uptime, and 24/7 support for the ultimate
              gaming experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MinecraftButton
                size="lg"
                className="text-lg px-8 minecraft-gradient-grass minecraft-block minecraft-font glow-green-hover border border-transparent"
              >
                <Play className="mr-2 h-5 w-5" />
                Start Your Server
              </MinecraftButton>
              <MinecraftButton
                variant="outline"
                size="lg"
                className="text-lg px-8 border-minecraft-cyan text-minecraft-cyan hover:bg-minecraft-cyan hover:text-white minecraft-block minecraft-font glow-blue-hover"
                onClick={() => {
                  document.getElementById("pricing")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                <Globe className="mr-2 h-5 w-5" />
                View Plans
              </MinecraftButton>
            </div>
            <p className="text-sm text-muted-foreground mt-4 pixel-font">
              Start your free trial • No setup fees • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 ml-auto">
        <div className="container">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-12 sm:gap-16 lg:gap-20 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-minecraft-grass mb-2 minecraft-font">
                99.9%
              </div>
              <div className="text-sm text-muted-foreground pixel-font">
                Uptime
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-minecraft-cyan mb-2 minecraft-font">
                300+
              </div>
              <div className="text-sm text-muted-foreground pixel-font">
                Active Players
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-minecraft-gold mb-2 minecraft-font">
                24/7
              </div>
              <div className="text-sm text-muted-foreground pixel-font">
                Support
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 ml-auto">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 minecraft-font">
              Why Choose{" "}
              <span className="text-minecraft-grass">VoltSystems</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto pixel-font">
              Built for gamers, by gamers. Experience the difference with our
              cutting-edge infrastructure and passionate support team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:scale-105 hover:shadow-green-500/30 minecraft-block cursor-pointer hover:rotate-1">
              <CardHeader>
                <div className="w-12 h-12 minecraft-gradient-grass minecraft-block flex items-center justify-center mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="minecraft-font">
                  Lightning Performance
                </CardTitle>
                <CardDescription className="pixel-font">
                  NVMe SSDs and latest-gen CPUs deliver unmatched speed and
                  responsiveness.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:scale-105 hover:shadow-cyan-500/30 minecraft-block cursor-pointer hover:rotate-1">
              <CardHeader>
                <div className="w-12 h-12 minecraft-gradient-cyan minecraft-block flex items-center justify-center mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="minecraft-font">
                  DDoS Protection
                </CardTitle>
                <CardDescription className="pixel-font">
                  Enterprise-grade protection keeps your server online during
                  attacks.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:scale-105 hover:shadow-yellow-500/30 minecraft-block cursor-pointer hover:rotate-1">
              <CardHeader>
                <div className="w-12 h-12 minecraft-gradient-gold minecraft-block flex items-center justify-center mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                  <Clock className="h-6 w-6 text-black" />
                </div>
                <CardTitle className="minecraft-font">Instant Setup</CardTitle>
                <CardDescription className="pixel-font">
                  Get your server running in under 60 seconds with our automated
                  deployment.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:scale-105 hover:shadow-green-500/30 minecraft-block cursor-pointer hover:rotate-1">
              <CardHeader>
                <div className="w-12 h-12 minecraft-gradient-grass minecraft-block flex items-center justify-center mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="minecraft-font">
                  24/7 Expert Support
                </CardTitle>
                <CardDescription className="pixel-font">
                  Our Minecraft experts are always ready to help via Discord,
                  tickets, or live chat.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:scale-105 hover:shadow-cyan-500/30 minecraft-block cursor-pointer hover:rotate-1">
              <CardHeader>
                <div className="w-12 h-12 minecraft-gradient-cyan minecraft-block flex items-center justify-center mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                  <Download className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="minecraft-font">
                  One-Click Modpacks
                </CardTitle>
                <CardDescription className="pixel-font">
                  Install popular modpacks like FTB, Tekkit, and custom packs
                  with just one click.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:scale-105 hover:shadow-yellow-500/30 minecraft-block cursor-pointer hover:rotate-1">
              <CardHeader>
                <div className="w-12 h-12 minecraft-gradient-gold minecraft-block flex items-center justify-center mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                  <HardDrive className="h-6 w-6 text-black" />
                </div>
                <CardTitle className="minecraft-font">
                  Automatic Backups
                </CardTitle>
                <CardDescription className="pixel-font">
                  Never lose your progress with automated daily backups and easy
                  restore options.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 minecraft-font">
              Simple, <span className="text-minecraft-grass">Fair</span> Pricing
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto pixel-font">
              Start small and scale up as your community grows. No hidden fees,
              no surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* Pebble Core */}
            <Card className="relative minecraft-block">
              <CardHeader className="text-center">
                <CardTitle className="text-xl minecraft-font">
                  Pebble Core
                </CardTitle>
                <CardDescription className="pixel-font">
                  Perfect for small groups
                </CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">₹85</span>
                  <span className="text-muted-foreground"> / $1.00</span>
                  <div className="text-sm text-muted-foreground">/month</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-minecraft-grass" />
                    <span className="text-sm pixel-font">1 GB RAM</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-minecraft-grass" />
                    <span className="text-sm pixel-font">
                      6 GB NVMe Storage
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-minecraft-grass" />
                    <span className="text-sm pixel-font">
                      100% @ 3.6 GHz CPU
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-minecraft-grass" />
                    <span className="text-sm pixel-font">1 Cloud Backup</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Slate Node */}
            <Card className="relative minecraft-block">
              <CardHeader className="text-center">
                <CardTitle className="text-xl minecraft-font">
                  Slate Node
                </CardTitle>
                <CardDescription className="pixel-font">
                  Great for small communities
                </CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">₹170</span>
                  <span className="text-muted-foreground"> / $2.00</span>
                  <div className="text-sm text-muted-foreground">/month</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-minecraft-grass" />
                    <span className="text-sm pixel-font">2 GB RAM</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-minecraft-grass" />
                    <span className="text-sm pixel-font">
                      12 GB NVMe Storage
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-minecraft-grass" />
                    <span className="text-sm pixel-font">
                      100% @ 3.6 GHz CPU
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-minecraft-grass" />
                    <span className="text-sm pixel-font">1 Cloud Backup</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Flint Engine */}
            <Card className="relative minecraft-block">
              <CardHeader className="text-center">
                <CardTitle className="text-xl minecraft-font">
                  Flint Engine
                </CardTitle>
                <CardDescription className="pixel-font">
                  Growing communities
                </CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">₹340</span>
                  <span className="text-muted-foreground"> / $4.00</span>
                  <div className="text-sm text-muted-foreground">/month</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-minecraft-grass" />
                    <span className="text-sm pixel-font">4 GB RAM</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-minecraft-grass" />
                    <span className="text-sm pixel-font">
                      20 GB NVMe Storage
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-minecraft-grass" />
                    <span className="text-sm pixel-font">
                      150% @ 3.6 GHz CPU
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-minecraft-grass" />
                    <span className="text-sm pixel-font">2 Cloud Backups</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Shale Matrix - Most Popular */}
            <Card className="relative border-minecraft-grass shadow-lg scale-105 shadow-minecraft-grass/30 minecraft-block">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="minecraft-gradient-grass text-white minecraft-block pixel-font">
                  Most Popular
                </Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-xl minecraft-font">
                  Shale Matrix
                </CardTitle>
                <CardDescription className="pixel-font">
                  Best value for most users
                </CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">₹540</span>
                  <span className="text-muted-foreground"> / $6.50</span>
                  <div className="text-sm text-muted-foreground">/month</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-minecraft-grass" />
                    <span className="text-sm pixel-font">6 GB RAM</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-minecraft-grass" />
                    <span className="text-sm pixel-font">
                      30 GB NVMe Storage
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-minecraft-grass" />
                    <span className="text-sm pixel-font">
                      200% @ 3.6 GHz CPU
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-minecraft-grass" />
                    <span className="text-sm pixel-font">2 Cloud Backups</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Onyx Vault */}
            <Card className="relative minecraft-block">
              <CardHeader className="text-center">
                <CardTitle className="text-xl minecraft-font">
                  Onyx Vault
                </CardTitle>
                <CardDescription className="pixel-font">
                  High-performance option
                </CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">₹700</span>
                  <span className="text-muted-foreground"> / $8.50</span>
                  <div className="text-sm text-muted-foreground">/month</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-minecraft-grass" />
                    <span className="text-sm pixel-font">8 GB RAM</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-minecraft-grass" />
                    <span className="text-sm pixel-font">
                      40 GB NVMe Storage
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-minecraft-grass" />
                    <span className="text-sm pixel-font">
                      250% @ 3.6 GHz CPU
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-minecraft-grass" />
                    <span className="text-sm pixel-font">3 Cloud Backups</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cobalt Forge */}
            <Card className="relative minecraft-block">
              <CardHeader className="text-center">
                <CardTitle className="text-xl minecraft-font">
                  Cobalt Forge
                </CardTitle>
                <CardDescription className="pixel-font">
                  Maximum performance
                </CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">₹880</span>
                  <span className="text-muted-foreground"> / $10.75</span>
                  <div className="text-sm text-muted-foreground">/month</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-minecraft-grass" />
                    <span className="text-sm pixel-font">10 GB RAM</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-minecraft-grass" />
                    <span className="text-sm pixel-font">
                      50 GB NVMe Storage
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-minecraft-grass" />
                    <span className="text-sm pixel-font">
                      275% @ 3.6 GHz CPU
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-minecraft-grass" />
                    <span className="text-sm pixel-font">3 Cloud Backups</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              All plans include a 7-day free trial and 30-day money-back
              guarantee
            </p>
            <MinecraftButton variant="link">
              Need a custom plan? Contact our sales team
              <ArrowRight className="ml-2 h-4 w-4" />
            </MinecraftButton>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="support" className="py-20 bg-minecraft-grass/10">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 minecraft-font">
              Ready to Power Up Your{" "}
              <span className="text-minecraft-grass">Minecraft World</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 pixel-font">
              Join thousands of server owners who chose VoltSystems for
              reliable, high-performance Minecraft hosting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MinecraftButton
                size="lg"
                className="text-lg px-8 minecraft-gradient-grass minecraft-block minecraft-font"
              >
                <Zap className="mr-2 h-5 w-5" />
                Start Your Free Trial
              </MinecraftButton>
              <MinecraftButton
                variant="outline"
                size="lg"
                className="text-lg px-8 border-minecraft-cyan text-minecraft-cyan hover:bg-minecraft-cyan hover:text-white minecraft-block minecraft-font"
              >
                <Users className="mr-2 h-5 w-5" />
                Talk to Sales
              </MinecraftButton>
            </div>
            <p className="text-sm text-muted-foreground mt-6 pixel-font">
              7-day free trial • No credit card required • Setup in 60 seconds
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
