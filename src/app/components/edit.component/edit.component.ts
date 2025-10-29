import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data-service';

@Component({
  selector: 'app-edit.component',
  imports: [ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent {


  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private dataService = inject(DataService);
  private router = inject(Router);


  addContactFrm!: FormGroup;
  contattoId!: number;
  cDetail: any;

  ngOnInit() {
    this.contattoId = Number(this.route.snapshot.paramMap.get('id'));

    this.cDetail = this.dataService.getById(this.contattoId);

    this.addContactFrm = this.fb.group({
      Nome: [this.cDetail?.Nome, Validators.required],
      Cognome: [this.cDetail?.Cognome, Validators.required],
      Tipologia: [this.cDetail?.Tipologia],
      RagioneSociale: [this.cDetail?.RagioneSociale],
      Indirizzo: [this.cDetail?.Indirizzo],
      Citta: [this.cDetail?.Citta, Validators.required],
      Ncivico: [this.cDetail?.Ncivico, Validators.required],
      CAP: [this.cDetail?.CAP, Validators.required],
      Provincia: [this.cDetail?.Provincia, Validators.required],
      Nazione: [this.cDetail?.Nazione],
      Email: [this.cDetail?.Email, Validators.email],
      PreInt: [this.cDetail?.PreInt],
      Ntelefonico: [this.cDetail?.Ntelefonico, Validators.required],
      Compleanno: [this.cDetail?.Compleanno],
    });
  }

  salvaContatto() {
    if (this.addContactFrm.valid) {
      this.dataService.aggiornaContatto(this.contattoId, this.addContactFrm.value);

      this.router.navigate(['/contatti', this.contattoId]);
    }
  }
}
