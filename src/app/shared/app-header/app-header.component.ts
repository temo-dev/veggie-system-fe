import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Dock } from 'primeng/dock';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './app-header.component.html',
    styleUrl: './app-header.component.css',
    standalone: true,
    imports: [Dock, CommonModule, FormsModule, TooltipModule,ButtonModule,RouterModule]
})
export class AppHeaderComponent implements OnInit {
    items: MenuItem[] | undefined;
    ngOnInit() {
        this.items = [
            {
                label: 'Dashboard',
                icon: 'pi pi-chart-line',
                routerLink:""
            },
            {
                label: 'Products',
                icon: 'pi pi-tag',
                routerLink:"product"
            },
            {
                label: 'Suppliers',
                icon: 'pi pi-warehouse',
                routerLink:"supplier"
            },
            // {
            //     label: 'Settings',
            //     icon: 'pi pi-cog',
            //     routerLink:"/dashboard"
            // }
        ];
    }
}