import { GetData } from "./actionType"

export const getdata=(data)=>{
    return {type:GetData,payload:data}
}