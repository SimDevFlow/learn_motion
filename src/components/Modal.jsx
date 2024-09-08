import React from 'react'
import { motion } from 'framer-motion'

function Modal({ selected, setSelected }) {
    if (!selected) {
        return <></>
    }
    return (
        <div className='fixed inset-0 bg-black/50 z-50 cursor-pointer overflow-y-scroll' onClick={() => { setSelected(null) }}>
            <div className="w-full max-w-[700px] mx-auto my-8 px-8 cursor-default" onClick={(e) => { e.stopPropagation() }}>

                <motion.div  layoutId={`card-${selected.id}`}>
                    <img src={selected.url} alt="" />
                </motion.div>
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 50
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: .5,
                    }}
                    className='bg-white p-4'
                >
                    <h3 className='text-2xl font-bold mb-2'>{selected.title}</h3>
                    {selected.tags.map((tag) => {
                        return (
                            <div className="badge mr-1 mb-1">{tag}</div>
                        )
                    })}
                </motion.div>
            </div>
        </div>
    )
}

export default Modal