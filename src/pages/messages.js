import Head from 'next/head'

export default function MessagesPage () {
  return ( 
    <>
      <Head>
        <title>Messages / Twitter</title>
      </Head>
      <div>
        <h1>Messages</h1>
      </div>
    </>
  )
}

MessagesPage.headerOptions = (
  <div className="flex items-center w-full">
    <div className="flex items-center">
      <span className="ml-6 text-lg font-extrabold">Messages</span>
    </div>
  </div>
)