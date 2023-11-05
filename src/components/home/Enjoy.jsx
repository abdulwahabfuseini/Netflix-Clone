import React from 'react'
import { EnjoyMovies } from './HomeData'
import Image from 'next/image'

const Enjoy = () => {
  return (
    <div className='w-full h-full px-4 py-12 bg-black'>
      <div className='flex items-center justify-center text-center lg:text-left'>
        {
          EnjoyMovies.map((enjoy, index) => {
            return(
              <div key={index} className="flexCol lg:flex-row gap-y-8">
                <div>
                  <h1 className='mb-5 text-3xl font-bold sm:text-5xl'>{enjoy.title}</h1>
                  <p className='text-xl sm:text-2xl w-full lg:w-[550px]'>{enjoy.desc}</p>
                </div>
                <div>
                <Image
                  width={700}
                  height={60}
                  objectFit="contain"
                  src={`/images/Logo/${enjoy.cover}`} alt="/" 
                />
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Enjoy