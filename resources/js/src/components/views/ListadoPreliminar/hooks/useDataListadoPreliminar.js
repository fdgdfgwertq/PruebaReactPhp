import { useEffect, useState } from "react";
import { helpHttp } from "../../../../helpers/helpHttp";
import { useDispatch } from "react-redux";
import {
  setDataLista,
  setMessageLista,
} from "../../../../features/dataListaPreliminarSlice";
import Cookies from "universal-cookie";

const useDataListadoPreliminar = () => {
  const [response, setResponse] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    let isMounted = true;

    (async () => {
      const cookies = new Cookies();
      const token = cookies.get("accecs_token");
      try {
        const response = await helpHttp().get("listados-preliminares", {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          signal,
        });
        console.log(response);
        if (!response.state) throw response;
        if (isMounted) dispatch(setDataLista(response.data));
      } catch (error) {
        console.log(error);
        if (isMounted) dispatch(setMessageLista(response.message));
      } finally {
        if (isMounted) setResponse(true);
      }
    })();

    return () => {
      abortController.abort();
      isMounted = false;
    };
  }, []);

  return response;
};

export default useDataListadoPreliminar;
