import { collectionsService } from './collections';
import { itemsService } from './items';
import axios from 'axios';

type Payload = {
  /* eslint-disable */
  [key: string]: any;
};

export const sendData = async (url: string, payload: Payload) => {
  return await axios.post(url, { ...payload });
};

export const api = {
  ...collectionsService,
  ...itemsService,
};
