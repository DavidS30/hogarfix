import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { HttpClient } from '@angular/common/http';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit{

  public users = this.userService.getUsers();

  private login: boolean = false;

  ngOnInit(): void {
      // this.accountService.getAPI();
  }
  constructor(private userService: UserServiceService, private accountService: AccountsService) {
    
  }
}
