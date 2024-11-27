import { Component } from '@angular/core';

@Component({
  selector: 'app-accoutant',
  templateUrl: './accoutant.component.html',
  styleUrls: ['./accoutant.component.css']
})
export class AccoutantComponent {
  filesToValidate = ['file1.pdf', 'file2.pdf', 'file3.word'];

  // Example clients
  clients = [
    { name: 'client name', logo: '/assets/logos/ooredoo.png' },
    { name: 'client name', logo: '/assets/logos/comp2.png' },
    { name: 'client name', logo: '/assets/logos/comp3.png' },
    { name: 'client name', logo: '/assets/logos/comp4.png' },  ];

  // Example team members
  team = [
    { name: 'assistant name', photo: '/assets/logos/member1.png' },
    { name: 'assistant name', photo: '/assets/logos/member2.png' },
  ];

  // Method for logging out
  logout() {
    console.log('Logout clicked');
    // Add your logout logic here
  }

  // Method for updating the password
  updatePassword() {
    console.log('Update password clicked');
    // Add your password update logic here
  }

  // Method for checking a request
  checkRequest() {
    console.log('Check request clicked');
    // Add your check request logic here
  }
}
