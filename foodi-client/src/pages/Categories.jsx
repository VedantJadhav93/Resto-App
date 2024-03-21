import React from 'react'

const CategoryItems = [
    { id: 1, title:"Main Dish", des: "(86 dishes)", image:'/img1.png'},
    { id: 2, title:"Break fast", des: "(12 break fast)", image: " "},
    { id: 3, title:"Dessert", des: "(48 dessert)", image: " "},
    { id: 4, title:"Browse All", des: "(255 Items)", image: " "},
] 

const Categories = () => {
    return (
        <div className='section-container py-16'>
            <div className='text-center'>
                <p className='subtitle'>Customer Favourites</p>
                <h2 className='title'>Popular Categories</h2>
            </div>
            {/* category cards */}
            <div className='flex fle-col sm:flex-row flex-wrap gap-8 justify-around items-center mt-12'>
                {
                    CategoryItems.map((item, i) => (
                        <div key={i}>
                            <div>
                                <image src={item.image} alt="" className='bg-[#C1F1C6] p-5 rounded-full w-28 h-28' />
                            </div>
                            <div className='mt-5 space-y-1'>
                                <h5>{item.title}</h5>
                                <p>{item.des}</p>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Categories;