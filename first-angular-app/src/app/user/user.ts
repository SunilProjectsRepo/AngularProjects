import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  //This is a variable, no need to declare it with let or const. It is a public variable. 
  // If we want we can mark it as private variable "private selectedUser = DUMMY_USERS[randomIndex];"
  // private variable will be available within the class
  //selectedUser = DUMMY_USERS[randomIndex]  
  
  //Using Signal
  selectedUser = signal(DUMMY_USERS[randomIndex]) 
  
  //a function inside of a class
  // used like a property
  // with this keyword we can access the class and get other properties of the class
  //get imagePath() {
  //  return 'assets/users/' + this.selectedUser.avatar;
  //} 

  //Using Signal
  imagePath = computed(() => {
    return 'assets/users/' + this.selectedUser().avatar;
  }
  );

  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    //this.selectedUser = DUMMY_USERS[randomIndex]
    //using signal instead of above line
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }


}
