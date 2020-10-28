import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

const uiModules = [
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    uiModules,
  ],
  exports: uiModules,
})
export class AppUiModule { }
