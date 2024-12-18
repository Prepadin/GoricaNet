interface BadgeProps {
    variant: 'gem' | 'best100'
    className?: string
  }
  
  export function Badge({ variant, className = '' }: BadgeProps) {
    const baseStyles = "px-2 py-1 rounded-full text-xs font-medium inline-flex items-center"
    
    if (variant === 'gem') {
      return (
        <span className={`${baseStyles} bg-pink-600 text-white ${className}`}>
          Dubai Gem
        </span>
      )
    }
    
    return (
      <span className={`${baseStyles} bg-blue-600 text-white ${className}`}>
        Best 100
      </span>
    )
  }
  
  