const initialState = {
    email:"",
    password:"",
    checked:false,
}
export default (state = initialState,action) =>{
    switch(action.type){
        case "EMAIL" :
            return {...state,email : action.payload}
        case "PASSWORD" :
            return {...state,password : action.payload}
        case "CHECK" :
            return{...state,checked : action.payload}
        default:
            return state
    }
}