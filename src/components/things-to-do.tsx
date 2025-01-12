import Link from 'next/link'
import Image from 'next/image'
import { MapPin } from 'lucide-react'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { FeaturedPlace } from './featured-place'

interface TopRestaurant {
  id: string
  image: string
  title: string
  location: string
  priceRange: string
  category: string
  rating: number
  isOpen?: boolean
}

export function ThingsToDo() {
  const topRestaurants: TopRestaurant[] = [
    {
      id: '1',
      image: '/hrast.jpg',
      title: 'Gostilna pri Hrastu',
      location: 'Kromberška cesta 2, Nova Gorica',
      priceRange: '$$$$',
      category: 'Seafood, Mediterranean, European, Slovenian',
      rating: 9.34,
      isOpen: true
    },
    {
      id: '2',
      image: '/zogica.jpg',
      title: 'Trove',
      location: ' Soška cesta 52, Solkan',
      priceRange: '$$$',
      category: 'Italian, Pizza, Seafood, European',
      rating: 9.32,
      isOpen: true
    },
    {
      id: '3',
      image: '/fabrika.jpg',
      title: 'Fabrika',
      location: 'Bevkov trg 1, Nova Gorica',
      priceRange: '$$',
      category: 'American, Steakhouse, Bar, Barbecue',
      rating: 9.27,
      isOpen: true
    },
    {
      id: '4',
      image: '/primula.jpg',
      title: 'Restavracija Primula',
      location: 'Soška Cesta 40, Nova Gorica',
      priceRange: '$$$$',
      category: 'Barbecue, European, Slovenian',
      rating: 9.23,
      isOpen: true
    }
  ]

  return (
    <section className="py-8 bg-gray-50 px-1 sm:px-4 lg:px-28">
      <div className="container">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="h-6 w-6 rounded-full bg-blue-600 flex items-center justify-center">
              <span className="text-white text-sm">★</span>
            </div>
            <h2 className="text-2xl font-bold">Best Things to Do in Nova Gorica</h2>
          </div>
          <Link href="#" className="text-sm font-medium hover:text-primary">
            See All
          </Link>
        </div>

        <p className="text-muted-foreground mb-6">
          We use a weighted 10-point scoring system with carefully selected categories to evaluate the best places to visit and things to do in Dubai.
        </p>

        <Tabs defaultValue="eat" className="space-y-8">
          <TabsList>
            <TabsTrigger value="eat">Eat</TabsTrigger>
            <TabsTrigger value="play">Play</TabsTrigger>
            <TabsTrigger value="explore">Explore</TabsTrigger>
          </TabsList>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <FeaturedPlace
                image="/mandrija.jpg"
                title="Gostilnica Mandrija"
                location="Ajševica 81, Nova Gorica"
                category="Home-made meals"
                description="We offer fresh dishes, every day we carefully pick simple yet good quality ingredients procured from local food suppliers. At the Mandrija Small Inn, we try to please our customers with our rich culinary offer served in a pleasant ambience, creating an unforgettable experience for various occasions - business and private gatherings, anniversary and wedding parties, romantic evenings for couples."
                priceRange="$$$$"
                isOpen={true}
                isBest100={true}
                ratings={{
                  overall: 9.46,
                  foodQuality: 9.85,
                  service: 9.82,
                  ambience: 9.50,
                  valueForMoney: 8.90,
                  accessibility: 9.20
                }}
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-medium text-muted-foreground">Top 5 in Restaurants</h3>
              <div className="space-y-4">
                {topRestaurants.map((restaurant) => (
                  <div key={restaurant.id} className="flex gap-4">
                    <div className="relative w-24 h-24">
                      <Image
                        src={restaurant.image}
                        alt={restaurant.title}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-muted-foreground mb-1">Top 5 in Restaurants</div>
                      <h4 className="font-semibold">{restaurant.title}</h4>
                      <div className="flex items-center gap-2 text-sm mt-1">
                        <MapPin className="h-3 w-3" />
                        <span>{restaurant.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm mt-1">
                        <span className="text-green-600">{restaurant.isOpen ? 'Open' : 'Closed'}</span>
                        <span className="text-muted-foreground">•</span>
                        <span>{restaurant.priceRange}</span>
                        <span className="text-muted-foreground">•</span>
                        <span>{restaurant.category}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-center w-12 h-12 bg-green-500 text-white font-bold rounded-full">
                      {restaurant.rating}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  )
}

