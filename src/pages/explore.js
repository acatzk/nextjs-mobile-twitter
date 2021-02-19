import Head from 'next/head'

export default function ExplorePage () {
  return ( 
    <>
      <Head>
        <title>Explore / Twitter</title>
      </Head>
      <div className="w-full">
        <h1>Explore here</h1>
      </div>
    </>
  )
}

ExplorePage.headerOptions = (
  <div className="flex items-center justify-between w-full">
    <div className="relative w-full px-7 text-gray-700">
      <input type="text" 
             className="pl-12 block w-full rounded-full bg-gray-100 border-0 focus:ring-inset focus:ring-twitter-blue text-sm focus:outline-none focus:bg-white" 
             placeholder="Search Twitter" />
      <div className="absolute inset-y-0 top-2 pl-4">
        <svg class="w-5 h-5 text-gray-500 fill-current"
             viewBox="0 0 24 24">
          <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
        </svg>
      </div>
    </div>
    <button className="rounded-full focus:outline-none text-twitter-blue">
      <svg class="w-6 h-6" 
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
                stroke-width="1.5" 
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z">
          </path>
        </svg>
    </button>
  </div>
)