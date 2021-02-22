import Head from 'next/head'
import Link from 'next/link'

export default function NotificationPage (props) {

  return ( 
    <>
      <Head>
        <title>Notifications / Twitter</title>
      </Head>
    </>
  )
}

NotificationPage.headerOptions = (
  <div className="flex items-center justify-between w-full">
    <div className="flex items-center">
      <span className="ml-6 text-lg font-extrabold">Notifications</span>
    </div>
    <div className="-mx-2">
      <button className="flex-shrink-0 p-2 rounded-full focus:bg-twitter-active text-twitter-blue focus:text-twitter-blue hover:bg-blue-50 focus:outline-none transition ease-in-out duration-200">
        <svg className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="1.5" 
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
            <path strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="1.5" 
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z">
            </path>
          </svg>
      </button>
    </div>
  </div>
)