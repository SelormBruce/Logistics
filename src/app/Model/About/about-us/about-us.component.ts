import { Component, OnInit } from '@angular/core';
import  * as M from 'src/assets/materialize/js/materialize.min.js';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor() { }
  options ={
    fullWidth: true,
    indicators: true
  };
  ngOnInit() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, this.options);
  }
}
