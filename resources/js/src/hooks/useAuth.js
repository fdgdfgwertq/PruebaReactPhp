import { useEffect, useState } from "react";
import Cookies from 'universal-cookie';

const initialAuth = {
  state: 0,
  message: '' 
}

const useAuth = () => {
  const [auth, setAuth] = useState(initialAuth);

  useEffect(() => {
    const cookies = new Cookies();
    const token = cookies.get('accecs_token');
    (async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/profile", {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          method: 'POST',
        });
        if(!response.ok) throw response;
        const data = await response.json();
        if (!data.state) setAuth({ state: 1, message: data.message });
        else setAuth({ state: 2, message: "" });
      } catch (error) {
        if (token) {
          cookies.remove("accecs_token");
          cookies.remove("user_role");
        }
        setAuth({ state: 1, message: "Error inesperado" });
      }
    })();
  }, []);
  
  return auth;
}

export default useAuth;