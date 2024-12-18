import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { PlaceCard } from './place-card'
import { Button } from './ui/button'

interface PlacesSectionProps {
  title: string
  places: Array<{
    id: string
    image: string
    title: string
    location: string
    priceRange: string
    category: string
    rating: number
    isGem?: boolean
    isBest100?: boolean
    isOpen?: boolean
  }>
}

export function PlacesSection({ title, places }: PlacesSectionProps) {
  return (
    <section className="py-8 px-1 sm:px-4 lg:px-28">
      <div className="container">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center">
              <span className="text-orange-600 text-lg">⭐</span>
            </div>
            <h2 className="text-2xl font-bold">{title}</h2>
          </div>
          
          <div className="flex items-center gap-4">
            <Link href="/see-all" className="text-sm font-medium hover:text-primary">
              See All
            </Link>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {places.map((place) => (
            <PlaceCard key={place.id} {...place} />
          ))}
        </div>
      </div>
    </section>
  )
}

