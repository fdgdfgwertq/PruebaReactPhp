import Cookies from "universal-cookie";

export const helpDropCookies = () => {
  const cookies = new Cookies();
  cookies.remove("accecs_token");
  cookies.remove("user_role");
};
