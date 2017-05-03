import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
// import * as _ from 'lodash';

@Component({
  selector: 'app-classic',
  templateUrl: './classic.component.html',
  styleUrls: ['./classic.component.css']
})
export class ClassicComponent implements OnInit {

  public data: any;

  constructor() { }

  ngOnInit() {
    this.data = {
      name: 'test'
    };
  }
  doSubmit(f: NgForm) {
    f.control.markAsTouched();
    // _.keys(f.controls).array.forEach(key => {
    //   f.controls[key].markAsTouched();
    // });
  }

  doReset(f: NgForm) {
    f.reset(this.data);
  }
}
