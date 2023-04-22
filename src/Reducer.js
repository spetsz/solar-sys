import ACTIONS from './Actions'

const {SET_PLANET} = ACTIONS

const reducer = (state, action)=>{
    switch(action.type){
        case SET_PLANET:
            return {...state, planet : action.payload}
        
            default:
                return state
    }
}


export default reducer