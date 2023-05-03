import { Injectable } from '@angular/core';
import { UserInterface } from './user-interface';

@Injectable({
  providedIn: 'root'
})


export class UserServiceService {
  // create an array of UserInterface objects
  private users: UserInterface[] = [
    {
     'id': 1,
     'name': 'John Doe',
     'img': 'assets/profile1.jpg',
     'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus.',
     'job': 'Pintor',
     'phone': '423-756-902',
     'email': 'jdoe@gmail.com',
     'rating': 2.3
    },
    {
      'id': 2,
      'name': 'Steve Rogers',
      'img': 'assets/profile2.jpg',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus.',
      'job': 'Electricista',
      'phone': '231-982-654',
      'email': 'srogers@gmail.com',
      'rating': 4.8
    },
    {
      'id': 3,
      'name': 'John Smith',
      'img': 'assets/profile3.jpg',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus.',
      'job': 'Plomero',
      'phone': '102-872-241',
      'email': 'jsmith@gmail.com',
      'rating': 1.5
    }
  ]

  // create a method to return the array of UserInterface objects
  getUsers(): UserInterface[] {
    return this.users;
  }

  // create method to return user from id
  getUserFromId(id: number): UserInterface | undefined {
    return this.users.find(user => user.id === id);
  }

  constructor() { }
}
