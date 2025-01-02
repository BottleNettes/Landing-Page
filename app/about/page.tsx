import { NavBar } from '@/components/nav-bar'

export default function About() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-6">About BottleNetes</h1>
        <p className="text-lg">
          BottleNetes is a locally hosted Kubernetes dashboard that simplifies resource allocation, 
          pod diagnostics, and security monitoring. With AI-powered insights, fleet-wide heatmaps, 
          and historical and real-time data analysis, it empowers teams to optimize performance and 
          scale effortlessly.
        </p>
      </main>
    </div>
  )
}

