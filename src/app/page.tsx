import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { PlacesSection } from "@/components/places-section"
import { ThingsToDo } from "@/components/things-to-do"
import { AttractionsSection } from "@/components/attractions-section"
import Script from "next/script";

const malls = [
  {
    id: '1',
    image: '/dubai-mall.jpg',
    title: 'The Dubai Mall',
    location: 'Downtown Dubai',
    priceRange: '$$$',
    category: 'Lifestyle Malls',
    rating: 9.12,
    isGem: true,
    isBest100: true,
    isOpen: true
  },
  {
    id: '2',
    image: '/dubai-hills-mall.jpg',
    title: 'Dubai Hills Mall',
    location: 'Dubai Hills Estate',
    priceRange: '$$$',
    category: 'Lifestyle Malls',
    rating: 9.02,
    isGem: true,
    isBest100: true,
    isOpen: true
  },
  {
    id: '3',
    image: '/chinatown-mall.jpg',
    title: 'Chinatown Dubai Mall',
    location: 'Downtown Dubai',
    priceRange: '$$$',
    category: 'Themed Malls',
    rating: 8.95,
    isGem: false,
    isBest100: true,
    isOpen: true
  }
]

const restaurants = [
  {
    id: '1',
    image: '/pikol2.jpg',
    title: 'Pikol Lake Village',
    location: 'Vipavska 94, Nova Gorica',
    priceRange: '$$$$',
    category: 'European',
    rating: 9.46,
    isBest100: true,
    isOpen: true
  },
  {
    id: '2',
    image: '/calipso2.jpg',
    title: 'Restavracija Calypso',
    location: 'Kidričeva ulica 7, Nova Gorica',
    priceRange: '$$$$',
    category: 'Classic Cuisine',
    rating: 9.34,
    isGem: true,
    isBest100: true,
    isOpen: true
  },
  {
    id: '3',
    image: '/dam2.jpg',
    title: 'Dam',
    location: 'Vinka Vodopivca 24, Nova Gorica',
    priceRange: '$$$',
    category: 'Mediterranean Cuisine',
    rating: 9.28,
    isGem: true,
    isBest100: true,
    isOpen: true
  }
]

export default function Home() {
  return (
    <>
      <head>
      <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=G-66P2YWZ6R3`}
      />

      <Script id='' strategy='lazyOnload'>
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-66P2YWZ6R3', {
              page_path: window.location.pathname,
              });
          `}
      </Script>
      </head>
    <main className="min-h-screen">
      {/* <SiteHeader /> */}
      <HeroSection />
      <div className="bg-white">
        {/* <PlacesSection title="Shop at the Best Malls" places={malls} /> */}
        <PlacesSection title="Award Winning Restaurants" places={restaurants} />
        <ThingsToDo />
        <AttractionsSection />
      </div>
    </main>
    </>
  )
}

