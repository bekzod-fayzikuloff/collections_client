import axios from "axios";
import {itemsUrl} from "../constants/endpoints";

export const itemsService = {
  getLatestItems: (latest: number) => {
    return axios.get(`${itemsUrl}?latest=${latest}`)
  }
}