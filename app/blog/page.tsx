import { NavBar } from '@/components/nav-bar'

export default function Blog() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-6">Blog</h1>
        <p className="text-lg">
          Stay up to date with the latest news, tutorials, and insights about BottleNetes 
          and Kubernetes management.
        </p>
      </main>
    </div>
  )
}

