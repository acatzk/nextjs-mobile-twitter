export default function IndexPage () {

  let setLink = 'All'
  const tabs = [
    { title: 'All', to: '/notifications'},
    { title: 'Mentions', to: '/notifications/mentions' }
  ]
  
  return (
    <div className="flex flex-col w-full h-screen">
      <div className="flex items-center border-b-2">
        {tabs.map((tab, i) => (
          <Link key={i} href={ tab.to }>
            <button type="button" 
                    onClick={ () => setLink = tab.title } 
                    className={ `w-1/2 text-center py-3 focus:outline-none hover:bg-blue-50 text-twitter-blue focus:bg-twitter-active transition ease-in-out duration-200 
                    ${tab.title === setLink ? 'border-b-2 border-twitter-blue' : 'border-0'}` }>
              <a className={ `${tab.title === setLink ? 'text-twitter-blue' : 'text-gray-600'} font-semibold text-sm tracking-wide` }>
                { tab.title }
              </a>
            </button>
          </Link>
        ))}
      </div>
      <div>
        this is notifications
      </div>
    </div>
  )
}