import axios from "axios"
import history from "../history"

/**
 * ACTION TYPES
 */
const GET_USER = "GET_USER"
const REMOVE_USER = "REMOVE_USER"

/**
 * INITIAL STATE
 */
const defaultUser = {};

/**
 * ACTION CREATORS
 */
const getUser = user => ({ type: GET_USER, user });
const removeUser = () => ({ type: REMOVE_USER });

/**
 * THUNK CREATORS
 */
export const me = () => dispatch =>
  axios
    .get("/auth/me")
    .then(res => dispatch(getUser(res.data || defaultUser)))
    .catch(err => console.log(err));

export const loginUser = (email, password) => dispatch => {
  console.log('login email', email)
  axios.post('/auth/login', {email, password})
  .then(res => {
    dispatch(getUser(res.data || null))
    history.push('/home');
  })
}

export const logoutUser = () => dispatch => {
  return axios
    .post("/auth/logout")
    .then(_ => {
      dispatch(removeUser())

      history.push("/login")
    })
    .catch(err => console.log(err));
};

export const auth = (email, password, method) => dispatch =>
  fetch(`/auth/${method}`, {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
  .then(res => res.json())
    .then(
      data => {
        console.log("data", data)
        dispatch(getUser(data));
        history.push("/home");
      },
      authError => {
        // rare example: a good use case for parallel (non-catch) error handler
        dispatch(getUser({ error: authError }));
      }
    )
    .catch(dispatchOrHistoryErr => console.error(dispatchOrHistoryErr));
/**
 * REDUCER
 */
export default function(state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user
    case REMOVE_USER:
      return defaultUser
    default:
      return state
  }
}
