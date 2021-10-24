import {createStore} from "redux"
import { reducer } from "./reducer"

const initialValue={
    data:[]
    
}
export const store=createStore(reducer,initialValue)