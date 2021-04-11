const initState = {
    token:null
};

const authReducer = (state=initState,action) =>{
    if(action.type === "AUTH_TOKEN"){
        state.token = action.payload && action.payload
    }
    return state;
}

export default authReducer;