import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-api-request',
  templateUrl: './api-request.component.html',
  styleUrls: ['./api-request.component.css']
})
export class ApiRequestComponent implements OnInit {

  imageData;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.imageData = this.getImages();
    console.log(this.imageData);
  }


  getImages() {
    return this.http.get('https://jsonplaceholder.typicode.com/photos');
  }

}
