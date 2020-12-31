import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

import { LoginComponent } from './components/login/login.component';
import { AdopcionesComponent } from './components/adopciones/adopciones.component';
import { VoluntariosComponent } from './components/voluntarios/voluntarios.component';
import { GatoComponent } from './components/gato/gato.component';
import { GatosComponent } from './components/gatos/gatos.component';
import { VoluntariosFormComponent } from './components/voluntarios/voluntarios-form.component';



const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'gatos', component: GatosComponent },
    { path: 'login', component: LoginComponent },
    { path: 'adopciones', component: AdopcionesComponent },
    { path: 'voluntarios', component: VoluntariosComponent },
    { path: 'voluntario/:id', component: VoluntariosFormComponent },
    { path: 'gato/:id', component: GatoComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' } 
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);