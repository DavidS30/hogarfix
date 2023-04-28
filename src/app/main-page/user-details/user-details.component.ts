import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserInterface } from 'src/app/user-interface';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit{
  user!: UserInterface;
  
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let user_id = params.get('id');
      this.user = this.userService.getUserFromId( +user_id!);
    });
  }

  constructor( private route: ActivatedRoute, private userService: UserServiceService) { }
}
