import Footer from '~/components/Footer'
import NavBar from '~/components/Navbar'
import PerfectScroll from '~/lib/PerfectScrollbar'

export default function Layout ({ Component, pageProps, chilren }) {
  return (
    <div className="flex h-screen">
      <div className="flex flex-col justify-between max-w-sm w-full mx-auto bg-white shadow-lg rounded-md">
        <NavBar headerOptions={ Component.headerOptions }>
          { chilren }
        </NavBar>
        <main className="flex-1 overflow-y-hidden">
          <PerfectScroll chilren={ <Component { ...pageProps } /> } />
        </main>
        <Footer />
      </div>
    </div>
  )
}