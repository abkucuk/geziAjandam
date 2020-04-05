import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpResponse } from '@angular/common/http';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  place = {
    name: '',
    date: '2020-03-22T16:56:54Z',
    notes: ''
  };
  constructor(private apiService: ApiService) { }
  savePlace() {
    const data = {
      name: this.place.name,
      date: this.place.date,
      notes: this.place.notes
    };
    this.apiService.createPlace(data)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log('create.component.ts | this.apiservice.createPlace error : ');
          console.log(error);
        }
      );
  }
  ngOnInit(): void {
  }

}
