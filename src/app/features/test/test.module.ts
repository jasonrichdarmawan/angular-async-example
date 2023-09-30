import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { Test1Component } from './presentation/pages/test1/test1.component';
import { LoadingExampleComponent } from './presentation/components/loading-example/loading-example.component';


@NgModule({
  declarations: [
    Test1Component,
    LoadingExampleComponent
  ],
  imports: [
    CommonModule,
    TestRoutingModule
  ]
})
export class TestModule { }
