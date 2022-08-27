import Footer from '../components/Footer'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className=' font-body bg-body '>
      <Navbar/>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    <Footer/>
    </div>
  )
}

export default MyApp
