import { Card } from 'flowbite-react'
import React from 'react'

interface food{
        pic: string
        name: string
        desc: string
        price: string
    }

const HomeCard = ({pic, name, desc, price}:food) => {
  return (
    <Card
      className="max-w-md bg-gray-800 border-none min-h-150 mb-10"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={pic}
    >
      <h5 className="text-4xl font-bold tracking-tight text-white">
        {name}
      </h5>
      <div>
      <p className="font-normal text-white mb-5">
        {desc}
      </p>
      <p className='text-yellow-300 text-2xl'>
        {price}
      </p>
      </div>
    </Card>
  )
}

export default HomeCard