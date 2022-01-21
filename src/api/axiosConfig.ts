// axios configurations

import axios from "axios";
const BASE_URL = "https://earthquake.usgs.gov/fdsnws/event/1";

const Api = axios.create({
  baseURL: BASE_URL,
});

export default Api;
