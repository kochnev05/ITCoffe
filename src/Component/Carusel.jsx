import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Carousel.css'

const slides = [
    { id: 1, url: 'https://avatars.mds.yandex.net/i?id=e1ab06a03c41a571c0d93de847e8d19353f017f6-4593811-images-thumbs&n=13' },
    { id: 2, url: 'https://avatars.mds.yandex.net/i?id=081e84d0f7bdadf8533c521dd9082b319e26734f-4872349-images-thumbs&n=13' },
    { id: 3, url: 'https://avatars.mds.yandex.net/i?id=d6c6f6cc4bb2687f40c2463b0e29a143d690feba-8191562-images-thumbs&n=13' }
]

const variants = {
    enter: (direction) => ({
        opacity: 0,
        x: direction > 0 ? 300 : -300
    }),
    center: {
        opacity: 1,
        x: 0
    },
    exit: (direction) => ({
        opacity: 0,
        x: direction < 0 ? 300 : -300
    })
}

export default function Carousel() {
    const [[page, direction], setPage] = useState([0, 0])

    const paginate = (newDirection) => {
        setPage(([prevPage]) => {
            const newPage = (prevPage + newDirection + slides.length) % slides.length
            return [newPage, newDirection]
        })
    }

    return (
        <div className="carousel">
            <AnimatePresence initial={false} custom={direction}>
                <motion.img
                    key={page}
                    src={slides[page].url}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ x: { type: 'spring', stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
                    className="carousel-image"
                />
            </AnimatePresence>
            <div className="carousel-controls">
                <button onClick={() => paginate(-1)}>&lt;</button>
                <button onClick={() => paginate(1)}>&gt;</button>
            </div>
        </div>
    )
}