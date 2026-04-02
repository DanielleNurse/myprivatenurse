interface PlaceholderPhotoProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function PlaceholderPhoto({ size = 'lg', className = '' }: PlaceholderPhotoProps) {
  const sizes = {
    sm: 'w-32 h-32',
    md: 'w-48 h-48',
    lg: 'w-72 h-72 md:w-80 md:h-80',
  }

  return (
    <div
      className={`relative rounded-full flex items-center justify-center overflow-hidden ${sizes[size]} ${className}`}
      style={{ background: 'linear-gradient(135deg, #1B2B4B 0%, #253D6B 60%, #1B2B4B 100%)' }}
    >
      {/* Subtle ring */}
      <div className="absolute inset-3 rounded-full border border-gold/20" />
      <div className="absolute inset-6 rounded-full border border-gold/10" />

      {/* Cross icon */}
      <svg
        viewBox="0 0 100 100"
        className={`relative z-10 opacity-25 ${size === 'sm' ? 'w-10 h-10' : size === 'md' ? 'w-16 h-16' : 'w-24 h-24'}`}
        fill="none"
      >
        {/* Vertical bar */}
        <rect x="43" y="18" width="14" height="64" rx="2" fill="#C9A84C" />
        {/* Horizontal bar */}
        <rect x="18" y="43" width="64" height="14" rx="2" fill="#C9A84C" />
      </svg>

      {/* Soft overlay text */}
      <div className="absolute bottom-8 left-0 right-0 text-center">
        <span
          className="font-inter text-gold/30 font-medium"
          style={{ fontSize: size === 'sm' ? '7px' : size === 'md' ? '9px' : '10px', letterSpacing: '0.15em' }}
        >
          PHOTO
        </span>
      </div>
    </div>
  )
}
