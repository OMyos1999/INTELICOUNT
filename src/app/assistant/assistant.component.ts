import { Component } from '@angular/core';

@Component({
  selector: 'app-assistant',
  templateUrl: './assistant.component.html',
  styleUrls: ['./assistant.component.css']
})
export class AssistantComponent {
// Sidebar Profile Data
  profileName: string = "assistant's name";

  // Search Query
  searchQuery: string = '';

  // Edited Files
  editedFiles = [
    {
      name: 'file1.png',
      edited: 'Edited 8m ago',
      icon: 'assets/word.png', // Replace with your path
    },
    {
      name: 'file2.pdf',
      edited: 'Edited 8m ago',
      icon: 'assets/pdf.png', // Replace with your path
    },
    {
      name: 'files.png',
      edited: 'Edited 8m ago',
      icon: 'assets/png.png', // Replace with your path
    },
  ];

  // User Files
  userFiles = [
    {
      name: 'file1.word',
      category: 'Bill',
      date: 'Dec 13, 2022',
      size: '2.8 MB',
      validated: false,
    },
    {
      name: 'file2.word',
      category: 'Bank statement',
      date: 'Dec 12, 2022',
      size: '242 kB',
      validated: false,
    },
  ];

  // Methods
  updatePassword() {
    alert('Update password clicked!');
  }

  logout() {
    alert('Logging out...');
  }

  searchFiles() {
    console.log('Searching for:', this.searchQuery);
  }

  openFile(file: any) {
    console.log('Opening file:', file.name);
  }

  importFile() {
    alert('Import file functionality triggered!');
  }

  exportFile() {
    alert('Export file functionality triggered!');
  }

  makeReport() {
    alert('Make a report functionality triggered!');
  }
}
