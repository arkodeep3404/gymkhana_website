import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin } from 'react-feather'
import { Facebook } from "react-feather"
import { Twitter } from "react-feather"

interface TeamMember {
  name: string
  role: string
  imageUrl: string
}

const teamMembers: TeamMember[] = [
  {
    name: "Prof. Dr. Satyajit Chakrabarti",
    role: "Patron",
    imageUrl: "/team/director.svg",
  },
  {
    name: "Prof. Dr. Sanghamitra Poddar",
    role: "Event Organizer",
    imageUrl: "/team/sp.jpg",
  },
  {
    name: "Prof. Dr. Malay Gangopadhyay",
    role: "Event Organizer",
    imageUrl: "/team/mg.jpg",
  },
  {
    name: "Prof. Dr. Subhabrata Banerjee",
    role: "Event Organizer",
    imageUrl: "/team/sb.jpg",
  },
  {
    name: "Prof. Avijit Bose",
    role: "Event Organizer",
    imageUrl: "/team/ab.jpg",
  },
  {
    name: "Prof. Dr. Indranil Maity",
    role: "Event Organizer",
    imageUrl: "/team/im.jpg",
  },
]

export default function TeamMembers() {
  return (
    <main>
      <Navbar/>
      <section className="py-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-0">Faces of Our Vibrant Community</h2>
          <p className="text-muted-foreground md:text-right max-w-md">
            With wisdom and vision, they lay the foundation of our community. Their guidance paves the way for growth and
            excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-6 flex flex-col items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-gray-200">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    width={128}
                    height={128}
                  />
                </div>
                <h3 className="text-xl font-semibold text-center mb-1">{member.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{member.role}</p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`Visit ${member.name}'s Facebook profile`}
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`Visit ${member.name}'s LinkedIn profile`}
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`Visit ${member.name}'s Twitter profile`}
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
    <Lagacy/>
    <Footer/>
    </main>
  )
}


function Lagacy() 
{
  return (
    <main>
      <section className="py-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-0">Architects of Tomorrow's Legacy</h2>
          <p className="text-muted-foreground md:text-right max-w-md">
          Fueled by passion and innovation, they bring ideas to life. Their efforts drive the energy and spirit of our community forward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-6 flex flex-col items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-gray-200">
                  <img
                    src="/team/director.svg"
                    alt={member.name}
                    className="w-full h-full object-cover"
                    width={128}
                    height={128}
                  />
                </div>
                <h3 className="text-xl font-semibold text-center mb-1">Prof. Dr. Satyajit Chakrabarti</h3>
                <p className="text-sm text-muted-foreground mb-4">Patron</p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`Visit ${member.name}'s Facebook profile`}
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`Visit ${member.name}'s LinkedIn profile`}
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`Visit ${member.name}'s Twitter profile`}
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
    </main>
  )
}
