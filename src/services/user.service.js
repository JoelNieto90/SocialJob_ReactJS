import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://social-jobs-dev-back.herokuapp.com/api/';

class UserService {
  getPublicContent() {
    return axios.get(`${API_URL}user`);
  }

  getUserBoard() {
    return axios.get(`${API_URL}user`, { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(`${API_URL}mod`, { headers: authHeader() });
  }

}

export default new UserService();
