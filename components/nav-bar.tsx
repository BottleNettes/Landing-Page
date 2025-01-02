import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { GitFork } from 'lucide-react'

export function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              BottleNetes
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link href="/about" className="text-gray-600 hover:text-blue-600">About</Link>
            <Link href="/docs" className="text-gray-600 hover:text-blue-600">Documentation</Link>
            <Link href="/blog" className="text-gray-600 hover:text-blue-600">Blog</Link>
            <Link href="/developers" className="text-gray-600 hover:text-blue-600">Developers</Link>
            <Button asChild variant="default">
              <a 
                href="https://github.com/oslabs-beta/BottleNetes.git"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <GitFork className="w-4 h-4" />
                Get Started on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

