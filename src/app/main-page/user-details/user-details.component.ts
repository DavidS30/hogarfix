import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map, tap } from 'rxjs';
import { UserInterface } from 'src/app/user-interface';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent{
  id$: Observable<number> = this.route.paramMap.pipe(
    map((paramMap) => Number(paramMap.get('id')))
  );
  user$: Observable<UserInterface | undefined> = this.id$.pipe(
    map((id) => this.userService.getUserFromId(id)),
    tap((user) => user === undefined && this.router.navigate(['home']))
  );
  

  constructor( private route: ActivatedRoute, private router: Router, private userService: UserServiceService) { }
}
