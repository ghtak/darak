import { Contact } from "../entities/contact";

export interface ContactRepository{
    create(contact: Contact): Promise<boolean>;
    contacts(): Promise<Contact[]> 
}