import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  students = ['Viwan', 'shan', 'rahul', 'akesh'];
  name: any;

  constructor() { }

  ngOnInit() {
    this.name = this.students[1];
  }

}
