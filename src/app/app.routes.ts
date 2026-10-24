import { Routes } from '@angular/router';
import { Home } from './Page/home/home';
import { About } from './Page/about/about';
import { Contact } from './Page/contact/contact';

export const routes: Routes = [

    {
        path:'',
        component:Home
    },
    {
        path:'about',
        component:About
    },
    {
        path:'contact',
        component:Contact 
    }
];
