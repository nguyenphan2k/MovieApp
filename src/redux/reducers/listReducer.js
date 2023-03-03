import { ActionType } from "../contants/ActionType"

const initialState = {
     lists: []
}
// console.log(initialState)
export default function listReducer(state = initialState, {payload, type}){
     switch (type) {
          case ActionType.SET_LIST:
               return {
                   ...state,
                   lists: payload
               };
          default:
               return state;
     }
} 