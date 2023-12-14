import { Component } from '@angular/core';
import { SideNavItem } from '../models/models';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  sideNavContent: SideNavItem[] = [
    {
      title: 'view cars',
      link: 'cars/library',
    },
    {
      title: 'manage cars',
      link: 'cars/maintenance',
    },
    {
      title: 'view rentalagreements',
      link: 'cars/rentalagreements',
    },
    {
      title: 'return cars',
      link: 'cars/return',
    },
    {
      title: 'view return resquests',
      link: 'cars/returnrequests',
    }
  ]
}
