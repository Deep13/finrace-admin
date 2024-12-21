import axios from "axios";

export const Login = async (
    email,
    password,
    onSuccess = () => { },
    onError = () => { },
  ) => {
  
    const payload = {
      email: email,
      password: password
    };
  
    try {
      console.log('login payload', payload);
  
      const response = await axios.post('https://www.missionatal.com/api/v1/auth/email/login', payload);
  
      console.log('response', response.data);
  
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('refreshToken', response.data.refreshToken);
      // localStorage.setItem('userName', response.data.user.firstName)
      // localStorage.setItem('Photo', response.data.user.photo)
      let loginUserDetails = {
        userName: response.data.user.firstName,
        userId: response.data.user.id,
        photo: response.data.user.photo
      }
      localStorage.setItem('userDetails', btoa(JSON.stringify(loginUserDetails)))
      localStorage.removeItem('guest_details')
      onSuccess()
  
    } catch (error) {
      console.error('Login failed:', error.response ? error.response.data : error.message);
      onError()
    }
  };


export const getUserDetails = async (onSuccess, onError) => {
    try {
      // Retrieve the token from localStorage
      const token = localStorage.getItem('token');
  
      if (!token) {
        throw new Error('No token found in localStorage');
      }
  
      // Make the GET request with the authorization header
      const response = await fetch('https://www.missionatal.com/api/v1/auth/me', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json', // Optional, adjust if needed
        },
      });
  
      // Check if the response is OK
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status} - ${response.statusText}`);
      }
  
      // Parse and return the JSON data
      const data = await response.json();
      console.log("user", data)
      onSuccess(data)
    } catch (error) {
      // Handle and log errors
      console.error('Error fetching data:', error.message);
      // throw error; // Re-throw to allow further handling if needed
      onError(error)
    }
  };