import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  place;
  id;
  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    console.log('burası detail.component.ts id :' + this.id);
    this.apiService.getPlaceDetail(this.id).subscribe((data) => {
      console.log('detay');
      console.log(data);
      // tslint:disable-next-line:no-string-literal
      this.place = data;
    });
  }

}
