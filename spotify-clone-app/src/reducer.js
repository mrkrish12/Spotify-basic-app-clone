export const initialState = {
    user :null,
    playlists:[],
    playing: false,
    item: null,
    // remove it and put null instead
    //  token: 'BQANS6ExdJczUHpYwJ2lfYeGXZLj8WP-aoNBYl5Wpq0oylNJSnZQajuKlZbqNZ-lyFOZy4bnMNfmZokOcWRFdHocaLpd9asWaPMFDw0tnxlsO3l-aBF0vFMDaIBb5UgNeo730l-LuZ9pY7jmnkQQXGzRP_LuclvzXilPNeXfjbdj4y8v5Fd19ipK7uRg_o8tHJ_cn9SL7OUYhkXXtzSVRw',
 };

const reducer =(state, action) =>{
console.log(action);

switch(action.type){
    case 'SET_USER':
        return{
            ...state,
            user: action.user
        }
    case 'SET_TOKEN':
            return{
                ...state,
                token: action.token
            };

    case 'SET_PLAYLISTS':
           return {
            ...state,
            playlists: action.playlists
           };        

    case 'SET_DISCOVER_WEEKLY':
        return{
            ...state,
            discover_weekly:action.discover_weekly,
        }
           
        default: 
        return state;
}
}

export default reducer;