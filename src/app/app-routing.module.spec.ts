import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Location } from '@angular/common';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { MatButtonModule,
         MatCardModule,
         MatCheckboxModule,
         MatDialogModule,
         MatExpansionModule,
         MatFormFieldModule,
         MatIconModule,
         MatInputModule,
         MatListModule,
         MatMenuModule,
         MatPaginatorModule,
         MatSelectModule,
         MatSidenavModule,
         MatSortModule,
         MatTableModule,
         MatToolbarModule,
         MatRadioModule,
         MatGridListModule,
         MatTreeModule
       } from '@angular/material';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { TableComponent } from './table/table.component';
import { TreeComponent } from './tree/tree.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule, appRoutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NavigationService } from './_services/navigation.service';



describe('AppRoutingModule', () => {

  let appRoutingModule: AppRoutingModule;
  let location: Location;
  let router: Router;
  let fixture;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(appRoutes),
        BrowserAnimationsModule,
        MatButtonModule,
        MatCardModule,
        MatCheckboxModule,
        MatDialogModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatPaginatorModule,
        MatSelectModule,
        MatSidenavModule,
        MatSortModule,
        MatTableModule,
        MatToolbarModule,
        FormsModule,
        ReactiveFormsModule,
        MatRadioModule,
        MatGridListModule,
        DragDropModule,
        CdkTableModule,
        CdkTreeModule,
        MatTreeModule
      ],
      declarations: [
        AppComponent,
        HomeComponent,
        AddressFormComponent,
        DashboardComponent,
        DragDropComponent,
        TableComponent,
        TreeComponent,
        PageNotFoundComponent,
        NavigationComponent
      ],
      providers: [
        {
          provide: NavigationService,
          useValue: {
            setPageTitle: jasmine.createSpy('setPageTitle')
          }
        }
      ]
    });
    appRoutingModule = new AppRoutingModule();
  });

  beforeEach(() => {

    router = TestBed.get(Router);
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  });

  it('#app-routing navigate to "" redirects to /home', fakeAsync(() => {
    router.navigate(['']);
    tick();
    expect(location.path()).toBe('/home');
  }));

  it('#app-routing navigate to "home" takes you to /home', fakeAsync(() => {
    router.navigate(['/home']);
    tick();
    expect(location.path()).toBe('/home');
  }));

  it('#app-routing navigate to "address-form" takes you to /address-form', fakeAsync(() => {
    router.navigate(['/address-form']);
    tick();
    expect(location.path()).toBe('/address-form');
  }));

  it('#app-routing navigate to "dashboard" takes you to /dashboard', fakeAsync(() => {
    router.navigate(['/dashboard']);
    tick();
    expect(location.path()).toBe('/dashboard');
  }));

  it('#app-routing navigate to "drag-drop" takes you to /drag-drop', fakeAsync(() => {
    router.navigate(['/drag-drop']);
    tick();
    expect(location.path()).toBe('/drag-drop');
  }));

  it('#app-routing navigate to "table" takes you to /table', fakeAsync(() => {
    router.navigate(['/table']);
    tick();
    expect(location.path()).toBe('/table');
  }));

  it('#app-routing navigate to "tree" takes you to /tree', fakeAsync(() => {
    router.navigate(['/tree']);
    tick();
    expect(location.path()).toBe('/tree');
  }));

  it('#app-routing navigate to "**" takes you to /page-not-found', fakeAsync(() => {
    router.navigate(['/page-not-found']);
    tick();
    expect(location.path()).toBe('/page-not-found');
  }));

  it('#app-routing should create an instance', () => {
    expect(appRoutingModule).toBeTruthy();
  });
});
