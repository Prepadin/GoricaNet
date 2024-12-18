import Link from "next/link"
import { Search } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-6 flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center">
              <span className="text-white text-xl">★</span>
            </div>
          </Link>
          <div className="hidden lg:flex items-center gap-1">
            <Input
              type="search"
              placeholder="What are you looking for?"
              className="w-[300px]"
            />
            <Button variant="ghost" size="icon">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <nav className="flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-primary">
            Home
          </Link>
          <Link href="/explore" className="text-sm font-medium hover:text-primary">
            Explore
          </Link>
          <Link href="/magazine" className="text-sm font-medium hover:text-primary">
            Magazine
          </Link>
          <Link href="/categories" className="text-sm font-medium hover:text-primary">
            Categories
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/sign-in" className="text-sm font-medium hover:text-primary">
              Sign in
            </Link>
            <span className="text-muted-foreground">or</span>
            <Link href="/register" className="text-sm font-medium hover:text-primary">
              Register
            </Link>
            <Button className="bg-green-600 hover:bg-green-700">
              Add a listing
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}

