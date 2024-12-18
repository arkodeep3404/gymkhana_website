'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination"
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

// Types
interface Club {
  id: number;
  title: string;
  type: 'club' | 'award';
  image: string;
  description: string;
}

// Data
const clubsData: Club[] = [
  {
    id: 1,
    title: "Dance Club",
    type: "club",
    image: "/clubs/dance.svg",
    description: "Express yourself through movement and rhythm"
  },
  {
    id: 2,
    title: "Music Club",
    type: "club",
    image: "/clubs/music.svg",
    description: "Explore the world of melody and harmony"
  },
  {
    id: 3,
    title: "Literature Club",
    type: "club",
    image: "/clubs/literature.svg",
    description: "Dive into the world of words and stories"
  },
  {
    id: 4,
    title: "Art & Craft",
    type: "club",
    image: "/clubs/art.svg",
    description: "Create and craft beautiful artwork"
  },
  {
    id: 5,
    title: "Green Campus Award",
    type: "award",
    image: "/community/gc.jpg",
    description: "Recognition for environmental initiatives"
  },
  {
    id: 6,
    title: "Best Innovation in Campus Infrastructure",
    type: "award",
    image: "/community/bi.jpg",
    description: "Excellence in campus development"
  },
  {
    id: 7,
    title: "Excellence in Higher Education Award",
    type: "award",
    image: "/community/ei.jpg",
    description: "Recognition for academic excellence"
  },
  {
    id: 8,
    title: "Best College for Industry-Academia Collaboration",
    type: "award",
    image: "/community/bc.jpg",
    description: "Leading in industry partnerships"
  }
];

function ClubCard({ club }: { club: Club }) {
  return (
    <Card className="flex flex-col h-full rounded-3xl bg-white">
      <div className="relative aspect-square">
        <Image
          src={club.image}
          alt={club.title}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="flex flex-col flex-grow p-4">
        <h3 className="font-semibold text-lg mb-2">{club.title}</h3>
        <p className="text-sm text-muted-foreground flex-grow">{club.description}</p>
      </CardContent>
    </Card>
  )
}

export default function ClubscapeSection() {
  const [currentPage, setCurrentPage] = useState(1)
  const ITEMS_PER_PAGE = 8
  const totalPages = Math.ceil(clubsData.length / ITEMS_PER_PAGE)
  
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentItems = clubsData.slice(startIndex, endIndex)

  return (
    <main>
      <Navbar/>
    <section className="py-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-0">Explore Our Dynamic Clubscape</h2>
          <p className="text-muted-foreground md:text-right max-w-md">
          From athletics to cultural fests, it empowers students to explore their passions beyond academics.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {currentItems.map((club) => (
            <ClubCard key={club.id} club={club} />
          ))}
        </div>

        <Pagination className="justify-center">
          <PaginationContent>
            {Array.from({ length: totalPages }).map((_, index) => (
              <PaginationItem key={index + 1}>
                <PaginationLink
                  onClick={() => setCurrentPage(index + 1)}
                  isActive={currentPage === index + 1}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
          </PaginationContent>
        </Pagination>
      </div>
    </section>
    <Footer/>
  </main>
  )
}

