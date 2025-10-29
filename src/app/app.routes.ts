import { Routes } from '@angular/router';
import { AddContactsComponent } from './components/add-contacts.component/add-contacts.component';
import { ListContactsComponent } from './components/list-contacts.component/list-contacts.component';
import { ContattoDetailComponent } from './components/contatto-detail.component/contatto-detail.component';
import { EditComponent } from './components/edit.component/edit.component';

export const routes: Routes = [

    {
        path: "addContact",
        component: AddContactsComponent
    },
    {
        path: "",
        component: ListContactsComponent
    },
    {
        path: "contatti/:id",
        component: ContattoDetailComponent
    },
    {
        path: "contatti/:id/edit",
        component: EditComponent
    },


];
