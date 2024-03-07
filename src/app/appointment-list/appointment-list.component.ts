import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css',
})
export class AppointmentListComponent implements OnInit {
  newAppointmentTitle: string = '';
  newAppointmentDate: Date = new Date();
  appointments: Appointment[] = [];

  ngOnInit(): void {
    let savedAppointments = localStorage.getItem('appointments');
    // retrieve local storage
    this.appointments = savedAppointments ? JSON.parse(savedAppointments) : [];
  }

  addAppointment() {
    if (this.newAppointmentTitle.trim().length && this.newAppointmentDate) {
      this.appointments.push({
        id: Date.now(),
        title: this.newAppointmentTitle.trim(),
        date: this.newAppointmentDate,
      });
      this.newAppointmentTitle = '';
      this.newAppointmentDate = new Date();
      // save to local storage
      localStorage.setItem('appointments', JSON.stringify(this.appointments));
    }
  }

  deleteAppointment(id: number) {
    this.appointments = this.appointments.filter(
      (appointment) => appointment.id !== id
    );
    // save to local storage
    localStorage.setItem('appointments', JSON.stringify(this.appointments));
  }

  // alternatively use a splice method
  // deleteAppointment(index: number) {
  //   this.appointments.splice(index, 1)
  // }
}
