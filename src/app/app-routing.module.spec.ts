import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Location } from '@angular/common';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
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
    fixture.ngZone.run(() => {
      router.initialNavigation();
    });
  });

  it('#app-routing navigate to "" redirects to /home', async(() => {
      fixture.ngZone.run(() => {
          router.navigate(['']);
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            expect(location.path()).toBe('/home');
          });
      });
  }));

  it('#app-routing navigate to "home" redirects to /home', async(() => {
      fixture.ngZone.run(() => {
          router.navigate(['/home']);
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            expect(location.path()).toBe('/home');
          });
      });
  }));

  it('#app-routing navigate to "address-form" redirects to /address-form', async(() => {
      fixture.ngZone.run(() => {
          router.navigate(['/address-form']);
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            expect(location.path()).toBe('/address-form');
          });
      });
  }));

  it('#app-routing navigate to "dashboard" redirects to /dashboard', async(() => {
      fixture.ngZone.run(() => {
          router.navigate(['/dashboard']);
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            expect(location.path()).toBe('/dashboard');
          });
      });
  }));

  it('#app-routing navigate to "drag-drop" redirects to /drag-drop', async(() => {
      fixture.ngZone.run(() => {
          router.navigate(['/drag-drop']);
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            expect(location.path()).toBe('/drag-drop');
          });
      });
  }));

  it('#app-routing navigate to "table" redirects to /table', async(() => {
      fixture.ngZone.run(() => {
          router.navigate(['/table']);
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            expect(location.path()).toBe('/table');
          });
      });
  }));

  it('#app-routing navigate to "tree" redirects to /tree', async(() => {
      fixture.ngZone.run(() => {
          router.navigate(['/tree']);
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            expect(location.path()).toBe('/tree');
          });
      });
  }));

  it('#app-routing navigate to "**" redirects to /page-not-found', async(() => {
      fixture.ngZone.run(() => {
          router.navigate(['/page-not-found']);
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            expect(location.path()).toBe('/page-not-found');
          });
      });
  }));

  it('#app-routing should create an instance', () => {
    expect(appRoutingModule).toBeTruthy();
  });
});
