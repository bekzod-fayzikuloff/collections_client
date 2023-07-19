interface IUser {
  username: string
}

export interface IBiggestCollection {
  itemsCount: number;
  collection: ICollection
}

export interface ICollection {
  id: number;
  custom: string;
  image?: string;
  user?: IUser
  subjectId: number | null;
  title: string;
  userId: string;
  description: string;
  createdAt: string;
  updatedAt: string
}