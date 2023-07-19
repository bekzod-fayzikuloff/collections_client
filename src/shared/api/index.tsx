import {collectionsService} from "./collections";
import {itemsService} from "./items";

export const api = {
  ...collectionsService,
  ...itemsService
}
