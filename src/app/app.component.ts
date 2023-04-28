import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import { NavListInterface } from './nav-list-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnDestroy{
  mobileQuery: MediaQueryList;

  fillerNav: NavListInterface[] = [
      {
       'name': 'Inicio',
       'router_link': 'home'
      }, 
      {
        'name':"Contacto", 
        'router_link': 'contact'
      },
      // {
      //   'name':"Ingreso",
      //   'router_link': 'user'
      // },
  ];


  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener("change",this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener("change",this._mobileQueryListener);
  }
}
