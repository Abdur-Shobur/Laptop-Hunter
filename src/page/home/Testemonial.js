import React from 'react'
import CardOne from '../../component/card/CardOne.component'
import testmonial_svg from '../../media/img/testmonila-bg.svg'
import testimoninal_1 from '../../media/img/testimonial/testimoninal-1.webp'
import testimoninal_2 from '../../media/img/testimonial/testimoninal-2.webp'
import testimoninal_3 from '../../media/img/testimonial/testimoninal-3.webp'
function Testemonial() {
  const testmonial_data = [
    {
      id: 1,
      title: 'Best Service Proveder',
      details:
        'One of best marketplace for selling and buying products. Any one can easily find product and selling also buying porduct. This market will be one of the biggest marketplace in the world ',
      img: testimoninal_1,
      name: 'Mr Rock',
      position: 'Seller',
    },
    {
      id: 2,
      title: 'Best Service Proveder',
      details:
        'One of best marketplace for selling and buying products. Any one can easily find product and selling also buying porduct. This market will be one of the biggest marketplace in the world ',
      img: testimoninal_2,
      name: 'Mr Rock',
      position: 'Seller',
    },
    {
      id: 3,
      title: 'Best Service Proveder',
      details:
        'One of best marketplace for selling and buying products. Any one can easily find product and selling also buying porduct. This market will be one of the biggest marketplace in the world ',
      img: testimoninal_3,
      name: 'Mr Rock',
      position: 'Seller',
    },
  ]
  return (
    <div style={{ backgroundImage: `url(${testmonial_svg})` }}>
      <div className="bg-blue-50/[.8] ">
        <div className="flex justify-center ">
          <div className="flex flex-col justify-center items-center max-w-7xl">
            <div className="text-3xl text-blue-600 font-bold mt-4 ">
              Testimonial
            </div>
            <div className="text-2xl text-black font-bold mt-2 ">
              What our Customers Say
            </div>
            <div className="flex flex-col items-center justify-evenly my-12 lg:px-10 lg:flex-row space-y-8 lg:space-y-0 ">
              {testmonial_data.map((e) => (
                <CardOne key={e.id} testimonial={e} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testemonial
