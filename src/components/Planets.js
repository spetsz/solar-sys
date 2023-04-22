import React from 'react'
import Planet from './Planet'


const Planets = ({planets, imgs}) => {
  return (
    <div className='planets'>
        {planets.map(planet => <Planet src={imgs[planet.englishName]} planet={planet} />)}
    </div>
  )
}

export default Planets