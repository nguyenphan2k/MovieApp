import { ActionType } from "../contants/ActionType";

const initialState = {
     search: "",
}

export default function listReducer(state = initialState, { type, payload }) {
     switch (type) {
          case ActionType.SET_SEARCH:
               return {
                    ...state,
                    search: payload
               }
          default:
               return state;

     }
}