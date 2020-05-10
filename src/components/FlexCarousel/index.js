import React from 'react'
import './index.css'

const FlexCarousel = ({children}) => {
    return (
        <div className='flex-carousel_wrapper'>
            <div className='flex-carousel'>
                {children}
            </div>
        </div>
    )
}

export default FlexCarousel