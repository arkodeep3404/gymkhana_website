'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

export default function MediaCoverage() {
  return (
    <section className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Stories of Growth, Innovation, and Inspiration</h2>
        <p className="text-muted-foreground mt-2">Stay updated with our latest media coverages</p>
      </div>

      {/* Main Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4">
        {/* Left Large Item */}
        <div className="bg-[#F7F5FF] p-6 rounded-xl relative flex flex-col justify-between h-full">
          <div>
            <p className="text-muted-foreground text-sm">1 Jan 2024</p>
            <h3 className="text-2xl font-bold mt-2 mb-4">New Internship Program Launched to Boost Career Opportunities</h3>
          </div>
          <Button 
            className="mt-auto w-[140px] bg-[#0040FF] hover:bg-[#0036DB] text-white" 
            variant="default"
          >
            Discover <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Right Smaller Items */}
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex gap-4">
              <div className="bg-[#F7F5FF] rounded-xl h-24 w-24 flex-shrink-0" />
              <div className="flex-grow">
                <p className="text-muted-foreground text-sm">1 Jan 2024</p>
                <h4 className="text-lg font-medium mb-2">
                  New Internship Program Launched to Boost Career Opportunities
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}