import isAccessTokenValid from "./checkAccessTokenExpiration";

function checkLoginStatus() {
  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken) {
    return false;
  }

  const tokenIsValid = isAccessTokenValid(accessToken);
  if (!tokenIsValid) {
    return false;
  }
  return true;
}

export default checkLoginStatus;
