import { Link } from 'react-router-dom'

const Button = ({ 
  children, 
  to, 
  href, 
  variant = 'primary', 
  size = 'md',
  className = '',
  ...props 
}) => {
  // Define button size classes
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5',
    lg: 'px-6 py-3 text-lg',
  }
  
  // Define button variant classes
  const variantClasses = {
    primary: 'bg-primary-500 hover:bg-primary-600 text-white',
    secondary: 'bg-secondary-500 hover:bg-secondary-600 text-white',
    accent: 'bg-accent-500 hover:bg-accent-600 text-white',
    outline: 'border border-primary-500 text-primary-500 hover:bg-primary-50',
    ghost: 'text-primary-500 hover:bg-primary-50',
  }
  
  // Combine all classes
  const buttonClasses = `
    inline-flex items-center justify-center 
    font-medium rounded-md transition-colors 
    focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50
    ${sizeClasses[size]} 
    ${variantClasses[variant]}
    ${className}
  `
  
  // Return Link component if 'to' prop is provided
  if (to) {
    return (
      <Link to={to} className={buttonClasses} {...props}>
        {children}
      </Link>
    )
  }
  
  // Return anchor tag if 'href' prop is provided
  if (href) {
    return (
      <a href={href} className={buttonClasses} {...props}>
        {children}
      </a>
    )
  }
  
  // Otherwise return a button element
  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  )
}

export default Button