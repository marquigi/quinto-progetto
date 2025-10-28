import { Injectable } from '@angular/core';
import { DataContacts } from '../models/contatto';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  saveContacts: DataContacts[] = []

  salva(contatto: DataContacts) {
    this.saveContacts.push(contatto);
  }
}
