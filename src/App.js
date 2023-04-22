import React,{useReducer} from 'react'
import Planets from './components/Planets'
import Card from './components/Card'
import {data} from './Data.json'
import Imgs from './img/Imgs'
import './App.css'
import reducer from './Reducer'
import Ctx from './Context'

const App = () =>{

  const [state, dispatch] = useReducer(reducer, {
    planet : {}
  })

  return(
    <Ctx.Provider value={{dispatch, state}}>
      <div className='container'>
        <Planets imgs={Imgs} planets={data}/>

        <Card />
      </div>
        
        

    </Ctx.Provider>
    
  )
}

export default App