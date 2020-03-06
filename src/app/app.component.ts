import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angulartest';
  courses = ['JAVA', 'PYTHON', 'GRAILS', 'GO-LANG'];
  userData = [
    {id: 11, name: 'Dr Nice'},
    {id: 12, name: 'Narco'},
    {id: 13, name: 'Bombasto'},
    {id: 14, name: 'Celeritas'},
    {id: 15, name: 'Magneta'},
    {id: 16, name: 'RubberMan'},
    {id: 17, name: 'Dynama'},
    {id: 18, name: 'Dr IQ'},
    {id: 19, name: 'Magma'},
    {id: 20, name: 'Tornado'}
  ];

  userList;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.userList = this.getData();
  }

  getData() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
