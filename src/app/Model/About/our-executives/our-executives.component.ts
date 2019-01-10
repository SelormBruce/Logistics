import { Component, OnInit } from '@angular/core';
import * as M from 'src/assets/materialize/js/materialize.min.js';
@Component({
  selector: 'app-our-executives',
  templateUrl: './our-executives.component.html',
  styleUrls: ['./our-executives.component.css']
})
export class OurExecutivesComponent implements OnInit {

  constructor() { }
  options = {};
  ngOnInit() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, this.options);
  }

}
