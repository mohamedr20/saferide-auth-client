import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_API_URL + '/api'

export async function login(email, password){
  console.log(email, password, 'sent to client')
  const response = await axios.post(`${baseUrl}/auth/login`, {
    email,
    password
  })
  return response;
}

export async function register(...userProps){
  const response = await axios.post(`${baseUrl}/user`, {
    username: userProps[0].username,
    firstName: userProps[0].firstName,
    lastName: userProps[0].lastName,
    email: userProps[0].email,
    password: userProps[0].password,
    phone: userProps[0].phone
  })
  return response;
}

