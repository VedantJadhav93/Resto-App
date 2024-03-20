import React from 'react'

const Banner = () => {
  return (
    <div className='section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%'>
        <div className='py-24 flex flex-col md:flex-row justify-between items-center gap-8'>
            {/*texts*/}
            <div className='md:w-1/2 space-y-7 px-4'>
                <h2 className='md:text-5xl text-4xl font-bold md:leading-snug leading-snug '>Dive into Delights of Delectable <span className='text-green'>Food</span></h2>
                <p className='text-xl text-[#4A4A4A]'>Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p>
                <button className='btn bg-red px-8 py-3 font-semibold text-white rounded-full'>Order Now</button>
            </div>

            {/*images*/}
            <div className='md:w-1/2'>Right</div>
        </div>
    </div>
  )
}

export default Banner