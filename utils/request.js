import axios from "axios";

const request = axios.create({
  baseURL: "https://user-api.dev.grailfarmer.app/api/v1/",
});

export default request;
