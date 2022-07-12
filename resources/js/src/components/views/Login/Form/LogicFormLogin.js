import Cookies from "universal-cookie";
import { helpHttp } from "../../../../helpers/helpHttp";

const fetchLogin = async (values) => {
  const data = await helpHttp().post("login", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: values,
  });
  if (!data.state) {
    Object.entries(data.errors).forEach(
      (val) => (data.errors[val[0]] = val[1].join(""))
    );
    return data;
  }
  return data;
};

const saveCookies = (values) => {
  const { accecs_token, user_role } = values;
  console.log(accecs_token);
  console.log(user_role);
  const cookies = new Cookies();
  cookies.set("accecs_token", `${accecs_token}`, { path: "/" });
  cookies.set("user_role", user_role, { path: "/" });
};

export { fetchLogin, saveCookies };
