import React,{useContext} from 'react'
import Ctx from '../Context'
import ACTIONS from '../Actions'

const {SET_PLANET} = ACTIONS



const Planet = ({planet, src}) => {

  const {dispatch} = useContext(Ctx)

  const hover = ()=>{
    const sound = new Audio('http://freesoundeffect.net/sites/default/files/rollover-30-sound-effect-58352662.mp3')
    sound.play()
}

const click = ()=>{
    const sound = new Audio("https://cdn.pixabay.com/audio/2022/02/17/audio_988aaf064c.mp3")
    sound.play()
    dispatch({type: SET_PLANET, payload : planet })
    
}

    

  return (
    <div className='planet' onMouseEnter={()=>hover()} onClick={()=>click() }>
        <img src={src} alt={planet.englishName}/>
        <h3>{planet.englishName}</h3>
        
    </div>
  )
}

export default Planet