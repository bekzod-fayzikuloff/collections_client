import axios from "axios";
import {itemsUrl} from "../constants/endpoints";

export const itemsService = {
  getItem: (itemId: number | string) => {
    return axios.get(`${itemsUrl}/${itemId}`)
  },

  getItemFilter: (q: string) => {
    return axios.get(`${itemsUrl}?q=${q}`)
  },

  getLatestItems: (latest: number) => {
    return axios.get(`${itemsUrl}?latest=${latest}`)
  }
}