import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contatto-detail.component',
  imports: [],
  templateUrl: './contatto-detail.component.html',
  styleUrl: './contatto-detail.component.css',
})
export class ContattoDetailComponent {

  dataService: DataService = inject(DataService)

  route = inject(ActivatedRoute)

  cDetail: any;

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.cDetail = this.dataService.getById(id);
  }

}
