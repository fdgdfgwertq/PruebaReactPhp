import { useEffect, useState } from "react";
import { helpHttp } from "../../../../helpers/helpHttp";
import { toastMs } from "../../../../helpers/helpToastMessage";

const useDataClasificacion = (url) => {
  const [response, setResponse] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    let isMounted = true;

    (async () => {
      try {
        const response = await helpHttp().get(
          "clasificacion-recursos-atractivos/" + url,
          {
            signal,
          }
        );
        console.log(response);
        if (!response.state) throw response;
        if (isMounted) setData(response.data);
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

  return { response, data };
};

export default useDataClasificacion;
