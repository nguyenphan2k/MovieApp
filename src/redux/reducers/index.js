import { combineReducers } from "redux";
import listReducer  from "./listReducer";
import searchReducer from "./searchReducer"

const reducers = combineReducers({
     allLists: listReducer,
     searchLists: searchReducer,
})
export default reducers
