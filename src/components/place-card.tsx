import Image from 'next/image'
import { MapPin, Star } from 'lucide-react'
import { Badge } from './badge'

interface PlaceCardProps {
  image: string
  title: string
  location: string
  priceRange: string
  category: string
  rating: number
  isGem?: boolean
  isBest100?: boolean
  isOpen?: boolean
}

export function PlaceCard({
  image,
  title,
  location,
  priceRange,
  category,
  rating,
  isGem = false,
  isBest100 = false,
  isOpen = false
}: PlaceCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute top-2 left-2 flex gap-2">
          {isGem && <Badge variant="gem" />}
          {isBest100 && <Badge variant="best100" />}
        </div>
      </div>
      
      <div className="mt-3 space-y-2">
        <div className="flex items-start justify-between">
          <h3 className="font-semibold text-lg">{title}</h3>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-primary text-primary" />
            <span className="text-sm font-medium">{rating.toFixed(1)}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span className="text-sm">{location}</span>
        </div>
        
        <div className="flex items-center gap-2 text-sm">
          {isOpen && (
            <span className="text-green-600 font-medium">Open</span>
          )}
          <span className="text-muted-foreground">•</span>
          <span>{priceRange}</span>
          <span className="text-muted-foreground">•</span>
          <span>{category}</span>
        </div>
      </div>
    </div>
  )
}

