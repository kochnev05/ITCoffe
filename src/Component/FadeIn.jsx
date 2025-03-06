import React, { useState, useEffect } from 'react'

const Promo = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        // Запускаем анимацию после монтирования компонента
        setIsVisible(true)
    }, [])

    const style = {
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 3.5s ease-in-out'
    }

    return <div style={style}>{children}</div>
}

export default Promo