import axios from 'axios';
import { collectionsUrl, usersUrl } from './endpoints';

export const collectionsService = {
  getCollections: () => {
    return axios.get(collectionsUrl);
  },
  getCollection: (id: number | string) => {
    return axios.get(`${collectionsUrl}/${id}`);
  },
  getCollectionItems: (id: number | string) => {
    return axios.get(`${collectionsUrl}/${id}/items`);
  },
  getUserCollections: (id: string) => {
    return axios.get(`${usersUrl}/${id}/collections`);
  },
  getBiggestCollections: (limit: number) => {
    return axios.get(`${collectionsUrl}?biggest=${limit}`);
  },
  deleteCollection: (id: number) => {
    return axios.delete(`${collectionsUrl}/${id}`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('authToken') as string).accessToken}`,
      },
    });
  },
};
