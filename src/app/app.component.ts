import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.httpClient.get('/post/test', { responseType: 'text' }).subscribe(result => {
      console.log(result);
    });
    this.httpClient.get('/api/test', { responseType: 'text' }).subscribe(result => {
      console.log(result);
    });
  }

}
