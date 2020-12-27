import axios from "axios";

const instance = axios.create({
  //baseURL: "http://192.168.8.105:8000",
  // baseURL: "http://192.168.1.152:8000",
  baseURL: "http://192.168.8.100:8000",
});
export default instance;
