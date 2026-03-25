export const Button: React.FC<{
  icon?: React.ReactNode
  children?: React.ReactNode
  className?: string
  [key: string]: any
}> = ({ icon, children, className = "", ...props }) => (
  <button
    className={`relative cursor-pointer z-0 flex items-center justify-center gap-2 overflow-hidden rounded-full 
    border border-white bg-white 
    px-8 py-4 font-semibold text-zinc-900 transition-all duration-500
    before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5]
    before:rounded-[100%] before:bg-zinc-900 before:transition-transform before:duration-1000 before:content-[""]
    hover:scale-105 hover:text-white hover:before:translate-x-[0%] hover:before:translate-y-[0%] active:scale-95 ${className}`}
    {...props}
  >
    {icon}
    <span>{children}</span>
  </button>
)
