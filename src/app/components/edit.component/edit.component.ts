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
      Nome: [this.cDetail?.Nome, Validators.required, Validators.minLength(2), Validators.pattern(/^[A-Za-zÀ-ÖØ-öø-ÿ'\s]+$/)],
      Cognome: [this.cDetail?.Cognome, Validators.required, Validators.minLength(2), Validators.pattern(/^[A-Za-zÀ-ÖØ-öø-ÿ'\s]+$/)],
      Tipologia: [this.cDetail?.Tipologia],
      RagioneSociale: [this.cDetail?.RagioneSociale],
      Indirizzo: [this.cDetail?.Indirizzo],
      Citta: [this.cDetail?.Citta, Validators.minLength(2), Validators.pattern(/^[A-Za-zÀ-ÖØ-öø-ÿ'\s]+$/)],
      Ncivico: [this.cDetail?.Ncivico, Validators.required, Validators.pattern(/^[0-9]+[A-Za-z\/-]{0,3}$/)],
      CAP: [this.cDetail?.CAP, Validators.pattern(/^[0-9]{5}$/)],
      Provincia: [this.cDetail?.Provincia, Validators.pattern(/^[A-Z]{2}$/)],
      Nazione: [this.cDetail?.Nazione],
      Email: [this.cDetail?.Email, Validators.required, Validators.email],
      PreInt: [this.cDetail?.PreInt, Validators.pattern(/^\+[0-9]{1,3}$/)],
      Ntelefonico: [this.cDetail?.Ntelefonico, Validators.required, Validators.pattern(/^[0-9]{6,15}$/)],
      Compleanno: [this.cDetail?.Compleanno]
    });


    this.addContactFrm.get('RagioneSociale')?.disable();

    this.addContactFrm.get('Tipologia')?.valueChanges.subscribe(val => {
      const rs = this.addContactFrm.get('RagioneSociale');
      if (val === 'Azienda') {
        rs?.enable();
      } else {
        rs?.reset();
        rs?.disable();
      }
    });

  }

  salvaContatto() {
    if (this.addContactFrm.valid) {
      this.dataService.aggiornaContatto(this.contattoId, this.addContactFrm.value);

      this.router.navigate(['/contatti', this.contattoId]);
    }
  }
}
