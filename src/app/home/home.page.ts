import { Component, OnInit } from '@angular/core';
import {Student, StudentService} from '../services/student.service';
import {AlertController, ModalController} from '@ionic/angular';
import {StudentModalPage} from '../student-modal/student-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  students: Student[];

  constructor(private service: StudentService,
              private alertCtrl: AlertController,
              private modalCtrl: ModalController
              ) { }

  ngOnInit() {
    this.service.getAll().subscribe(response => {
      this.students = response;
    });
  }

  addStudent(){
    this.modalCtrl.create({
      component: StudentModalPage
    })
        .then(modal => modal.present());
  }

  removeStudent(id: string){
    this.alertCtrl
        .create({
      header: 'Delete',
      message: 'Are you sure you want to delete?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.service.remove(id).subscribe(() => {
              this.students = this.students.filter(std => std.id !== id);
            });
          }
        },
        { text: 'No' }
      ]
    })
        .then(alertEl => alertEl.present());


  }

}
