export default function (state = [], action) {
    switch (action.type) {
        case 'ADD_USER':
            return [...state, action.payload.data];
        case 'FETCH_USERS':
            return [...action.payload.data];
        case 'FETCH_USER':
            return [...state];
        case 'EDIT_USER':
            return state.map(user => user._id === action.payload._id ? user = action.payload : user);
        case 'DELETE_USER':
            return state.filter( user => user._id !== action.payload);
        case 'USER_DATA':
            return state.map(user => user.id === action.payload.id ? user = action.payload : user);
        case 'ERROR_ADD':
            return [...state, action.payload];
        case 'ERROR_USERS':
            return [...state, action.payload];
        case 'FETCH_USER':
            return [...state, action.payload];
        case 'ERROR_DELETE':
            return [...state, action.payload];
        case 'ERROR_EDIT':
            return [...state, action.payload];
        default:
            return state;
    }
}
