import Footer from '~/components/Footer'
import NavBar from '~/components/Navbar'
import PerfectScroll from '~/lib/PerfectScrollbar'

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-200">
      <div className="flex flex-col justify-between max-w-sm w-full mx-auto bg-white shadow-lg rounded-md">
        <NavBar />
        <main className="flex-1 overflow-y-hidden">
          <PerfectScroll>
            { children }
          </PerfectScroll>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout