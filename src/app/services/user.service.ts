import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public users = [
    {
      id: 1,
      name: "Pedro",
      level: "admin"
    },
    {
      id: 2,
      name: "Fernanda",
      level: "master"
    },
    {
      id: 3,
      name: "Francisco",
      level: "admin"
    },
    {
      id: 4,
      name: "Roberto",
      level: "user"
    }
  ];

  constructor() { }

  GetUsers() {
    return this.users;
  }
}
