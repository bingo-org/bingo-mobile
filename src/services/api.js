import axios from 'axios';

axios.defaults.baseURL = 'http://192.168.1.235:4000';
axios.interceptors.response.use(response => response.data);

const resources = {
  sessions: {
    create: params => axios.post('/sessions', params),
  },
};

export default resources;
