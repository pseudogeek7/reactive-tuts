import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";
export const fetchPostAndUsers = ()=> async dispatch =>{
  
}











// without thunk throws error
// export const fetchPosts = async ()=>{
//     const response = await jsonPlaceholder.get('/posts');
//     return {
//         type: 'FETCH_POSTS',
//         payload: response
//     };
// };

// without arrow function using to fetchposts
// export const fetchPosts = ()=> {
//     return async function (dispatch, getState){
//         const response = await jsonPlaceholder.get('/posts');
//         dispatch({type:'FETCH_POSTS', payload: response});
//     };
// };

//refeactored code for simplicity
// to get clarity read above function
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");
  // manual dispatch nec because of thunk requirement
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

// 0. Before Memoization
export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
};

//  2. successful memoize version of code
// export const fetchUser = (id) => async (dispatch) =>{
//   //const response = await jsonPlaceholder.get('/users');
//   //using es15 template string
//   _fetchUser(id, dispatch);
// };
//  const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({type: 'FETCH_USER', payload: response.data});
// });

// 1. experimenting with memoization
// export const fetchUser = function (id) {
//   return async function (dispatch) {
//     //const response = await jsonPlaceholder.get('/users');
//     //using es15 template string
//     const response = await jsonPlaceholder.get(`/users/${id}`);
//     dispatch({ type: "FETCH_USER", payload: response.data });
//   };
// };
