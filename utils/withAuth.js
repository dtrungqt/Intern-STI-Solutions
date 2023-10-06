import { useEffect } from "react";
import { useRouter } from "next/router";

import isAccessTokenValid from "./checkAccessTokenExpiration";

const withAuth = (Component) => {
  return function WithAuth(props) {
    const router = useRouter();

    useEffect(() => {
      const accessToken = localStorage.getItem("accessToken"); // Thay thế bằng cách lấy access token từ nơi bạn đã lưu trữ
      // console.log(accessToken);
      if (accessToken) {
        const isTokenValid = isAccessTokenValid(accessToken);
        console.log(isTokenValid);

        if (!isTokenValid) {
          //   console.log("het han");
          router.push("/login");
        }
      } else {
        router.push("/login");
      }
    }, []);

    return <Component {...props} />;
  };
};

export default withAuth;
