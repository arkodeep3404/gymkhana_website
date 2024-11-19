import Navbar from "@/components/navbar"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

interface TeamMember {
  name: string
  role: string
  image: string
  linkedIn: string
}

const teamMembers: TeamMember[] = [
  {
    name: "Swapneel Chaudhuri",
    role: "Management",
    image: "/placeholder.svg?height=400&width=400",
    linkedIn: "#"
  },
  {
    name: "Sagnik Sinha",
    role: "Management",
    image: "/placeholder.svg?height=400&width=400",
    linkedIn: "#"
  },
  {
    name: "Anushka Maji",
    role: "PR Lead",
    image: "/placeholder.svg?height=400&width=400",
    linkedIn: "#"
  },
  {
    name: "Manila Das",
    role: "Social Media Lead",
    image: "/placeholder.svg?height=400&width=400",
    linkedIn: "#"
  },
  {
    name: "Risavdeb Patra",
    role: "Web Dev Lead",
    image: "/placeholder.svg?height=400&width=400",
    linkedIn: "#"
  },
  {
    name: "Ayush Bera",
    role: "PR & Collaboration Lead",
    image: "/placeholder.svg?height=400&width=400",
    linkedIn: "#"
  },
  {
    name: "Mayukh Mazumdar",
    role: "Collaboration Lead",
    image: "/placeholder.svg?height=400&width=400",
    linkedIn: "#"
  },
  {
    name: "Pritha Saha",
    role: "Corporate Relations Lead",
    image: "/placeholder.svg?height=400&width=400",
    linkedIn: "#"
  },
  {
    name: "Meghna Bardhan",
    role: "Workshop and Guest Relations Lead",
    image: "/placeholder.svg?height=400&width=400",
    linkedIn: "#"
  },
  {
    name: "Sayak Sarkar",
    role: "Web Dev",
    image: "/placeholder.svg?height=400&width=400",
    linkedIn: "#"
  }
]

export default function Component() {
  return (<div>
     <Navbar/>
    <div className="bg-white py-24 px-6 sm:py-32 lg:px-8">
       
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-6xl font-bold tracking-tight text-gray-900 mb-16">
            Our Team
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="bg-blue-600 border-none overflow-hidden transition-transform hover:scale-105"
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="relative w-32 h-32 mb-4">
                  <div className="absolute inset-0 rounded-full overflow-hidden ring-4 ring-blue-400">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-200 text-sm mb-4">
                  {member.role}
                </p>
                <Link
                  href={member.linkedIn}
                  className="text-white hover:text-blue-200 transition-colors"
                  aria-label={`Visit ${member.name}'s LinkedIn profile`}
                >
                  <Linkedin className="w-6 h-6" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}