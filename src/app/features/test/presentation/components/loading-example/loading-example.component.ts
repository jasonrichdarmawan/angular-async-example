import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-loading-example',
  templateUrl: './loading-example.component.html',
  styleUrls: ['./loading-example.component.scss']
})
export class LoadingExampleComponent implements OnInit {
  data: Observable<string>;

  constructor() {
    this.data = new Observable(obs => {
      setTimeout(() => {
        obs.next("Hello World");
        obs.complete();
      }, 1000)
    });
  }

  ngOnInit(): void {
  }

}
