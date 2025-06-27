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
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-minecraft-green/10 via-background to-minecraft-blue/10"></div>
        <div className="container relative">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-4 bg-minecraft-green/10 text-minecraft-green border-minecraft-green/20">
              ⚡ Lightning Fast Servers
            </Badge>
            <h1 className="text-4xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-minecraft-green to-minecraft-blue bg-clip-text text-transparent">
              Premium Minecraft
              <br />
              Server Hosting
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Power your Minecraft world with VoltSystems. Lightning-fast
              performance, 99.9% uptime, and 24/7 support for the ultimate
              gaming experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MinecraftButton size="lg" className="text-lg px-8">
                <Play className="mr-2 h-5 w-5" />
                Start Your Server
              </MinecraftButton>
              <MinecraftButton
                variant="outline"
                size="lg"
                className="text-lg px-8"
              >
                <Globe className="mr-2 h-5 w-5" />
                View Plans
              </MinecraftButton>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Start your free trial • No setup fees • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-minecraft-green mb-2">
                99.9%
              </div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-minecraft-blue mb-2">
                50K+
              </div>
              <div className="text-sm text-muted-foreground">
                Active Servers
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-minecraft-gold mb-2">
                24/7
              </div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-minecraft-green mb-2">
                5★
              </div>
              <div className="text-sm text-muted-foreground">Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Why Choose{" "}
              <span className="text-minecraft-green">VoltSystems</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built for gamers, by gamers. Experience the difference with our
              cutting-edge infrastructure and passionate support team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-minecraft-green/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="h-6 w-6 text-minecraft-green" />
                </div>
                <CardTitle>Lightning Performance</CardTitle>
                <CardDescription>
                  NVMe SSDs and latest-gen CPUs deliver unmatched speed and
                  responsiveness.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-minecraft-blue/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="h-6 w-6 text-minecraft-blue" />
                </div>
                <CardTitle>DDoS Protection</CardTitle>
                <CardDescription>
                  Enterprise-grade protection keeps your server online during
                  attacks.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-minecraft-gold/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Clock className="h-6 w-6 text-minecraft-gold" />
                </div>
                <CardTitle>Instant Setup</CardTitle>
                <CardDescription>
                  Get your server running in under 60 seconds with our automated
                  deployment.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-minecraft-green/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="h-6 w-6 text-minecraft-green" />
                </div>
                <CardTitle>24/7 Expert Support</CardTitle>
                <CardDescription>
                  Our Minecraft experts are always ready to help via Discord,
                  tickets, or live chat.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-minecraft-blue/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Download className="h-6 w-6 text-minecraft-blue" />
                </div>
                <CardTitle>One-Click Modpacks</CardTitle>
                <CardDescription>
                  Install popular modpacks like FTB, Tekkit, and custom packs
                  with just one click.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-minecraft-gold/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <HardDrive className="h-6 w-6 text-minecraft-gold" />
                </div>
                <CardTitle>Automatic Backups</CardTitle>
                <CardDescription>
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
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Simple, <span className="text-minecraft-green">Fair</span> Pricing
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Start small and scale up as your community grows. No hidden fees,
              no surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <Card className="relative">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Starter</CardTitle>
                <CardDescription>Perfect for small groups</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$5</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-minecraft-green" />
                    <span className="text-sm">2GB RAM</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-minecraft-green" />
                    <span className="text-sm">Up to 10 players</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-minecraft-green" />
                    <span className="text-sm">25GB SSD storage</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-minecraft-green" />
                    <span className="text-sm">Free subdomain</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-minecraft-green" />
                    <span className="text-sm">24/7 support</span>
                  </div>
                </div>
                <MinecraftButton className="w-full" variant="outline">
                  Start Free Trial
                </MinecraftButton>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="relative border-minecraft-green shadow-lg scale-105">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-minecraft-green text-white">
                  Most Popular
                </Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Pro</CardTitle>
                <CardDescription>Great for growing communities</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$15</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-minecraft-green" />
                    <span className="text-sm">6GB RAM</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-minecraft-green" />
                    <span className="text-sm">Up to 40 players</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-minecraft-green" />
                    <span className="text-sm">100GB SSD storage</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-minecraft-green" />
                    <span className="text-sm">Custom domain support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-minecraft-green" />
                    <span className="text-sm">Priority support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-minecraft-green" />
                    <span className="text-sm">Plugin manager</span>
                  </div>
                </div>
                <MinecraftButton className="w-full">
                  Start Free Trial
                </MinecraftButton>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="relative">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Enterprise</CardTitle>
                <CardDescription>For large communities</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$35</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-minecraft-green" />
                    <span className="text-sm">16GB RAM</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-minecraft-green" />
                    <span className="text-sm">Unlimited players</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-minecraft-green" />
                    <span className="text-sm">500GB SSD storage</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-minecraft-green" />
                    <span className="text-sm">Dedicated IP</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-minecraft-green" />
                    <span className="text-sm">White-glove setup</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-minecraft-green" />
                    <span className="text-sm">Custom modpacks</span>
                  </div>
                </div>
                <MinecraftButton className="w-full" variant="outline">
                  Start Free Trial
                </MinecraftButton>
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

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Loved by <span className="text-minecraft-green">Gamers</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of satisfied server owners who trust VoltSystems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-minecraft-gold text-minecraft-gold"
                    />
                  ))}
                </div>
                <p className="text-sm mb-4">
                  "Switched to VoltSystems after years of frustration with other
                  hosts. The difference is night and day - zero lag and amazing
                  support!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-minecraft-green rounded-full flex items-center justify-center text-white text-xs font-bold">
                    S
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Steve_Builder</div>
                    <div className="text-xs text-muted-foreground">
                      Server Owner
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-minecraft-gold text-minecraft-gold"
                    />
                  ))}
                </div>
                <p className="text-sm mb-4">
                  "The one-click modpack installation is incredible. We went
                  from vanilla to a full modded experience in minutes!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-minecraft-blue rounded-full flex items-center justify-center text-white text-xs font-bold">
                    A
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Alex_Crafter</div>
                    <div className="text-xs text-muted-foreground">
                      Community Manager
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-minecraft-gold text-minecraft-gold"
                    />
                  ))}
                </div>
                <p className="text-sm mb-4">
                  "Best hosting service I've used. When we had an issue at 3AM,
                  support was there within minutes. Incredible!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-minecraft-green rounded-full flex items-center justify-center text-white text-xs font-bold">
                    E
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Enderman_Pro</div>
                    <div className="text-xs text-muted-foreground">
                      YouTuber
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-minecraft-green/5">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Ready to Power Up Your{" "}
              <span className="text-minecraft-green">Minecraft World</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of server owners who chose VoltSystems for
              reliable, high-performance Minecraft hosting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MinecraftButton size="lg" className="text-lg px-8">
                <Zap className="mr-2 h-5 w-5" />
                Start Your Free Trial
              </MinecraftButton>
              <MinecraftButton
                variant="outline"
                size="lg"
                className="text-lg px-8"
              >
                <Users className="mr-2 h-5 w-5" />
                Talk to Sales
              </MinecraftButton>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              7-day free trial • No credit card required • Setup in 60 seconds
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
