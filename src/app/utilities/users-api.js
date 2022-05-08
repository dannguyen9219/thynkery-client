import { getToken } from './users-service'
const BASE_URL = 'https://thynkery.herokuapp.com/api/users';

export async function signUp(userData){
    return sendRequest(`${BASE_URL}`, 'POST', userData)
};

export async function checkToken(){
    return sendRequest(`${BASE_URL}/check-token`)
};

export async function login(credentials){
    return sendRequest(`${BASE_URL}/login`,'POST', credentials)  
};

async function sendRequest(url, method = 'GET', payload = null) {
    const options = { method };
    if (payload) {
      options.headers = { 'Content-Type': 'application/json' };
      options.body = JSON.stringify(payload);
    }
    const token = getToken();
    if (token) {
      options.headers = options.headers || {};
      options.headers.Authorization = `Bearer ${token}`;
    }
    const res = await fetch(url, options);
    if (res.ok) return res.json();
    throw new Error('Bad Request');
};