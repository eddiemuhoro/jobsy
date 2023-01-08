import axios from 'axios'

const API_URL = 'https://busy-red-deer-toga.cyclic.app//';

const register = async(userData)=>{
    const response = await axios.post(API_URL + 'register', userData)
    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data
}

const registerEmployer = async(userData)=>{
    const response = await axios.post(API_URL + 'registerEmployer', userData)
    if(response.data){
        localStorage.setItem('employer', JSON.stringify(response.data));
    }
    return response.data
}

const loginEmployer = async (userData)=>{
    const response = await axios.post(API_URL + 'loginEmployer', userData)

    if(response.data){
        localStorage.setItem('employer', JSON.stringify(response.data));
    }

    return response.data;
}


const login = async (userData)=>{
    const response = await axios.post(API_URL + 'login', userData)

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
}

const logout = ()=>{
    localStorage.removeItem('user');
}

const logoutEmployer = ()=>{
    localStorage.removeItem('employer');
}


const authService ={
    login,
    register,
    logout,
    logoutEmployer,
    loginEmployer,
    registerEmployer
}

export default authService
