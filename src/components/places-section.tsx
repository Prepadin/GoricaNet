'use client'

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
  const scroll = (direction: 'left' | 'right') => {
    const container = document.getElementById('places-container');
    if (container) {
      const scrollAmount = 300; // Adjust this value based on your needs
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

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
                onClick={() => scroll('left')}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                onClick={() => scroll('right')}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="overflow-hidden scrollbar-hide" id="places-container">
          <div className="flex gap-6">
            {places.map((place) => (
              <div className="min-w-[490px]" key={place.id}>
                <PlaceCard {...place} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

