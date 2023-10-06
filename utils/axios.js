import axios from "axios";

// const accessToken = useSelector((state) => state.auth.accessToken);

const axiosInstance = axios.create({
  // baseURL: process.env.BASE_URL,
  baseURL: "https://user-api.dev.grailfarmer.app/api/v1/",
});

/*
// Tạo một Axios interceptor để đính kèm access token vào tiêu đề của mỗi request
axiosInstance.interceptors.request.use(
  (config) => {
    //Do something before request is sent
    //gắn token vào header
    const accessToken = window.localStorage.getItem("accessToken"); // Lấy access token từ nơi bạn đã lưu trữ
    console.log(accessToken);
    if (accessToken) {
      const isTokenValid = isAccessTokenValid(accessToken);
      if (isTokenValid) {
        config.headers = {
          authorization: `Bearer ${accessToken}`,
        };
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
*/

/*
//Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    //refresh token
    return response;
  },
  (err) => {
    return Promise.reject(err);
  }
);
*/

export const axiosPrivate = axios.create({
  baseURL: "https://user-api.dev.grailfarmer.app/api/v1/",
});

export default axiosInstance;
