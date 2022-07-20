import { useEffect, useState } from 'react'
import Cookies from 'universal-cookie';
import { helpHttp } from '../../../../helpers/helpHttp';

const useRecordListadoPreliminar = (idListado) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    let isMounted = true;

    (async () => {
      const cookies = new Cookies();
      const token = cookies.get("accecs_token");
      try {
        const response = await helpHttp().post("listados-preliminares", {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          signal,
          body: {
            ID_LISTADO: idListado,
          },
        });
        console.log(response);
        if (!response.state) throw response;
        if (isMounted) setData(response);
      } catch (error) {
        console.log(error);
        if (isMounted) setData(error);
      }
    })();

    return () => {
      abortController.abort();
      isMounted = false;
    };
  }, [idListado]);

  return data;
};

export default useRecordListadoPreliminar