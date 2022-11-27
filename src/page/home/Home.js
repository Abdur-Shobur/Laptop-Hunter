import { FadeLoader } from 'react-spinners'
import PromotionProductLoad from '../../context/PromotionProductLoad'
import AllCategoyProduct from './AllCategoyProduct'
import PromotionLaptops from './PromotionLaptops'
import Testemonial from './Testemonial'

function Home() {
  const { promote_laptops, data, isLoading, refetch } = PromotionProductLoad()

  return (
    <div>
      {isLoading && <FadeLoader color="#36d7b7" />}
      {promote_laptops?.length > 0 && (
        <PromotionLaptops promote_laptops={promote_laptops} />
      )}
      <AllCategoyProduct />
      <Testemonial />
    </div>
  )
}

export default Home
