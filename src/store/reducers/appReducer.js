import actionTypes from "../action/actionTypes";


const initState = {
    homeData: [],
    test: 'Hello'
}
const appReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GetHome:
            return state    
        default:
            return state
    }
} 

export default appReducer