import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest } from "../components/requestMethods";
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
