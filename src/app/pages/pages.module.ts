import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsComponent } from './details/details.component';
import { ComponentsModule } from '../components/components.module';
@NgModule({
  declarations: [
    DashboardComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  entryComponents: [
    DashboardComponent,
    DetailsComponent
  ],
  exports: [
    DashboardComponent,
    DetailsComponent
  ]
})
export class PagesModule { }
