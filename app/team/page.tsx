import { NavBar } from '@/components/nav-bar'
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  github: string;
  linkedin: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Jane Doe",
    role: "Full Stack Developer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Jane is a passionate developer with expertise in React and Node.js. She led the frontend development of BottleNetes.",
    github: "https://github.com/janedoe",
    linkedin: "https://linkedin.com/in/janedoe"
  },
  {
    name: "John Smith",
    role: "Backend Engineer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "John specializes in Kubernetes and cloud infrastructure. He architected the backend systems for BottleNetes.",
    github: "https://github.com/johnsmith",
    linkedin: "https://linkedin.com/in/johnsmith"
  },
  {
    name: "Emily Johnson",
    role: "DevOps Specialist",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Emily brings years of experience in DevOps practices. She implemented the CI/CD pipeline for BottleNetes.",
    github: "https://github.com/emilyjohnson",
    linkedin: "https://linkedin.com/in/emilyjohnson"
  },
  {
    name: "Michael Lee",
    role: "UI/UX Designer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Michael is a talented designer who created the intuitive user interface for BottleNetes.",
    github: "https://github.com/michaellee",
    linkedin: "https://linkedin.com/in/michaellee"
  },
  {
    name: "Sarah Brown",
    role: "AI/ML Engineer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Sarah developed the AI-powered insights feature of BottleNetes, leveraging her expertise in machine learning.",
    github: "https://github.com/sarahbrown",
    linkedin: "https://linkedin.com/in/sarahbrown"
  }
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <NavBar />
      
      <main className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold text-center mb-12">Meet the BottleNetes Team</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-0">
                <Image
                  src={member.image}
                  alt={`Photo of ${member.name}`}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">{member.name}</h2>
                  <h3 className="text-md text-gray-600 mb-4">{member.role}</h3>
                  <p className="text-gray-700 mb-4">{member.bio}</p>
                  <div className="flex space-x-4">
                    <Link
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600"
                      aria-label={`${member.name}'s GitHub profile`}
                    >
                      <Github className="w-6 h-6" />
                    </Link>
                    <Link
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600"
                      aria-label={`${member.name}'s LinkedIn profile`}
                    >
                      <Linkedin className="w-6 h-6" />
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}

