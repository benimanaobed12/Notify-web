import { Link } from 'react-router-dom'

const Logo = ({ scrolled, light }) => {
  // If it's in the footer (light prop is true) or the navbar is scrolled,
  // then use dark text, otherwise use white text for contrast on hero
  const textColor = light || scrolled ? 'text-primary-500' : 'text-white'
  
  return (
    <Link to="/" className={`flex items-center font-bold text-xl ${textColor}`}>
      <svg
        className="w-8 h-8 mr-2"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="24"
          height="24"
          rx="12"
          fill={light || scrolled ? '#0F52BA' : '#FFFFFF'}
        />
        <path
          d="M7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12Z"
          fill={light || scrolled ? '#FFFFFF' : '#0F52BA'}
        />
        <path
          d="M8 9L16 15"
          stroke={light || scrolled ? '#0F52BA' : '#FFFFFF'}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M16 9L8 15"
          stroke={light || scrolled ? '#0F52BA' : '#FFFFFF'}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <span className="font-semibold">notify</span>
      <span className="font-bold">code.inc</span>
    </Link>
  )
}

export default Logo