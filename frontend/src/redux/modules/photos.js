//imports 
//actions
//action creators
//api actions
function getFeed(){
    return (dispatch, getState) => {
        const {user:{token}} = getState();
        fetch('/images/',{
            headers:{
                "Authorization":`JWT ${token}`
            }
        })
        .then(response=>response.json())
        .then(json=>console.log(json))
    }
}
//initialstate
const initialState={};
//reducer
function reducer(state=initialState, action){
    switch(action.type){
        default:
            return state;
    }
}
//reducer functions
const actionCreators={
    getFeed
}
//exports
export {actionCreators};
//default reducer export
export default reducer;