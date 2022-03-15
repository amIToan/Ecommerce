import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { pubblicRequest } from "../requestMethod";

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await pubblicRequest.post("/auth/login", user);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure());
    }
};