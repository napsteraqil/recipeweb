import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LongCardComponent } from './long-card/long-card.component';
import { ShortCardComponent } from './short-card/short-card.component';
@NgModule({
  declarations: [
    ShortCardComponent,
    LongCardComponent
  ],
  imports: [
    CommonModule
  ],
  entryComponents: [
    ShortCardComponent,
    LongCardComponent
  ],
  exports: [
    ShortCardComponent,
    LongCardComponent
  ]
})
export class ComponentsModule { }
