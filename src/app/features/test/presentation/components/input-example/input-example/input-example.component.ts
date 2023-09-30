import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-example',
  templateUrl: './input-example.component.html',
  styleUrls: ['./input-example.component.scss']
})
export class InputExampleComponent implements OnInit {
  _dataFromParent!: string;
  @Input() 
  set dataFromParent(dataFromParent: string) {
    console.log("data from parent changed");
    this._dataFromParent = dataFromParent;
  }
  get dataFromParent() { return this._dataFromParent; }

  constructor() { }

  ngOnInit(): void {
  }

}
