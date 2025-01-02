import { NavBar } from '@/components/nav-bar'

export default function Docs() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-6">Documentation</h1>
        <p className="text-lg">
          Here you'll find comprehensive documentation on how to use BottleNetes, 
          including installation guides, API references, and best practices.
        </p>
      </main>
    </div>
  )
}

