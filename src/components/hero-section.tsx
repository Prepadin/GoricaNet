import { Search } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/gorica.jpg')",
          backgroundPosition: "center 40%"
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Nova Gorica Review
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Read Reviews of Nova Gorica Businesses
        </p>
        
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="relative">
            <Input
              type="search"
              placeholder="What are you looking for?"
              className="w-full h-14 pl-4 pr-12 text-black"
            />
            <Button 
              size="icon"
              className="absolute right-2 top-2"
            >
              <Search className="h-5 w-5" />
            </Button>
          </div>
          
          <Button 
            size="lg"
            className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-lg h-14 px-8"
          >
            Write a Review of any Nova Gorica company
          </Button>
        </div>
      </div>
    </div>
  )
}

