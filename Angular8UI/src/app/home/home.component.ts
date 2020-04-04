import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private apiService: ApiService) { }
  places;
  articles;
  ngOnInit() {

    this.apiService.getPlaces().subscribe((data) => {
      console.log('başlangıç');
      console.log(data);
      // tslint:disable-next-line:no-string-literal
      this.places = data;
    });

  }

}
