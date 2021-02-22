import { useRouter } from 'next/router'

export default function NavBar ({ headerOptions }) {
  const router = useRouter()
  return (
    <header className={ `${router.pathname === '/notifications' ? 'border-none' : 'border-b' } flex items-center px-4 py-3 h-14` }>
      <div className="flex-shrink-0">
        <img  className="rounded-full w-7 h-7" 
              src="https://pbs.twimg.com/profile_images/1250989900964360192/TxsfrCBi_400x400.jpg"
              />
      </div>
      { headerOptions }
    </header>
  )
}