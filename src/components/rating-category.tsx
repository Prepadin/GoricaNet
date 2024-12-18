interface RatingCategoryProps {
    category: string
    score: number
    className?: string
  }
  
  export function RatingCategory({ category, score, className = '' }: RatingCategoryProps) {
    return (
      <div className={`flex items-center justify-between ${className}`}>
        <span className="text-muted-foreground">{category}</span>
        <div className="flex items-center gap-2">
          <div className="h-2 w-32 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-green-500 rounded-full"
              style={{ width: `${(score / 10) * 100}%` }}
            />
          </div>
          <span className="text-sm font-medium min-w-[2.5rem]">{score.toFixed(2)}</span>
        </div>
      </div>
    )
  }
  
  