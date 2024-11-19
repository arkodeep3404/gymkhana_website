import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid gap-8 lg:gap-12">
        <div className="grid gap-6 md:grid-cols-2 md:gap-12 items-start">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            At Gymkhana, passion meets possibilities.
          </h1>
          <div className="space-y-6 lg:pl-64">
            <p className="text-lg text-black">
              From athletics to cultural fests, it empowers students to explore their passions beyond academics.
            </p>
            <Button className="rounded-full bg-[#0740C6] hover:bg-[#0740C6]/90 text-white">
              Discover →
            </Button>
          </div>
        </div>
        <div className="relative aspect-[16/9] md:aspect-[2/1] lg:aspect-[3/1] overflow-hidden rounded-3xl">
          <Image
            src="/gymkhana.jpg"
            alt="Group of students in formal attire standing together outside an institutional building"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 85vw"
          />
        </div>
      </div>
    </section>
  )
}