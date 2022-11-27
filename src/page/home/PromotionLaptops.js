import PromotionProductCard from '../../component/card/PromotionProductCard'
import HeaderOne from '../../component/header/HeaderOne'

function PromotionLaptops({ promote_laptops }) {
  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <HeaderOne>Promotion Laptops</HeaderOne>
          </div>

          <div>
            <div className="antialiased bg-sky-100 text-gray-900 font-sans p-6">
              <div className="container mx-auto">
                <div className="flex flex-wrap -mx-4">
                  {promote_laptops?.map((e) => (
                    <PromotionProductCard key={e._id} promote_laptops={e} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PromotionLaptops
