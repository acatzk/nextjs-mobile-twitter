import '~/styles/globals.css'
import Footer from '~/components/Footer'
import PerfectScroll from '~/lib/PerfectScrollbar'

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex h-screen bg-gray-200">
      <div className="flex flex-col justify-between max-w-sm w-full mx-auto bg-white shadow-lg rounded-md">
        <header className="flex items-center px-4 py-3 border-b">
          <img  className="rounded-full w-7 h-7" 
                src="https://pbs.twimg.com/profile_images/1250989900964360192/TxsfrCBi_400x400.jpg"
                />
          <span className="ml-6 text-lg font-extrabold">{ Component.headerTitle }</span>
        </header>
          <main className="flex-1 overflow-y-hidden">
            <PerfectScroll chilren={ <Component { ...pageProps } /> }/>
          </main>
        <Footer />
      </div>
    </div>
  )
}

export default MyApp
