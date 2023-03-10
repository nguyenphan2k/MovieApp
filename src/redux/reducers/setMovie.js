import React from 'react'
import { ActionType } from "../contants/ActionType"

const initialState = {
     lists: []
}

export default function setMovie(state = initialState, {type, payload}){
     switch (type) {
          case ActionType.SET_MOVIE:
               return {
                   ...state,
                   ...payload
               };
          default:
               return state;
     }
}
