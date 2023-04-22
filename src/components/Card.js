import React,{useContext} from 'react'
import Ctx from '../Context'
import Imgs from '../img/Imgs'

const Card = () => {

    const {state} = useContext(Ctx)

    const {planet} = state

  return (

    
    <div className='card'>
        <div className='card-header'>

            <img src={Imgs[planet.englishName]} alt={planet.englishName}/>
            <h2>{planet.englishName} </h2>
            
        </div>
        <div className='card-body'>
            <div>
              {planet.gravity && <label> Gravity : <span>{planet.gravity}</span></label>} 
            </div>
            <div className='summary'>
                {planet.summary}
            </div>
        </div>
        
    </div>
  )
}

export default Card