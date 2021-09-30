import {SIGNIN, LOGOUT} from '../constants/const';
const signIn = (state={signIn:''},action) => {
    switch (action.type){
        case SIGNIN:
            localStorage.setItem('profile',JSON.stringify({ ...action?.data }));
            return {...state, signIn: action?.data };
        case LOGOUT:
            localStorage.clear();
            return {...state, signIn: null };
        default:
            return state;
}
}
export default signIn;