import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ModalController} from '@ionic/angular';
import {StudentService} from '../services/student.service';

@Component({
  selector: 'app-student-modal',
  templateUrl: './student-modal.page.html',
  styleUrls: ['./student-modal.page.scss'],
})
export class StudentModalPage implements OnInit {

  constructor(private modalCrtl: ModalController,
              private service: StudentService
              ) { }

  ngOnInit() {
  }

  closeModal(){
    this.modalCrtl.dismiss();
  }

  onSubmit(form: NgForm){
    const student = form.value;
     // console.log(student);
    this.service.create(student).subscribe(response => console.log(response));
  }

}
