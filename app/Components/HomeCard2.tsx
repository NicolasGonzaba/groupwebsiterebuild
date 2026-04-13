import { Card } from 'flowbite-react'
import React from 'react'

interface food{
        pic: string
        name: string
        desc: string
        price: string
    }

const HomeCard2 = ({pic, name, desc, price}:food) => {
  return (
    <Card
      className="max-w-3xl bg-gray-800 border-none min-h-200 mb-10"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={pic}
    >
      <h5 className="text-5xl font-bold tracking-tight text-white">
        {name}
      </h5>
      <div>
      <p className="font-normal text-white mb-5 text-2xl">
        {desc}
      </p>
      <p className='text-yellow-300 text-3xl'>
        {price}
      </p>
      </div>
    </Card>
  )
}

export default HomeCard2