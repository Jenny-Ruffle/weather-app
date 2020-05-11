import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const Navigation = () => {
    return (
        <ul className='navbar'>
            <li className='navbar_item'>
                <Link to='/three-day' className='navbar_item_link'>
                    3-day
                </Link>
            </li>
            <li className='navbar_item'>
                <Link to='/' className='navbar_item_link'>
                    5-day
                </Link>
            </li>
            <li className='navbar_item'>
                <Link to='fourteen-day' className='navbar_item_link'>
                    14-day
                </Link>
            </li>
        </ul>
    )
}

export default Navigation