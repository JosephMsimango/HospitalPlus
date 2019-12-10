export const setEmail = (email) =>{
    return{
        type: "EMAIL",
        payload: email
    }
}

export const setPassword = (password)=>{
    return{
        type: "PASSWORD",
        payload: password
    }
}

export const setCheck =(check) =>{
    return{
        type:"CHECK",
        payload: check
    }
}