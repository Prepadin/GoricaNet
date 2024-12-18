import Link from 'next/link'
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from './badge'
import { CategoryPill } from './category-pill'

interface Attraction {
  id: string
  image: string
  title: string
  location: string
  price: string
  category: string
  rating: number
  isGem?: boolean
  isBest100?: boolean
  isOpen?: boolean
}

interface Category {
  icon: string
  label: string
}

export function AttractionsSection() {
  const attractions: Attraction[] = [
    {
      id: '1',
      image: '/perla.jpg',
      title: 'Casino Perla',
      location: 'Kidričeva ulica 7,Nova Gorica',
      price: 'Free',
      category: 'Resort & Entertainment',
      rating: 9.37,
      isGem: true,
      isBest100: true,
      isOpen: true
    },
    {
      id: '2',
      image: '/gora.jpg',
      title: 'Sveta Gora',
      location: 'Sveta Gora 2, Solkan',
      price: '$$$$',
      category: 'Iconic Buildings',
      rating: 9.32,
      isGem: true,
      isBest100: true,
      isOpen: true
    },
    {
      id: '3',
      image: '/most.jpg',
      title: 'Solkanski Most',
      location: '5250 Solkan',
      price: '$$$$',
      category: 'Tourist Attractions',
      rating: 9.32,
      isGem: true,
      isBest100: true,
      isOpen: true
    }
  ]

  const primaryCategories: Category[] = [
    { icon: '🏛️', label: 'Iconic Buildings' },
    { icon: '🏛️', label: 'Museums' },
    { icon: '🎡', label: 'Theme Parks' },
    { icon: '💦', label: 'Water Parks' },
    { icon: '🐠', label: 'Aquariums' }
  ]

  const secondaryCategories: Category[] = [
    { icon: '🏖️', label: 'Beaches' },
    { icon: '🌳', label: 'Parks' },
    { icon: '🦁', label: 'Zoos' },
    { icon: '🎯', label: 'Experiences' },
    { icon: '🔭', label: 'Observation Decks' },
    { icon: '🎨', label: 'Art Galleries' }
  ]

  const tertiaryCategories: Category[] = [
    { icon: '🎭', label: 'Theatre & Performance Venues' },
    { icon: '🏟️', label: 'Stadiums' },
    { icon: '🏢', label: 'Arenas' }
  ]

  return (
    <section className="py-8 px-1 sm:px-4 lg:px-28">
      <div className="container">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center">
              <span className="text-orange-600 text-lg">⭐</span>
            </div>
            <h2 className="text-2xl font-bold">Award Winning Attractions</h2>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {attractions.map((attraction) => (
            <div key={attraction.id} className="group cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <img
                  src={attraction.image}
                  alt={attraction.title}
                  className="object-cover w-full h-full transition-transform group-hover:scale-105"
                />
                <div className="absolute top-2 left-2 flex gap-2">
                  {attraction.isGem && <Badge variant="gem" />}
                  {attraction.isBest100 && <Badge variant="best100" />}
                </div>
              </div>
              
              <div className="mt-3 space-y-2">
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold text-lg">{attraction.title}</h3>
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-medium">★ {attraction.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{attraction.location}</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm">
                  {attraction.isOpen && (
                    <span className="text-green-600 font-medium">Open</span>
                  )}
                  <span className="text-muted-foreground">•</span>
                  <span>{attraction.price}</span>
                  <span className="text-muted-foreground">•</span>
                  <span>{attraction.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold">Places to visit in Nova Gorica <span className="text-pink-600">today</span></h2>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {primaryCategories.map((category) => (
              <CategoryPill 
                key={category.label}
                icon={category.icon}
                label={category.label}
              />
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {secondaryCategories.map((category) => (
              <CategoryPill 
                key={category.label}
                icon={category.icon}
                label={category.label}
              />
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {tertiaryCategories.map((category) => (
              <CategoryPill 
                key={category.label}
                icon={category.icon}
                label={category.label}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

