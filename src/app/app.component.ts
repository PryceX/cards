import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    { 
      title: 'Neat Tree!',
      imageUrl: 'assets/tree.jpeg',
      username: 'nature',
      content: 'I saw this neat tree today'
    },
    { 
      title: 'Snowy mountain!',
      imageUrl: 'assets/mountain.jpeg',
      username: 'mountainlovaer',
      content: 'here is the picture of a snowy mountain'
    },
    { 
      title: 'Mountain Biking',
      imageUrl: 'assets/biking.jpeg',
      username: 'biking12222',
      content: 'I did some biking'
    },
    { 
      title: 'Mountain Biking',
      imageUrl: 'assets/biking.jpeg',
      username: 'biking12222',
      content: 'I did some bi'
    }
  ]
}
