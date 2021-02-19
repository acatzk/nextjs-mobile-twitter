import Head from 'next/head'
import Link from 'next/link'

export default function HomePage () {
  return (
    <>
      <Head>
        <title>Home / Twitter</title>
      </Head>
      <div className="px-4">
        <h1 className="text-2xl text-green-600 font-semibold">Home</h1>
        <p>Adipisicing fug</p>
        <Link href="/ninjas">
          <a>See more nija listing</a>
        </Link>
      </div>
    </>
  )
}

HomePage.headerOptions = (
  <div className="flex items-center justify-between w-full">
    <div className="flex items-center">
      <span className="ml-6 text-lg font-extrabold">Home</span>
    </div>
    <button className="rounded-full focus:outline-none text-twitter-blue">
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
      </svg>
    </button>
  </div>
)