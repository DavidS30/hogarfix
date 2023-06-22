import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map, tap } from 'rxjs';
import { ProfilesService } from 'src/app/profiles.service';
import { UserInterface } from 'src/app/user-interface';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit{
  id$: Observable<number> = this.route.paramMap.pipe(
    map((paramMap) => Number(paramMap.get('id')))
  );
  user!:any;

  ngOnInit(): void {
    this.id$.subscribe((id) => {
      this.profilesService.getAPIFromId(id).subscribe((data) => {
        this.user = data;
      });
    });
  }

  

  constructor( private route: ActivatedRoute, private router: Router,
               private profilesService: ProfilesService) { }
}
