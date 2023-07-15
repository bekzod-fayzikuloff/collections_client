import axios from "axios";

type Payload = {
  [key:string]: any
}

export const sendData = async (url: string, payload: Payload) => {
  return await axios.post(url,
    {...payload}
  );
}