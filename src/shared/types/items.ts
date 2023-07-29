import { ICollection } from './collections';

export type CustomField = {
  id: number;
  type: string;
  value: string;
  title: string;
};

export interface IItem {
  id: number;
  collection: ICollection;
  collectionId: number;
  createdAt: string;
  updatedAt: string;
  customField: [];
  title: string;
}
