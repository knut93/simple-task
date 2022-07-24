import '../styles/globals.css'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import DateDisplay from '../components/DateDisplay.jsx'
import EventModal from '../components/EventModal'


function MyApp({ Component, pageProps }) {
  return <>
    <div className="h-screen flex flex-col">
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </div>
  </>
}

export default MyApp
