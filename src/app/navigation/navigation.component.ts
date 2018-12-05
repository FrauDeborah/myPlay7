import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { filter, map, mergeMap } from 'rxjs/operators';

import { NavigationService } from '../_services/navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  navigationEnd: Observable<NavigationEnd>;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private navigationService: NavigationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    // Create an Observable NavigationEnd event
    this.navigationEnd = this.router.events.pipe(
      filter((navigationEndEvent) => navigationEndEvent instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map((route) => {
        while (route.firstChild) { route = route.firstChild; }
        return route;
      }),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route) => route.data)
    ) as Observable<NavigationEnd>;
  }

  ngOnInit() {
    // set the pageTitle using the navigationEndEvent subscription
    this.navigationEnd.subscribe(navigationEndEvent => this.navigationService.setPageTitle(navigationEndEvent['pageTitle']));
  }

}
