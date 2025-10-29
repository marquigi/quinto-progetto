import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data-service';

@Component({
  selector: 'app-contatto-detail.component',
  imports: [],
  templateUrl: './contatto-detail.component.html',
  styleUrl: './contatto-detail.component.css',
})
export class ContattoDetailComponent {

  dataService: DataService = inject(DataService)

  cDetail = this.dataService.saveContacts;
}
