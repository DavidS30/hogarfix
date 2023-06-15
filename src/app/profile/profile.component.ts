import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  // create mtehod onInit
  ngOnInit(): void {
    let token = localStorage.getItem('token');
    if (token){
      this.accountService.getAPI(token).subscribe(data => {
        console.log(data);
      });
    }
  }

  constructor(public accountService: AccountsService) { }
}
