import React from 'react'
import Image from 'next/image'

const Watches = () => {

  const watchData = [
    { id: 1, name: 'Rolex', price: 12000, description: 'luxury watch', image: '/w2.jpg' },
    { id: 2, name: 'Apple', price: 50000, description: 'Smart watch', image: '/w1.jpg' },
    { id: 3, name: 'Rolex', price: 152000, description: 'sport watch', image: '/w4.jpeg' },
    { id: 4, name: 'Ruby', price: 18500, description: 'master piece watch', image: '/w7.jpeg' },
    { id: 5, name: 'Apple', price: 14000, description: 'smart watch', image: '/w8.jpeg' },
  ]

  return (
    <div>
      <div className="watches grid grid-cols-1 md:grid-cols-3 gap-10 px-10 my-10">
        {watchData.map((watch)  => (
          <div key={watch.id} className="watch-card bg-white p-5 rounded-md shadow-md text-center">
    <div className="relative w-full h-64"> 
    <Image 
    src={watch.image} 
    alt={watch.name} 
    layout="fill" 
    objectFit="contain" 
    className="rounded-md transition-transform duration-300 transform hover:scale-110" 
     />
    </div>
             <h3 className='mt-4 text-2xl font-bold'>{watch.name}</h3>
             <p className='text-gray-500'>{watch.description}</p>
             <div className="price text-blue-500 text-xl font-semibold mt-2">${watch.price}</div>
             <button className='mt-4 px-4 py-2 bg-blue-500 text-white rounded-md'>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Watches