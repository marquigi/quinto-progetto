import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-contacts.component',
  imports: [ReactiveFormsModule],
  templateUrl: './add-contacts.component.html',
  styleUrl: './add-contacts.component.css',
})
export class AddContactsComponent implements OnInit {

  addContactFrm!: FormGroup

  ngOnInit(): void {
    this.addContactFrm = new FormGroup({
      Nome: new FormControl(''),
      Cognome: new FormControl(''),
      Tipologia: new FormControl(''),
      RagioneSociale: new FormControl(''),
      Indirizzo: new FormControl(''),
      Ncivico: new FormControl(''),
      CAP: new FormControl(''),
      Citta: new FormControl(''),
      Provincia: new FormControl(''),
      Nazione: new FormControl(''),
      Ntelefonico: new FormControl(''),
      PreInt: new FormControl('')
    });
  }

  onSubmit() {
    console.log(this.addContactFrm!.value)
  }

}
