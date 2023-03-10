import { combineReducers } from "redux";
import listReducer  from "./listReducer";
import searchReducer from "./searchReducer"
import setMovie from "./setMovie";

const reducers = combineReducers({
     allLists: listReducer,
     searchLists: searchReducer,
     setMovies: setMovie,
})
export default reducers
