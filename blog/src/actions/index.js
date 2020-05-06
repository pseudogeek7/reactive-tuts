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
// to get clarity read above function
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get('/posts');
  // manual dispatch nec because of thunk requirement
  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = (id) => async (dispatch) =>{
  //const response = await jsonPlaceholder.get('/users');
  //using es15 template string
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({type: 'FETCH_USER', payload: response.data});
};