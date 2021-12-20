import axios from "axios";
import { SERVER } from "config/config.json";

const CustomAxios = axios.create({
  baseURL: SERVER,
  headers: {
    "Content-Type": "application/json",
    "meogu-token": "" + localStorage.getItem("token"),
  },
});

export default CustomAxios;
