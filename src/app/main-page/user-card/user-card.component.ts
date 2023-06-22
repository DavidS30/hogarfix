import { Component, Input } from '@angular/core';
import { UserInterface } from '../../user-interface';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {

  @Input() user!: any;

}
