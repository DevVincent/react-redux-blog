import jsonPlacerholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

export const fetchPosts = () => {
    return async (dispatch) => {
        const response = await jsonPlacerholder.get('/posts')
        
        dispatch({ type: 'FETCH_POSTS', payload: response.data });
    };
};

export const selectPost = () => {
    return{
        type:'SELECT_POST'
    }
};

export const fetchUser = (id) =>{
    return (dispatch) => {
        _fetchUser(id, dispatch);
    };
};

const _fetchUser = _.memoize(async (id, dispatch) => {
    
        const response = await jsonPlacerholder.get(`/users/${id}`)

        dispatch({ type: 'FETCH_USER', payload: response.data });
    
});