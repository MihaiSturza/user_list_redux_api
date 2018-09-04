import axios from 'axios';

const ROOT_URL = 'https://lateral-node-api.herokuapp.com/api';


export const addUser = (newUser, callback) => async dispatch => {
    try{
        const request = await axios.post(`${ROOT_URL}/user`, newUser);
        dispatch ({
            type: 'ADD_USER',
            payload: request
        })

    } catch (e) {
        dispatch ({
            type: 'ERROR_ADD',
            payload: 'There was an error while trying to add a user'
        })
    }
}


export const fetchUsers = () => async dispatch => {
    try {
        const request = await axios.get(`${ROOT_URL}/user`);
        dispatch ({
            type: 'FETCH_USERS',
            payload: request
        })
    } catch (e) {
        dispatch ({
            type: 'ERROR_USERS',
            payload: 'There was an error while trying to load the users'
        })
    }
}


export const fetchUser = (id) => async dispatch => {
    try {
        const request = await axios.get(`${ROOT_URL}/user/${id}`);
        dispatch ({
            type: 'FETCH_USER',
            payload: request
        })
    } catch (e) {
        dispatch ({
            type: 'ERROR_USER',
            payload: 'Not able to fetch user. Please try again later'
        })
    }
}


export const deleteUser = (id, callback) => async dispatch => {
    try {
        await axios.delete(`${ROOT_URL}/user/${id}`)
            .then(() => callback()); 
            
        dispatch ({
            type: 'DELETE_USER',
            payload: id
        })

    } catch (e) {
        dispatch ({
            type: 'ERROR_DELETE',
            payload: 'Unable to delete user. Please try again later'
        })
    }
}



export const editUser = (user, callback) => async dispatch => {
    try {
        const id = user._id;
        await axios.put(`${ROOT_URL}/user/${id}`, user)
                .then(() => callback());
        dispatch ({
            type: 'EDIT_USER',
            payload: user
        })
    } catch (e) {
        dispatch ({
            type: 'ERROR_EDIT',
            payload: 'Not able to edit user. Please try again later'
        })
    }
}



export function getData(values) {
    return {
        type: 'USER_DATA',
        payload: values
    }
}

export function changeAuth(isAuth) {
    return {
        type: 'CHANGE_AUTH',
        payload: isAuth
    }
}