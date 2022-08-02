import { useEffect, useState } from "react";
import { helpHttp } from "../../../../helpers/helpHttp";
import { useDispatch } from "react-redux";
import {
  setDataLista
} from "../../../../features/dataListaPreliminarSlice";
import { toastMs } from "../../../../helpers/helpToastMessage";

const useDataListadoPreliminar = () => {
  const [response, setResponse] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    let isMounted = true;

    (async () => {
      try {
        const response = await helpHttp().get("listados-preliminares", {signal});
        console.log(response);
        if (!response.state) throw response;
        if (isMounted) dispatch(setDataLista(response.data));
      } catch (error) {
        console.log(error);
        if (isMounted) toastMs().error(error.message);
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
