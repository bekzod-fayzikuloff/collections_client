import axios from "axios";
import {collectionsUrl} from "../constants/endpoints";

export const collectionsService = {
  getCollections: () => {
    return axios.get(collectionsUrl)
  },
  getCollection: (id: number | string) => {
    return axios.get(`${collectionsUrl}/${id}`)
  },
  getCollectionItems: (id: number | string) => {
    return axios.get(`${collectionsUrl}/${id}/items`)
  }
}