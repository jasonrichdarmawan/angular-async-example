import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss']
})
export class Test1Component implements OnInit {
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
