import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  type: string;
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // this.type = this.route.params['type'];
    this.route.params.subscribe(it => this.type = it['type']);
  }
  GoFlot() {
    // this.router.navigateByUrl('/chart/flot');
    this.router.navigate(['chart', 'flot']);
  }
}
