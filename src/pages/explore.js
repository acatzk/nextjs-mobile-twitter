import Head from 'next/head'

export default function ExplorePage () {
  return ( 
    <>
      <Head>
        <title>Explore / Twitter</title>
      </Head>
      <div className="bg-gray-100 w-full min-h-screen">
        <div className="relative">
          <div className="flex-shrink-0">
            <img src="https://pbs.twimg.com/semantic_core_img/1255897267510231040/y4xyKwwd?format=jpg&name=900x900"/>
          </div>
          <div className="absolute text-white p-4 bottom-0">
            <p className="text-sm">Covid-19 &middot; LIVE</p>
            <h1 className="text-2xl font-semibold leading-tight">Updates on the Covid-19</h1>
            <h2 className="text-2xl font-semibold">situation in the Philippines</h2>
          </div>
        </div>
        <div className="my-2 bg-white">
          <div className="text-xl font-semibold px-4 py-2.5 text-gray-800 border-b border-t">
            Trends for you
          </div>
          <div className="divide-y">
            <div className="px-4 transition ease-in-out duration-200 cursor-pointer hover:bg-gray-50">
              <div className="flex items-start justify-between text-base py-1">
                <div className="space-y-2 py-2">
                  <div className="flex flex-col space-y-1">
                    <span className="font-medium text-gray-600 text-xs tracking-wide">Trending in Philippines</span>
                    <span className="font-semibold text-sm uppercase text-gray-800">BBS ELLA</span>
                  </div>
                  <span className="tracking-wide font-medium text-xs text-gray-600">15.2K Tweets</span>
                </div>
                <div className="-mx-2">
                  <button className="flex-shrink-0 p-2 rounded-full focus:bg-twitter-active hover:text-twitter-blue focus:text-twitter-blue hover:bg-blue-50 focus:outline-none transition ease-in-out duration-200">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <circle cx="5" cy="12" r="2"></circle><circle cx="12" cy="12" r="2"></circle>
                      <circle cx="19" cy="12" r="2"></circle>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="px-4 transition ease-in-out duration-200 cursor-pointer hover:bg-gray-50">
              <div className="flex flex-col space-y-1 py-3 text-sm">
                <span className="font-semibold text-gray-800">#TMPusuan</span>
                <span className="text-gray-600 tracking-wide">Push mo ang iba't ibang love sa Samahang Pina-Easy ng TM! </span>
                <div className="flex items-center space-x-2">
                  <span>
                    <svg className="w-3 h-3 fill-current text-gray-500 rounded" viewBox="0 0 24 24"><path d="M20.75 2H3.25C2.007 2 1 3.007 1 4.25v15.5C1 20.993 2.007 22 3.25 22h17.5c1.243 0 2.25-1.007 2.25-2.25V4.25C23 3.007 21.993 2 20.75 2zM17.5 13.504c0 .483-.392.875-.875.875s-.875-.393-.875-.876V9.967l-7.547 7.546c-.17.17-.395.256-.62.256s-.447-.086-.618-.257c-.342-.342-.342-.896 0-1.237l7.547-7.547h-3.54c-.482 0-.874-.393-.874-.876s.392-.875.875-.875h5.65c.483 0 .875.39.875.874v5.65z"></path></svg>
                  </span>
                  <span className="text-gray-600 font-medium text-xs">Promoted by TM Tambayan</span>
                </div>
              </div>
            </div>
            <div className="px-4 transition ease-in-out duration-200 cursor-pointer hover:bg-gray-50">
              <div className="flex items-start justify-between text-base py-1">
                <div className="space-y-2 py-2">
                  <div className="flex flex-col space-y-1">
                    <span className="font-medium text-gray-600 text-xs tracking-wide">Trending in Philippines</span>
                    <span className="font-semibold text-sm uppercase text-gray-800">Baguio</span>
                  </div>
                  <span className="tracking-wide font-medium text-xs text-gray-600">4,047 Tweets</span>
                </div>
                <div className="-mx-2">
                  <button className="flex-shrink-0 p-2 rounded-full focus:bg-twitter-active hover:text-twitter-blue focus:text-twitter-blue hover:bg-blue-50 focus:outline-none transition ease-in-out duration-200">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <circle cx="5" cy="12" r="2"></circle><circle cx="12" cy="12" r="2"></circle>
                      <circle cx="19" cy="12" r="2"></circle>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="px-4 transition ease-in-out duration-200 cursor-pointer hover:bg-gray-50">
              <div className="flex items-start justify-between text-base py-1">
                <div className="space-y-2 py-2">
                  <div className="flex flex-col space-y-1">
                    <span className="font-medium text-gray-600 text-xs tracking-wide">K-pop &middot; Trending</span>
                    <span className="font-semibold text-sm uppercase text-gray-800">Congratulations Jimin</span>
                  </div>
                  <span className="tracking-wide font-medium text-xs text-gray-600">10.8K Tweets</span>
                </div>
                <div className="-mx-2">
                  <button className="flex-shrink-0 p-2 rounded-full focus:bg-twitter-active hover:text-twitter-blue focus:text-twitter-blue hover:bg-blue-50 focus:outline-none transition ease-in-out duration-200">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <circle cx="5" cy="12" r="2"></circle><circle cx="12" cy="12" r="2"></circle>
                      <circle cx="19" cy="12" r="2"></circle>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="px-4 transition ease-in-out duration-200 cursor-pointer hover:bg-gray-50">
              <div className="flex items-start justify-between text-base py-1">
                <div className="space-y-2 py-2">
                  <div className="flex flex-col space-y-1">
                    <span className="font-medium text-gray-600 text-xs tracking-wide">Trending in Philippines</span>
                    <span className="font-semibold text-sm uppercase text-gray-800">#MewSuppasit</span>
                  </div>
                  <span className="tracking-wide font-medium text-xs text-gray-600">460K Tweets</span>
                </div>
                <div className="-mx-2">
                  <button className="flex-shrink-0 p-2 rounded-full focus:bg-twitter-active hover:text-twitter-blue focus:text-twitter-blue hover:bg-blue-50 focus:outline-none transition ease-in-out duration-200">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <circle cx="5" cy="12" r="2"></circle><circle cx="12" cy="12" r="2"></circle>
                      <circle cx="19" cy="12" r="2"></circle>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 py-3 border-t border-b transition ease-in-out duration-200 cursor-pointer hover:bg-gray-50">
            <span className="text-sm text-twitter-blue tracking-wide">Show more</span>
          </div>
        </div>
      </div>
    </>
  )
}

ExplorePage.headerOptions = (
  <div className="flex items-center justify-between w-full">
    <div className="relative group w-full px-7 text-gray-700 focus-within:text-twitter-blue">
      <input type="text" 
             className="pl-12 block w-full rounded-full bg-gray-100 border-0 focus:ring-inset focus:ring-twitter-blue text-sm focus:outline-none focus:bg-white" 
             placeholder="Search Twitter" />
      <div className="absolute inset-y-0 top-2 pl-4">
        <svg className="w-5 h-5 text-gray-500 fill-current"
             viewBox="0 0 24 24">
          <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
        </svg>
      </div>
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