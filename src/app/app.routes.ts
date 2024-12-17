import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadComponent:()=> import('./shared/app-dashboard/app-dashboard.component').then(c => c.AppDashboardComponent)
    },
    {
        path:'product',
        loadComponent: ()=> import('./shared/app-product/app-product.component').then(c => c.AppProductComponent)
    },
    {
        path:'supplier',
        loadComponent:()=> import('./shared/app-supplier/app-supplier.component').then(c => c.AppSupplierComponent)
    }
];
