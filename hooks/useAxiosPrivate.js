import { axiosPrivate } from "./../utils/axios";
// import { useEffect } from "react";

import isAccessTokenValid from "../utils/checkAccessTokenExpiration";

const useAxiosPrivate = () => {
  axiosPrivate.interceptors.request.use(
    (config) => {
      //Do something before request is sent
      //gắn token vào header
      const accessToken = localStorage.getItem("accessToken"); // Lấy access token từ nơi bạn đã lưu trữ
      //   console.log(accessToken);

      const isTokenValid = isAccessTokenValid(accessToken);

      if (isTokenValid && !config.headers["Authorization"]) {
        // config.headers = {
        //   authorization: `Bearer ${accessToken}`,
        // };
        config.headers["Authorization"] = `Bearer ${accessToken}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  /*
    useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        //Do something before request is sent
        //gắn token vào header
        const accessToken = localStorage.getItem("accessToken"); // Lấy access token từ nơi bạn đã lưu trữ
        console.log(accessToken);

        const isTokenValid = isAccessTokenValid(accessToken);

        if (isTokenValid) {
          config.headers = {
            authorization: `Bearer ${accessToken}`,
          };
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
    };
  }, []);*/

  return axiosPrivate;
};

export default useAxiosPrivate;
