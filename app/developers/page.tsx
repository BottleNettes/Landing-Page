import { NavBar } from '@/components/nav-bar'
import Image from 'next/image'
import Link from 'next/link'
import { Github, Linkedin } from 'lucide-react'

interface Developer {
  name: string;
  role: string;
  image: string;
  description: string;
  github: string;
  linkedin: string;
}

const developers: Developer[] = [
  {
    name: "Jane Doe",
    role: "Full Stack Developer",
    image: "/placeholder.svg?height=300&width=300",
    description: "Jane led the frontend development of BottleNetes, leveraging her expertise in React and Node.js to create a seamless user experience.",
    github: "https://github.com/janedoe",
    linkedin: "https://linkedin.com/in/janedoe"
  },
  {
    name: "John Smith",
    role: "Backend Engineer",
    image: "/placeholder.svg?height=300&width=300",
    description: "John architected the backend systems for BottleNetes, utilizing his deep knowledge of Kubernetes and cloud infrastructure.",
    github: "https://github.com/johnsmith",
    linkedin: "https://linkedin.com/in/johnsmith"
  },
  {
    name: "Emily Johnson",
    role: "DevOps Specialist",
    image: "/placeholder.svg?height=300&width=300",
    description: "Emily implemented the CI/CD pipeline for BottleNetes, ensuring smooth deployment and scalability of the application.",
    github: "https://github.com/emilyjohnson",
    linkedin: "https://linkedin.com/in/emilyjohnson"
  },
  {
    name: "Michael Lee",
    role: "UI/UX Designer",
    image: "/placeholder.svg?height=300&width=300",
    description: "Michael designed the intuitive user interface for BottleNetes, focusing on creating a clean and efficient dashboard for Kubernetes management.",
    github: "https://github.com/michaellee",
    linkedin: "https://linkedin.com/in/michaellee"
  },
  {
    name: "Sarah Brown",
    role: "AI/ML Engineer",
    image: "/placeholder.svg?height=300&width=300",
    description: "Sarah developed the AI-powered insights feature of BottleNetes, applying her machine learning expertise to optimize cluster performance.",
    github: "https://github.com/sarahbrown",
    linkedin: "https://linkedin.com/in/sarahbrown"
  }
];

export default function DevelopersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <NavBar />
      
      <main className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold text-center mb-12">Meet the BottleNetes Developers</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {developers.map((dev, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative w-48 h-48 mb-4">
                <Image
                  src={dev.image}
                  alt={`Photo of ${dev.name}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <div className="flex space-x-4 mb-4">
                <Link
                  href={dev.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                  aria-label={`${dev.name}'s GitHub profile`}
                >
                  <Github className="w-6 h-6" />
                </Link>
                <Link
                  href={dev.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                  aria-label={`${dev.name}'s LinkedIn profile`}
                >
                  <Linkedin className="w-6 h-6" />
                </Link>
              </div>
              <h2 className="text-xl font-semibold mb-2">{dev.name}</h2>
              <h3 className="text-md text-gray-600 mb-4">{dev.role}</h3>
              <p className="text-center text-gray-700">{dev.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

