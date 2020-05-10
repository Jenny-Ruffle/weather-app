import React from 'react'
import './index.css'

const FlexContainer = ({children}) => {
    return (
        <div className='flex-container_wrapper'>
            <div className='flex-container'>
                {children}
            </div>
        </div>
    )
}

export default FlexContainer