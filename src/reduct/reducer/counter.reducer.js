// const counterReducer = (state = 1, action) => {
//     switch (action.type) {
//       case "INCREMENT":
//         return state + 1;
//       case "DECREMENT":
//         return state - 1;
//       case "RESET":
//         return (state = 0);
//       default:
//         return state;
//     }
//   };
//   export default counterReducer;




// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//       case "INCREMENT":
//         return {
//           ...state,
//           count: state.count + 1
//         }
//       case "DECREMENT":
//         return {
//           ...state,
//           count: state.count - 1
//         }
//       case "RESET":
//         return {
//           ...state,
//           count: 0
//         }
//       default:
//         return state;
//     }
//   }

import { DECREMNET_COUNTER, INCREMNET_COUNTER } from "./Action.type";


const initialState = {
    count: 0,
    isLoding: false,
    Error: null
}

export const counterReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case INCREMNET_COUNTER:
            return {
                count: state.count + 1
            }
        case DECREMNET_COUNTER:
            return {
                count: state.count - 1
            }
        default:
            return state;
    }
}