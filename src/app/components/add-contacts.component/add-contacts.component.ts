import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DataService } from '../../services/data-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contacts.component',
  imports: [ReactiveFormsModule],
  templateUrl: './add-contacts.component.html',
  styleUrl: './add-contacts.component.css',
})
export class AddContactsComponent implements OnInit {

  addContactFrm!: FormGroup

  dataService: DataService = inject(DataService)

  private router = inject(Router);

  ngOnInit(): void {
    this.addContactFrm = new FormGroup({
      Nome: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern(/^[A-Za-zÀ-ÖØ-öø-ÿ'\s]+$/)]),
      Cognome: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern(/^[A-Za-zÀ-ÖØ-öø-ÿ'\s]+$/)]),
      Tipologia: new FormControl(''),
      RagioneSociale: new FormControl(''),
      Indirizzo: new FormControl(''),
      Ncivico: new FormControl('', Validators.pattern(/^[0-9A-Za-z]+$/)),
      CAP: new FormControl('', [Validators.pattern(/^[0-9]{5}$/)]),
      Citta: new FormControl('', [Validators.minLength(2), Validators.pattern(/^[A-Za-zÀ-ÖØ-öø-ÿ'\s]+$/)]),
      Provincia: new FormControl('', Validators.pattern(/^[A-Z]{2}$/)),
      Email: new FormControl('', [Validators.required, Validators.email]),
      Nazione: new FormControl(''),
      Ntelefonico: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{6,15}$/)]),
      PreInt: new FormControl('', Validators.pattern(/^\+[0-9]{1,3}$/)),
      Compleanno: new FormControl('')
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

    console.log(this.addContactFrm!.value)

    if (this.addContactFrm.invalid) {
      this.addContactFrm.markAllAsTouched();
    } else {
      this.dataService.salva(this.addContactFrm!.value);
      this.addContactFrm.reset();
      this.router.navigate(['/']);
    }

  }
}
