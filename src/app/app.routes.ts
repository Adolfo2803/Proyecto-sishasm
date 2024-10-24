import { Routes } from '@angular/router';
export const routes: Routes = [

    {
        path:'',
        loadComponent: () => import('./shared/components/layout/layout.component'),
        children: [
            {
                path: 'dashboard',
                loadComponent: () => import('./business/dashboard/dashboard.component')
            },
            {
                path: 'archivo_clinic',
                loadComponent: () => import('./business/archivo-clinic/archivo-clinic.component')
            },

            {
                path: 'vacaciones',
                loadComponent: () => import('./business/vacaciones/vacaciones.component')
            },
            {
                path: 'registro-cirugias',
                loadComponent: () => import('./business/registro-cirugias/registro-cirugias.component')
            },

           



            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch:'full'
            }
        ]
    },
    {
        path: '**',
        redirectTo:'dashboard'
    }

   
];