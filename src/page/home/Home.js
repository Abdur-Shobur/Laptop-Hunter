import { Helmet } from 'react-helmet'
import { FadeLoader } from 'react-spinners'
import PromotionProductLoad from '../../context/PromotionProductLoad'
import AllCategoyProduct from './AllCategoyProduct'
import PromotionLaptops from './PromotionLaptops'
import Testemonial from './Testemonial'
import './home.css'
import HeroSection from './HeroSection'
import InfoSection from './InfoSection'
import { Link } from 'react-router-dom'

function Home() {
  const { promote_laptops, isLoading } = PromotionProductLoad()

  return (
    <div>
      <Helmet>
        <title>Laptop Hunter</title>
      </Helmet>
      <HeroSection />
      <AllCategoyProduct />
      <div className="flex justify-center">
        {isLoading && <FadeLoader color="#36d7b7" />}
      </div>
      {promote_laptops?.length > 0 && (
        <PromotionLaptops promote_laptops={promote_laptops} />
      )}
      <div className="flex mb-20 -mt-20">
        <Link
          to={'/shop'}
          class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Shop Now
        </Link>
      </div>
      <Testemonial />
      <InfoSection />
    </div>
  )
}

export default Home
