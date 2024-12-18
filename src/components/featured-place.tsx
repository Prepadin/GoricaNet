import Image from 'next/image'
import { MapPin } from 'lucide-react'
import { Badge } from './badge'
import { RatingCategory } from './rating-category'

interface FeaturedPlaceProps {
  image: string
  title: string
  location: string
  category: string
  description: string
  priceRange: string
  isOpen?: boolean
  isBest100?: boolean
  ratings: {
    overall: number
    foodQuality: number
    service: number
    ambience: number
    valueForMoney: number
    accessibility: number
  }
}

export function FeaturedPlace({
  image,
  title,
  location,
  category,
  description,
  priceRange,
  isOpen = false,
  isBest100 = false,
  ratings
}: FeaturedPlaceProps) {
  return (
    <div className="space-y-4">
      <div className="relative aspect-[2/1] overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
        {isBest100 && (
          <div className="absolute top-2 left-2">
            <Badge variant="best100" />
          </div>
        )}
      </div>
      
      <div className="space-y-4">
        <div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
            <span>Restaurants in Nova Gorica</span>
          </div>
          <h2 className="text-2xl font-bold">{title}</h2>
          <div className="flex items-center gap-2 mt-1">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">{location}</span>
          </div>
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

        <p className="text-muted-foreground">{description}</p>

        <div className="flex items-start gap-4 pt-4">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center">
              <span className="text-white font-bold">b</span>
            </div>
            <div>
              <div className="font-bold">Nova Gorica Verified</div>
              <div className="text-3xl font-bold">{ratings.overall}/10</div>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <RatingCategory category="Food Quality" score={ratings.foodQuality} />
          <RatingCategory category="Service" score={ratings.service} />
          <RatingCategory category="Ambience" score={ratings.ambience} />
          <RatingCategory category="Value for Money" score={ratings.valueForMoney} />
          <RatingCategory category="Accessibility & Amenities" score={ratings.accessibility} />
        </div>
      </div>
    </div>
  )
}

