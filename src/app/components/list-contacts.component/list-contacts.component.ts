import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data-service';

@Component({
  selector: 'app-list-contacts.component',
  imports: [],
  templateUrl: './list-contacts.component.html',
  styleUrl: './list-contacts.component.css',
})
export class ListContactsComponent {

  dataService: DataService = inject(DataService)

  contactsList = this.dataService.saveContacts;
}
