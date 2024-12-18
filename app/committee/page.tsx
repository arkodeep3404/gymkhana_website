import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import { Card, CardContent } from "@/components/ui/card"
import { Facebook, Linkedin, Twitter } from 'react-feather'

interface TeamMember {
  name: string
  role: string
  image: string
}

const topRow: TeamMember[] = [
  {
    name: "First Leader",
    role: "Patron",
    image: "/team/sc.svg",
  },
  {
    name: "Second Leader",
    role: "Vice Patron",
    image: "/team/director.svg",
  },
]

const bottomRow: TeamMember[] = [
  {
    name: "Prof. Dr. Arun Kumar Bar",
    role: "Vice Patron",
    image: "/team/ak.svg",
  },
  {
    name: "Prof. Dr. Sanghamitra Poddar",
    role: "Event Organizer",
    image: "/team/sp.jpg",
  },
  {
    name: "Prof. Dr. Biswajoy Chatterjee",
    role: "Vice Patron",
    image: "/team/bc.svg",
  },
]

export default function TeamGrid() {
  return (
    <main>
    <Navbar/>
    <div className="max-w-6xl mx-auto py-10">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-0 text-center md:text-left">Meet IEM Gymkhana Committee 2024-25</h2>
          <p className="text-muted-foreground md:text-right max-w-md text-center md:text-left">
          With wisdom and vision, they lay the foundation of our community. Their guidance paves the way for growth and excellence.
          </p>
        </div>
    </div>
    <div className="container mx-auto px-4 py-8">
      {/* Top Row - 2 cards */}
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {topRow.map((member, index) => (
         <TeamCard key={index} {...member} />
            ))}
            </div>
        </div>
      {/* Bottom Row - 3 cards */}
      <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {bottomRow.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
      </div>
      </div>
    </div>
    <div className="max-w-6xl mx-auto py-10">
    <div className="flex flex-col md:flex-row justify-between  md:items-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-0 text-center md:text-left">Faculty Members</h2>
          <p className="text-muted-foreground md:text-right max-w-md text-center">
          Fueled by passion and innovation, they bring ideas to life. Their efforts drive the energy and spirit of our community forward.
          </p>
        </div>
    </div>
    <FacultyList/>
    <Footer/>
    </main>
  )
}

function TeamCard({ name, role, image }: TeamMember) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
          <img
            src={image}
            alt={`${name}'s profile`}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-muted-foreground mb-4">{role}</p>
        <div className="flex gap-4">
          <a
            href="#"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </CardContent>
    </Card>
  )
}
export function FacultyList() {
    const professors = [
"Prof. (Dr). Malay Gangopadhyay",
"Prof. (Dr). Debika Bhattacharyya",
"Prof. (Dr). Mohuya Chakraborty",
"Prof. Tapas Kumar Dutta",
"Prof. Gauri Majumder",
"Prof. Prabir Kumar Das",
"Prof. (Dr). Koel Ganguly",
"Prof. Gunjan Kumar",
"Prof. Dwaipayan De",
"Prof. Arindam Chakraborty",
"Prof. Avijit Bose",
"Prof. Samapika Das Biswas",
"Prof. Amartya Mukherjee",
"Prof. Shreyoshi Dutta",
"Prof. Srijita Chakraborty",
"Prof. Nikesh Kumar",
"Prof. Rahul Baidya",
"Prof. Ratna Chakraborty",
"Prof. Indranil Basu",
"Prof. (Dr). Malay Gangopadhyay",
"Prof. (Dr). Debika Bhattacharyya",
"Prof. (Dr). Mohuya Chakraborty",
"Prof. Tapas Kumar Dutta",
"Prof. Gauri Majumder",
"Prof. Prabir Kumar Das",
"Prof. (Dr). Koel Ganguly",
"Prof. Gunjan Kumar",
"Prof. Dwaipayan De",
"Prof. Arindam Chakraborty",
"Prof. Avijit Bose",
"Prof. Samapika Das Biswas",
"Prof. Amartya Mukherjee",
"Prof. Shreyoshi Dutta",
"Prof. Srijita Chakraborty",
"Prof. Nikesh Kumar",
"Prof. Rahul Baidya",
"Prof. Ratna Chakraborty",
"Prof. Indranil Basu"
    ]
  
    return (
      <div className="mx-auto max-w-6xl px-40 py-8">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {professors.map((professor, index) => (
            <li 
              key={index}
              className="text-base md:text-lg leading-relaxed"
            >
              {professor}
            </li>
          ))}
        </ul>
      </div>
    )
  }
  
  

