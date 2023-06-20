import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_API_URL + '/api';

export interface Token{
  exp: Date,
  iat: Date,
  userId: string
}

export interface User {
  id: string;
  email: string;
  password: string;
  username: string;
  phone: string;
  firstName: string;
  lastName: string;
}

export async function login(email, password) {
  const response = await axios.post(`${baseUrl}/auth/login`, {
    email,
    password,
  });
  if (response) {
    localStorage.setItem('accessToken', response.data.data);
  }
  return response;
}

export async function register(...userProps) {
  const response = await axios.post(`${baseUrl}/user`, {
    username: userProps[0].username,
    firstName: userProps[0].firstName,
    lastName: userProps[0].lastName,
    email: userProps[0].email,
    password: userProps[0].password,
    phone: userProps[0].phone,
  });
  return response;
}

export async function fetchUserById(userId: string) {
  try {
    const token = localStorage.getItem('accessToken')
    if(token){
      const response = await axios.get(`${baseUrl}/user/${userId}`, {
        headers:{
          Authorization: `Bearer ${token}`
        }
      });
      return response;
    }
  } catch (err) {
    console.error(err);
  }
}

export async function fetchAllUsers() {
  try {
    const token = localStorage.getItem('accessToken')
    if(token){
      const response = await axios.get(`${baseUrl}/user`, {
        headers:{
          Authorization: `Bearer ${token}`
        }
      });
      return response;
    }
  } catch (err) {
    console.error(err);
  }
}

export function logout(): void {
  localStorage.removeItem('accessToken');
}

export function isAuthenticated(): boolean {
  return localStorage.getItem('accessToken') !== null;
}
