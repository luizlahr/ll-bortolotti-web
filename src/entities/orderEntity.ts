import { ContactEntity } from "./contactEntity";

export interface OrderEntity {
  contactId: number;
  contact: ContactEntity;
  status: { id: number, status: string };
  addition: number;
  discount: number;
  value: number;
  expiresAt: Date;
  finishedAt: Date;
  deliveredAt: Date;
  createdAt: Date;
}
