import { INCREMNET_COUNTER } from "../reducer/Action.type"

export const incremnet = () => (dispatch)=>{
dispatch({type:INCREMNET_COUNTER})
}