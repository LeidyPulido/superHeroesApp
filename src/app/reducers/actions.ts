export const addItem = Heroes=>{
    return{
        type:"ADD_ITEM",
        Heroes
    }
}
export const setfilter = filter=>{
    return{
        type:"SET_VISIBILITY_FILTER",
        filter
    }
}

