import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { NavigationService } from '../_services/navigation.service';

import { RouterModule } from '@angular/router';
import {
         MatIconModule,
         MatListModule,
         MatSidenavModule,
         MatToolbarModule
        } from '@angular/material';

@NgModule({
  declarations: [
    NavigationComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  exports: [
    NavigationComponent
  ],
 providers: [
    NavigationService
  ]
})
export class NavigationModule { }
