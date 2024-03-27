import { INCREMNET_COUNTER, DECREMNET_COUNTER } from "../reducer/Action.type"

export const incremnet = () => (dispatch) => {
    dispatch({ type: INCREMNET_COUNTER })
}

export const decrmnet = () => (dispatch) => {
    dispatch({ type: DECREMNET_COUNTER })
}