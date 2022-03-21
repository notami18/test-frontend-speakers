import axios from 'axios';

const instance = axios.create();

instance.defaults.baseURL = process.env.VUE_APP_API_URL;
instance.defaults.headers.common.Accept = "application/json";
instance.defaults.headers.common["X-APP-MODE"] = 2;
instance.defaults.headers.common["Content-Type"] = "application/json"

export default instance;