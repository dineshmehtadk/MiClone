import React from 'react'
import HotItemCard from './HotItemCard'
import "./HotAccessories.css"

const HotAccessories = ({music, musicCover, smartDevice, smartDeviceCover, home, homeCover,
    lifestyle, lifestyleCover, mobileAccessories, mobileAccessoriesCover
}) => {
  return (
    <div className="HotAccessories">
        <div>
            <img src={musicCover || smartDeviceCover || homeCover || lifestyleCover || mobileAccessoriesCover} alt="Cover" />
        </div>

        <div>
            {music && music.map((item)=>(
                <HotItemCard  key={item.index} name={item.name} price={item.price} 
                image={item.image} index={item.index} />
            ))}
                        {smartDevice && smartDevice.map((item)=>(
                <HotItemCard  key={item.index} name={item.name} price={item.price} 
                image={item.image} index={item.index} />
            ))}
                 {home && home.map((item)=>(
                <HotItemCard  key={item.index} name={item.name} price={item.price} 
                image={item.image} index={item.index} />
            ))}
                 {lifestyle && lifestyle.map((item)=>(
                <HotItemCard  key={item.index} name={item.name} price={item.price} 
                image={item.image} index={item.index} />
            ))}
                 {mobileAccessories && mobileAccessories.map((item)=>(
                <HotItemCard  key={item.index} name={item.name} price={item.price} 
                image={item.image} index={item.index} />
            ))}
        </div>
    </div>
  )
}

export default HotAccessories