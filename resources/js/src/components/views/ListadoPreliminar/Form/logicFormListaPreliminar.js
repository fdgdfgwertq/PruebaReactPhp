import Cookies from "universal-cookie";
import { helpErrors } from "../../../../helpers/helpErrors";
import { helpHttp } from "../../../../helpers/helpHttp";

const fetchCreateListaPreliminar = async (values) => {
  values.ID_FUENTE = parseInt(values.ID_FUENTE);
  const cookies = new Cookies();
  const token = cookies.get("accecs_token");
  const response = await helpHttp().post("listados-preliminares/create", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: values,
  });
  if(!response.state){
    if(response.errors) {
      helpErrors(response);
      return response;
    }
    return response; 
  }
  return response;
}

const fetchUpdateListaPreliminar = async (values) => {
  values.ID_FUENTE = parseInt(values.ID_FUENTE);
  const cookies = new Cookies();
  const token = cookies.get("accecs_token");
  const response = await helpHttp().put("listados-preliminares/update", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: values,
  });
  if (!response.state) {
    if (response.errors) {
      helpErrors(response);
      return response;
    }
    return response;
  }
  return response;
};

export { fetchCreateListaPreliminar, fetchUpdateListaPreliminar };