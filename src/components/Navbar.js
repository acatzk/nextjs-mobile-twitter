export default function NavBar ({ headerOptions }) {
  return (
    <header className="flex items-center px-4 py-3 border-b h-14">
      <div className="flex-shrink-0">
        <img  className="rounded-full w-7 h-7" 
              src="https://pbs.twimg.com/profile_images/1250989900964360192/TxsfrCBi_400x400.jpg"
              />
      </div>
      { headerOptions }
    </header>
  )
}