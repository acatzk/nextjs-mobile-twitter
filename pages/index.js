import Head from 'next/head'
import Link from 'next/link'

export default function Home () {
  return (
    <>
    <Head>
      <title>Home / Twitter</title>
    </Head>
    <div className="oveflow-y-auto">
      <h1 className="text-2xl text-green-600 font-semibold">Home</h1>
      <p>Adipisicing fugiat ullamco sunt deserunt. Reprehenderit esse anim ut ut fugiat tempor cupidatat ad enim in nisi magna sit ut. Cupidatat aliqua enim exercitation ea sunt nulla occaecat eiusmod consequat ullamco cupidatat Lorem minim sunt. Ex sunt laboris amet reprehenderit anim tempor ea </p>
      <Link href="/ninjas">
        <a>See more nija listing</a>
      </Link>
    </div>
    </>
  )
}
