import { Button } from "@/components/ui/button"

interface CategoryPillProps {
  icon: string
  label: string
}

export function CategoryPill({ icon, label }: CategoryPillProps) {
  return (
    <Button
      variant="outline"
      className="rounded-full bg-blue-50 hover:bg-blue-100 border-blue-100 text-blue-600"
    >
      <span className="mr-2">{icon}</span>
      {label}
    </Button>
  )
}

