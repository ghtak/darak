import { Contact } from "../entities/contact";
export interface ContactUseCase{
    contacts(): Promise<Contact[]>;
    create(contact:Contact): Promise<boolean>;
}