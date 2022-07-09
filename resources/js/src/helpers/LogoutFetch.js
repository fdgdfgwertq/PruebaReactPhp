import Cookies from "universal-cookie";

const LogoutFetch = async () => {
  const cookies = new Cookies();
  const token = cookies.get("accecs_token");
  try {
    const response = await fetch("http://127.0.0.1:8000/api/logout", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      method: "POST",
    });
    if (!response.ok) throw response;
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  } finally {
    if (token) {
      cookies.remove("accecs_token");
      cookies.remove("user_role");
    }
  }
}

export {LogoutFetch};