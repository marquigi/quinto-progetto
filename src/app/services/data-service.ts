import { Injectable } from '@angular/core';
import { DataContacts } from '../models/contatto';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private addId = 0;

  saveContacts: DataContacts[] = []

  getContacts() {
    return this.saveContacts;
  }

  salva(contatto: DataContacts) {
    contatto.id = ++this.addId;
    this.saveContacts.push(contatto);
  }

  getById(id: number) {
    return this.saveContacts.find(c => c.id === id);
  }

  cancella(id: number) {
    this.saveContacts = this.saveContacts.filter(c => c.id !== id);
  }

  aggiornaContatto(id: number, updatedData: DataContacts) {
    const index = this.saveContacts.findIndex(c => c.id === id);
    if (index !== -1) {
      this.saveContacts[index] = { ...this.saveContacts[index], ...updatedData };
    }
  }
}
