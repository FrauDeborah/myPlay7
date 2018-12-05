import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private pageTitle: string;

  constructor() {
    this.pageTitle = 'myPlay7';
  }

  setPageTitle(newPageTitle: string) {
    document.getElementById('spanPageTitle').innerHTML = this.pageTitle = newPageTitle;
  }

  getPageTitle() {
    return this.pageTitle;
  }
}
