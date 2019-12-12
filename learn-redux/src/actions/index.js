export const increment = () => {
    return{
        type:'INCREMENT'
    };
};
export const decrement = () => {
    return{
        type:'DECREMENT'
    };
};

export const login = (name) => {
    return {
        type:'SIGN_IN',
        payload:{
            name: name
        }
    }
}
export const logout = (name) => {
    return {
        type:'SIGN_OUT',
        payload:{
            name: name
        }
    }
}
