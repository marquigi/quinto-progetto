import { Injectable } from '@angular/core';
import { DataContacts } from '../models/contatto';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private addId = 0;
  private memo = 'contacts';

  saveContacts: DataContacts[] = [];

  constructor() {
    const memoContatti = localStorage.getItem(this.memo);
    if (memoContatti) {
      this.saveContacts = JSON.parse(memoContatti);
      this.addId = this.saveContacts.length ? Math.max(...this.saveContacts.map(c => c.id)) : 0;
    }
  }

  private salvaInMemo() {
    localStorage.setItem(this.memo, JSON.stringify(this.saveContacts));
  }

  getContacts() {
    return this.saveContacts;
  }

  salva(contatto: DataContacts) {
    contatto.id = ++this.addId;
    this.saveContacts.push(contatto);
    this.salvaInMemo();
  }

  getById(id: number) {
    return this.saveContacts.find(c => c.id === id);
  }

  cancella(id: number) {
    this.saveContacts = this.saveContacts.filter(c => c.id !== id);
    this.salvaInMemo();
  }

  aggiornaContatto(id: number, updatedData: DataContacts) {
    const index = this.saveContacts.findIndex(c => c.id === id);
    if (index !== -1) {
      this.saveContacts[index] = { ...this.saveContacts[index], ...updatedData, id };
      this.salvaInMemo();
    }
  }
}
