import axios from 'axios';

const API_URL = 'https://social-jobs-dev-back.herokuapp.com/api/';

class AuthService {
  login(email, password) {
    return axios
      .post(`${API_URL}login`, {
        email,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem('token', JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('token');
  }

  register(fullname, email, username, password) {
    return axios.post(`${API_URL}signup`, {
      fullname,
      email,
      username,
      password,
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default new AuthService();
