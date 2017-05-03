import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-classic2',
  templateUrl: './classic2.component.html',
  styleUrls: ['./classic2.component.css']
})
export class Classic2Component implements OnInit {

  data = {
    name: {
      first: 'test',
      last: '111'
    }
  };
  form: FormGroup;
  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormGroup({
        first: new FormControl('tee', Validators.required),
        last: new FormControl('awe', [
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(10),
        ]),
      }),
    });
  }
  doSubmit() {
    // this.form.control.markAsTouched();
    // _.keys(f.controls).array.forEach(key => {
    //   f.controls[key].markAsTouched();
    // });
  }

  doReset() {
    this.form.reset(this.data);
  }
}
