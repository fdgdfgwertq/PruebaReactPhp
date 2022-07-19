import { useEffect, useState } from "react";
import Echo from "laravel-echo";
import { helpHttp } from "../helpers/helpHttp";
import Cookies from "universal-cookie";
import { useDispatch } from "react-redux";
import Pusher from "pusher-js";
import { storeDataPrueba } from "../features/updateRecorSlice";

const initialConnect = {
  connect: 0,
  messageConnect: "",
};

const useWebsocket = () => {
  const dispatch = useDispatch();
  const [connect, setConnect] = useState(initialConnect);

  useEffect(() => {
    const cookies = new Cookies();
    const token = cookies.get("accecs_token");
    let echo = new Echo({
      broadcaster: "pusher",
      wsHost: window.location.hostname,
      wsPort: 6001,
      wssHost: window.location.hostname,
      wssPort: 6001,
      key: process.env.MIX_PUSHER_APP_KEY,
      disableStats: true,
      enabledTransports: ["ws", "wss"],
      forceTLS: false,
      authorizer: (channel) => {
        return {
          authorize: (socketId, callback) => {
            console.log(socketId, channel.name);
            (async () => {
              try {
                const response = await helpHttp().post("broadcasting/auth", {
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                  },
                  body: {
                    socket_id: socketId,
                    channel_name: channel.name,
                  },
                });
                callback(false, response);
                setConnect({ connect: 2, messageConnect: "" });
              } catch (error) {
                console.log(error);
                callback(true, error);
                setConnect({
                  connect: 1,
                  messageConnect: "Error al encontrar",
                });
              }
            })();
          },
        };
      },
    });
    echo.private(`UpdateEvent`).listen(".new-message-event", (e) => {
      dispatch(storeDataPrueba({ msg: e.message }));
      console.log(e);
    });
  }, []);

  return connect;
};

export default useWebsocket;
