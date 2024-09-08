import React from 'react'
import { items } from '../data.js'
import { motion, AnimatePresence, MotionConfig } from 'framer-motion'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

function Card({ setSelected, item }) {
    return (
        <div className='inline-block mb-4 w-full'>
        <MotionConfig ></MotionConfig>
            <motion.img
             layoutId={`card-${item.id}`}
                whileHover={{
                    scale: 1.025,
                    transition: {
                        duration: .2
                    }
                }}
                whileTap={{
                    scale: .95
                }}
                src={item.url} onClick={() => { setSelected(item) }}
                className='w-full bg-base-100 shadow-xl image-full cursor-pointer'
            />
            <div className='flex flex-wrap mt-2'>
                {
                    item.tags.map((tag) => {
                        return (
                            <div className="badge mr-1 mb-1">{tag}</div>
                        )
                    })
                }
            </div>
        </div>
    )
}

function List({ setSelected }) {
    return (
        <div className='p-4'>
            <h2 className='text-center font-bold text-4xl mb-8'> Your Images</h2>
            <ResponsiveMasonry
             columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}
            
            >
                <Masonry gutter="1rem">
                    
                {
                    items.map((item) => (<Card key={item.id} setSelected={setSelected} item={item} />))
                }
                </Masonry>
            </ResponsiveMasonry>

        </div>
    )
}

export default List