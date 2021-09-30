import * as API from '../api/index';

import {SIGNIN} from '../constants/const';

export const signIn = (DATA,history) => async (dispatch) =>{
    try {
        const {data} = await API.signIn(DATA);
        dispatch({ type: SIGNIN, data });
        history.push('/');
    } catch (err) {
        console.log(err);
    }
}
