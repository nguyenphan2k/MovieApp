import { ActionType } from "../contants/ActionType"

export const setLists = (lists) => {
     return {
          type: ActionType.SET_LIST,
          payload: lists
     }
}  
export const setSearch = (lists) => {
     return {
          type: ActionType.SET_SEARCH,
          payload: lists
     }
}  
export const setMovie = (lists) => {
     return {
          type: ActionType.SET_MOVIE,
          payload: lists
     }
}  