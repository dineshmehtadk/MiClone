import React from 'react'
import './AccessoriesMenu.css'

import { Link } from 'react-router-dom'
const AccessoriesMenu = () => {
  return (
    <div className="accessoriesMenu">
        <Link className="accessoriesLink" to="/music">Music Store</Link>
        <Link className="accessoriesLink" to="/smartdevice">Smart Devices</Link>
        <Link className="accessoriesLink" to="/home">Home</Link>
        <Link className="accessoriesLink" to="/lifestyle">LifeStyle</Link>
        <Link className="accessoriesLink" to="/mobileAccessories">Mobile Accessories</Link>
    </div>
  )
}

export default AccessoriesMenu