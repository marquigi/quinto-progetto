import { Routes } from '@angular/router';
import { AddContactsComponent } from './components/add-contacts.component/add-contacts.component';
import { ListContactsComponent } from './components/list-contacts.component/list-contacts.component';

export const routes: Routes = [

    {
        path: "addContact",
        component: AddContactsComponent
    },
    {
        path: "",
        component: ListContactsComponent
    }

];
