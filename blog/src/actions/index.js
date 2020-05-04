import jsonPlaceholder from "../apis/jsonPlaceholder";
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
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};
