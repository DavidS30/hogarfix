import { Component } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  users = this.userService.getUsers();

  constructor(private userService: UserServiceService) {
    
  }
}
