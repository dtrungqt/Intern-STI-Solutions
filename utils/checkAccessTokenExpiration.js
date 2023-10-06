import jwt_decode from "jwt-decode";

const isAccessTokenValid = (accessToken) => {
  try {
    const decodedToken = jwt_decode(accessToken); // Giả sử bạn sử dụng thư viện jwt-decode để giải mã JWT token
    const currentTime = Date.now() / 1000; // Lấy thời gian hiện tại (đơn vị giây)

    // So sánh thời hạn token với thời gian hiện tại
    return decodedToken.exp > currentTime;
  } catch (error) {
    // Xử lý lỗi nếu có
    console.error("Error decoding or validating token:", error);
    return false;
  }
};

export default isAccessTokenValid;
