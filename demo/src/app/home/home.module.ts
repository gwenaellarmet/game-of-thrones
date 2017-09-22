import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibModule } from 'game-of-thrones';


import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        LibModule.forRoot()
    ],
    declarations: [HomeComponent],
})
export class HomeModule { }
