import { ActionType } from "../contants/ActionType"

export const setLists = (lists) => {
     return {
          type: ActionType.SET_LIST,
          payload: lists
     }
}  