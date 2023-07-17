export interface ICollection {
  id: number;
  custom: string;
  image?: string;
  subjectId: number | null;
  title: string;
  userId: string;
  description: string;
  createdAt: string;
  updatedAt: string
}