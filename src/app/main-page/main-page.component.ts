import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccountsService } from '../accounts.service';
import { ProfilesService } from '../profiles.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit{

  users: any;

  private login: boolean = false;

  ngOnInit(): void {
      this.profileService.getAPI().subscribe(data => {
        this.users = data;
      }
    );

  }
  constructor(private accountService: AccountsService, private profileService: ProfilesService) {
    
  }
}
