import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data-service';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-list-contacts.component',
  imports: [RouterModule],
  templateUrl: './list-contacts.component.html',
  styleUrl: './list-contacts.component.css',
})
export class ListContactsComponent {

  dataService: DataService = inject(DataService)

  contactsList: any[] = []

  ngOnInit() {
    this.contactsList = this.dataService.getContacts();
  }

  cancellaConttato(id: number) {
    this.dataService.cancella(id);
    this.contactsList = this.dataService.getContacts();
  }
}
