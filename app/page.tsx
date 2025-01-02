import { NavBar } from '@/components/nav-bar'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ChevronDown, Terminal, Shield, Gauge, LineChart, Cpu, GitFork, PlayCircle } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="text-white lg:w-1/2">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Simplify Your Kubernetes Management
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                BottleNetes is your AI-powered dashboard for local Kubernetes management. 
                Monitor, optimize, and secure your clusters with unprecedented ease.
              </p>
              <div className="flex gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <a 
                    href="https://github.com/oslabs-beta/BottleNetes.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <GitFork className="w-5 h-5" />
                    Get Started on GitHub
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Watch Demo
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-700/20 backdrop-blur-sm rounded-lg"></div>
                <Terminal className="w-full h-[400px] text-white/80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pitch Overview Video */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">See BottleNetes in Action</h2>
          <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto">
            <iframe 
              className="w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              title="BottleNetes Overview"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Powerful Features</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Experience a new way to manage your Kubernetes clusters with our comprehensive suite of tools
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Cpu}
              title="Resource Allocation"
              description="Intelligent resource allocation with real-time optimization suggestions powered by AI"
            />
            <FeatureCard
              icon={Shield}
              title="Security Monitoring"
              description="Proactive security monitoring with instant alerts and vulnerability assessments"
            />
            <FeatureCard
              icon={Gauge}
              title="Pod Diagnostics"
              description="Deep insights into pod health and performance with automated troubleshooting"
            />
            <FeatureCard
              icon={LineChart}
              title="Performance Analytics"
              description="Comprehensive performance metrics with historical data analysis and trends"
            />
            <FeatureCard
              icon={Terminal}
              title="Local Development"
              description="Seamless integration with your local development environment"
            />
            <FeatureCard
              icon={GitFork}
              title="Open Source"
              description="Free and open source, backed by a growing community of developers"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">How BottleNetes Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Step
              number="01"
              title="Install & Connect"
              description="Clone the repository and connect BottleNetes to your local Kubernetes cluster"
            />
            <Step
              number="02"
              title="Monitor & Analyze"
              description="Get instant insights into your cluster's health and performance"
            />
            <Step
              number="03"
              title="Optimize & Scale"
              description="Implement AI-powered suggestions to improve your cluster's efficiency"
            />
          </div>
        </div>
      </section>

      {/* Video Tutorials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Learn BottleNetes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <VideoTutorial
              title="Getting Started with BottleNetes"
              description="Learn how to set up BottleNetes on your local machine"
              videoId="dQw4w9WgXcQ"
            />
            <VideoTutorial
              title="Advanced Resource Management"
              description="Deep dive into BottleNetes' resource allocation features"
              videoId="dQw4w9WgXcQ"
            />
            <VideoTutorial
              title="Security Best Practices"
              description="Enhance your cluster's security with BottleNetes"
              videoId="dQw4w9WgXcQ"
            />
          </div>
        </div>
      </section>

      {/* Graphics / Infographic */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">BottleNetes at a Glance</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <img 
              src="/placeholder.svg?height=400&width=800" 
              alt="BottleNetes Infographic" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Kubernetes Experience?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join developers worldwide who are using BottleNetes to simplify their Kubernetes management
          </p>
          <Button size="lg" variant="secondary" asChild>
            <a 
              href="https://github.com/oslabs-beta/BottleNetes.git"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Get Started with BottleNetes
              <ChevronDown className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Card>
  )
}

function Step({ 
  number, 
  title, 
  description 
}: { 
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function VideoTutorial({
  title,
  description,
  videoId
}: {
  title: string;
  description: string;
  videoId: string;
}) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="aspect-w-16 aspect-h-9">
        <iframe 
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}

