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