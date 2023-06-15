import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import { NavListInterface } from './nav-list-interface';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit, OnDestroy {
  title = 'hogarfix';
  mobileQuery: MediaQueryList;

  public login: boolean = false;
  public id_user: number = 0;
  public data_user: any = {};

  fillerNav: NavListInterface[] = [
      {
       'name': 'Inicio',
       'router_link': 'home'
      }, 
      {
        'name':"Contacto", 
        'router_link': 'contact'
      },
      {
        'name':"Ingreso",
        'router_link': 'login'
      },
  ];

  ngOnInit(): void {
      // obtener login
      this.accountService.getLogin().subscribe(data => {
        this.login = data;
        if (this.login) {
          this.fillerNav.push(
            {
              'name':"Perfil",
              'router_link': 'profile'
            },
          );
        }else {
          this.fillerNav = this.fillerNav.filter(item => item.name !== 'Perfil');
        }
      });

  }

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public accountService: AccountsService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener("change",this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener("change",this._mobileQueryListener);
  }
}
